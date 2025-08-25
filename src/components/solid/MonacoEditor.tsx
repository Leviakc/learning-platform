import { createSignal, onCleanup, onMount, Show } from "solid-js";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
import "@/scripts/userWorker";
import TokyoNightStorm from "@/theme/tokyo-night-storm.json";
import { setEditorStore } from "@/stores/editorStore";
import { getSnippetsForLanguage } from "./snippets";

interface EditorProps {
  initialCode?: string;
  language: "python" | "sql";
  theme?: string;
}

export const MonacoEditor = (props: EditorProps) => {
  let container: HTMLDivElement | undefined = undefined;
  let editor: monaco.editor.IStandaloneCodeEditor | null = null;
  const [isLoading, setIsLoading] = createSignal(true);

  onMount(() => {
    const screenWidth = window.screen.width;

    if (container) {
      monaco.editor.defineTheme("TokyoNightStorm", {
        base: "vs-dark",
        inherit: true,
        ...TokyoNightStorm,
      });

      monaco.languages.registerCompletionItemProvider(props.language, {
        async provideCompletionItems(model, position) {
          const word = model.getWordUntilPosition(position);
          const range = {
            startLineNumber: position.lineNumber,
            endLineNumber: position.lineNumber,
            startColumn: word.startColumn,
            endColumn: word.endColumn,
          };

          // Get word-based suggestions from the current document
          const wordSuggestions = monaco.languages.CompletionItemKind.Text;
          const textContent = model.getValue();
          const currentWord = word.word.toLowerCase();
          
          // Extract words from the document that match the current input
          const words = textContent.match(/\b\w+\b/g) || [];
          const uniqueWords = [...new Set(words)];
          
          const wordBasedSuggestions = uniqueWords
            .filter(w => 
              w.toLowerCase().startsWith(currentWord) && 
              w.toLowerCase() !== currentWord &&
              w.length > 1
            )
            .map(w => ({
              label: w,
              kind: wordSuggestions,
              insertText: w,
              range,
            }));

          return {
            suggestions: [
              ...(await getSnippetsForLanguage(props.language, range)),
              ...wordBasedSuggestions,
            ],
          };
        },
      });

      editor = monaco.editor.create(container, {
        value: props.initialCode,
        renderLineHighlightOnlyWhenFocus: true,
        language: props.language,
        theme: props.theme || "TokyoNightStorm",
        automaticLayout: true,
        wordBasedSuggestions: "currentDocument",
        lineNumbers: "off",
        fontSize: screenWidth < 768 ? 14 : 17,
        padding: {
          top: 4,
        },
        wordWrap: "on",
        minimap: {
          enabled: false,
        },
        quickSuggestions: {
          other: true,
          comments: true,
          strings: true,
        },
        snippetSuggestions: "top",
      });

      setEditorStore(editor);
      setIsLoading(false);
    }
  });

  onCleanup(() => {
    if (editor) {
      editor.dispose();
      setEditorStore(null);
    }
  });

  return (
    <div class="relative h-full">
      <div ref={container} class="h-full" />

      <Show when={isLoading()}>
        <div class="bg-background/80 absolute inset-0 flex items-center justify-center backdrop-blur-sm">
          <span>Loading Editor...</span>
        </div>
      </Show>
    </div>
  );
};
