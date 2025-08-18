import { onCleanup, onMount } from "solid-js";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
import "@/scripts/userWorker";
import TokyoNightStorm from "@/theme/tokyo-night-storm.json";

interface EditorProps {
  initialCode?: string;
  language?: string;
  theme?: string;
}
export const MonacoEditor = (props: EditorProps) => {
  let container: HTMLDivElement | undefined;
  let editor: monaco.editor.IStandaloneCodeEditor | undefined;

  onMount(() => {
    if (container) {
      monaco.editor.defineTheme("TokyoNightStorm", {
        base: "vs-dark",
        inherit: true,
        ...TokyoNightStorm,
      });

      editor = monaco.editor.create(container, {
        value: props.initialCode || "",
        language: props.language || "python",
        theme: props.theme || "TokyoNightStorm",
        automaticLayout: true,
        wordBasedSuggestions: "currentDocument",
        lineNumbers: "off",
        wordWrap: "on",
      });
    }
  });

  onCleanup(() => {
    if (editor) {
      editor.dispose();
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
