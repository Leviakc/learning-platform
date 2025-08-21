import { createSignal } from "solid-js";
import type * as monaco from "monaco-editor/esm/vs/editor/editor.api";

type EditorStore = monaco.editor.IStandaloneCodeEditor | null;

export const [editorStore, setEditorStore] = createSignal<EditorStore>(null);
