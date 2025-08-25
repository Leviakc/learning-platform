import * as monaco from "monaco-editor/esm/vs/editor/editor.api";

export const pythonSnippets = (): Omit<
  monaco.languages.CompletionItem,
  "range"
>[] => {
  return [
    {
      label: "for: for loop",
      kind: monaco.languages.CompletionItemKind.Snippet,
      documentation: "Iterate over a sequence.",
      insertText: ["for ${1:item} in ${2:iterable}:", "\t${0:pass}"].join("\n"),
      insertTextRules:
        monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    },
    {
      label: "def: function definition",
      kind: monaco.languages.CompletionItemKind.Snippet,
      documentation: "Define a new function.",
      insertText: [
        "def ${1:function_name}(${2:parameters}):",
        '\t"""${3:docstring}"""',
        "\t${0:pass}",
      ].join("\n"),
      insertTextRules:
        monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    },
    {
      label: "if: if statement",
      kind: monaco.languages.CompletionItemKind.Snippet,
      documentation: "A conditional if statement.",
      insertText: ["if ${1:condition}:", "\t${0:pass}"].join("\n"),
      insertTextRules:
        monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    },
    {
      label: "if-else: if/else statement",
      kind: monaco.languages.CompletionItemKind.Snippet,
      documentation: "A conditional if/else statement.",
      insertText: [
        "if ${1:condition}:",
        "\t${2:pass}",
        "else:",
        "\t${0:pass}",
      ].join("\n"),
      insertTextRules:
        monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    },
    {
      label: "print: print statement",
      kind: monaco.languages.CompletionItemKind.Snippet,
      documentation: "Prints a value to the console.",
      insertText: "print(${1:value})",
      insertTextRules:
        monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    },
    {
      label: "main: main execution block",
      kind: monaco.languages.CompletionItemKind.Snippet,
      documentation: "Standard main execution block.",
      insertText: ['if __name__ == "__main__":', "\t${0:pass}"].join("\n"),
      insertTextRules:
        monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    },
    {
      label: "class: class definition",
      kind: monaco.languages.CompletionItemKind.Snippet,
      documentation: "Define a new class.",
      insertText: [
        "class ${1:ClassName}:",
        '\t"""${2:docstring}"""',
        "\tdef __init__(self, ${3:args}):",
        "\t\t${4:pass}",
        "",
        "\tdef ${5:method_name}(self):",
        "\t\t${0:pass}",
      ].join("\n"),
      insertTextRules:
        monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    },
    {
      label: "while: while loop",
      kind: monaco.languages.CompletionItemKind.Snippet,
      documentation: "A loop that continues as long as a condition is true.",
      insertText: ["while ${1:condition}:", "\t${0:pass}"].join("\n"),
      insertTextRules:
        monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    },
  ];
};
