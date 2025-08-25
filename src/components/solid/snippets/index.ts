import { type IRange, type languages } from "monaco-editor";

type Language = "python" | "sql";

export const getSnippetsForLanguage = async (
  language: Language,
  range: IRange,
): Promise<languages.CompletionItem[]> => {
  if (language === "python") {
    const { pythonSnippets } = await import("./python");

    const result = pythonSnippets().map((snippet) => ({
      ...snippet,
      range,
    }));

    return result;
  }

  return [];
};
