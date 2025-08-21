import { onCleanup, onMount } from "solid-js";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
import "@/scripts/userWorker";
import TokyoNightStorm from "@/theme/tokyo-night-storm.json";
import { setEditorStore } from "@/stores/editorStore";

interface EditorProps {
  initialCode?: string;
  language?: string;
  theme?: string;
}
export const MonacoEditor = (props: EditorProps) => {
  let container: HTMLDivElement | undefined;
  let editor: monaco.editor.IStandaloneCodeEditor | null;

  onMount(() => {
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
        wordWrap: "on",
        minimap: {
          enabled: false,
        },
      });

      setEditorStore(editor);
    }
  });

  onCleanup(() => {
    if (editor) {
      editor.dispose();
      setEditorStore(null);
    }
  });

  return (
    <div
      ref={container}
      style={{
        height: "500px",
      }}
    ></div>
  );
};
