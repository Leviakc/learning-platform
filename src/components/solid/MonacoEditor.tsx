import { createEffect, createSignal, onCleanup, onMount, Show } from "solid-js";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
import "@/scripts/userWorker";
import TokyoNightStorm from "@/theme/tokyo-night-storm.json";
import { editorStore, setEditorStore } from "@/stores/editorStore";

interface EditorProps {
  initialCode?: string;
  language?: string;
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

      editor = monaco.editor.create(container, {
        value: props.initialCode,
        renderLineHighlightOnlyWhenFocus: true,
        language: props.language || "python",
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
