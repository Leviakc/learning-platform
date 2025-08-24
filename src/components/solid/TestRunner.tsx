import { createSignal, onMount, For, Show, type Component } from "solid-js";
import { editorStore } from "@/stores/editorStore";
import type { PyodideInterface } from "@/types/pyodide";

export interface Test {
  type:
    | "variable_equals"
    | "function_returns"
    | "output_contains"
    | "variable_exists"
    | "list_length";
  description: string;
  variableName?: string;
  expectedValue?: any;
  functionName?: string;
  inputs?: any[];
  expectedOutput?: string;
  expectedType?: string;
  expectedLength?: number;
}

interface TestResult {
  description: string;
  passed: boolean;
  message: string;
  details?: string;
}

interface TestRunnerProps {
  tests: Test[];
  runButtonId: string;
}

const getStatusMessage = (results: TestResult[]) => {
  const passedCount = results.filter((r) => r.passed).length;
  const totalCount = results.length;
  if (totalCount === 0) return "Click 'Run Tests' to check your code.";
  if (passedCount === totalCount) return "🎉 All tests passed! Great job!";
  return `${passedCount} of ${totalCount} tests passed. Keep going!`;
};

export const TestRunner: Component<TestRunnerProps> = (props) => {
  const [pyodide, setPyodide] = createSignal<PyodideInterface | null>(null);
  const [isLoading, setIsLoading] = createSignal(true);
  const [isEvaluating, setIsEvaluating] = createSignal(false);
  const [results, setResults] = createSignal<TestResult[]>([]);
  const [statusMessage, setStatusMessage] = createSignal(
    "Loading Python environment...",
  );

  onMount(async () => {
    try {
      // Load Pyodide from CDN
      const pyodideInstance = await (window as any).loadPyodide({
        indexURL: "https://cdn.jsdelivr.net/pyodide/v0.28.2/full/",
      });

      setPyodide(pyodideInstance);
      setIsLoading(false);
      setStatusMessage("Click 'Run Tests' to check your code.");

      const externalStatus = document.getElementById("exercise-status");
      if (externalStatus) {
        const statusParagraph = externalStatus.querySelector("p");
        if (statusParagraph) {
          statusParagraph.textContent = "Click 'Run Tests' to check your code.";
        }
      }

      // Attach listener to the run button
      const runButton = document.getElementById(props.runButtonId);
      if (runButton) {
        runButton.addEventListener("click", runTests);
      }
    } catch (error) {
      setStatusMessage("❌ Failed to load Python environment");
      setIsLoading(false);
    }
  });

  const runTests = async () => {
    const py = pyodide();
    const editor = editorStore();

    if (!py || !editor) {
      return;
    }

    setIsEvaluating(true);
    setResults([]);

    const code = editor.getValue();
    const newResults: TestResult[] = [];
    let capturedOutput = "";

    // Handle empty code more robustly
    let codeToExecute = code.trim();
    if (!codeToExecute) {
      codeToExecute = "pass  # No code provided";
    }

    py.runPython(`
        import sys
        import io
        from contextlib import redirect_stdout
        captured_output = io.StringIO()
    `);

    try {
      py.runPython(`
# Clear any previous output
captured_output = io.StringIO()

# Execute user code with output capture
with redirect_stdout(captured_output):
    exec("""${codeToExecute.replace(/"/g, '\\"')}""")

# Get the output
output = captured_output.getvalue()
      `);

      capturedOutput = py.runPython("output");

      // Run each test
      for (const test of props.tests) {
        const result = await runSingleTest(py, test, capturedOutput);
        newResults.push(result);
      }
    } catch (error: any) {
      newResults.push({
        description: "Code Execution",
        passed: false,
        message: "Your code has an error and cannot run.",
        details: error.message,
      });
    }

    setResults(newResults);
    setStatusMessage(getStatusMessage(newResults));

    const externalStatus = document.getElementById("exercise-status");
    if (externalStatus) {
      const statusParagraph = externalStatus.querySelector("p");
      if (statusParagraph) {
        statusParagraph.textContent = getStatusMessage(newResults);
      }
    }

    setIsEvaluating(false);
  };

  const runSingleTest = async (
    py: PyodideInterface,
    test: Test,
    output: string,
  ): Promise<TestResult> => {
    try {
      switch (test.type) {
        case "variable_equals":
          return testVariableEquals(py, test);

        case "variable_exists":
          return testVariableExists(py, test);

        case "function_returns":
          return testFunctionReturns(py, test);

        case "output_contains":
          return testOutputContains(test, output);

        case "list_length":
          return testListLength(py, test);

        default:
          return {
            description: test.description,
            passed: false,
            message: `Unknown test type: ${test.type}`,
          };
      }
    } catch (error: any) {
      return {
        description: test.description,
        passed: false,
        message: "Test execution failed",
        details: error.message,
      };
    }
  };

  const testVariableEquals = (py: PyodideInterface, test: Test): TestResult => {
    const varName = test.variableName!;

    // Check if variable exists
    const exists = py.runPython(`'${varName}' in globals()`);
    if (!exists) {
      return {
        description: test.description,
        passed: false,
        message: `Variable '${varName}' not found. Make sure to create it.`,
      };
    }

    // Get the actual value
    const actualValue = py.runPython(`${varName}`);

    if (JSON.stringify(actualValue) === JSON.stringify(test.expectedValue)) {
      return {
        description: test.description,
        passed: true,
        message: `✓ Variable '${varName}' correctly set to ${JSON.stringify(test.expectedValue)}`,
      };
    } else {
      return {
        description: test.description,
        passed: false,
        message: `Variable '${varName}' has wrong value`,
        details: `Expected: ${JSON.stringify(test.expectedValue)}\nActual: ${JSON.stringify(actualValue)}`,
      };
    }
  };

  const testVariableExists = (py: PyodideInterface, test: Test): TestResult => {
    const varName = test.variableName!;
    const exists = py.runPython(`'${varName}' in globals()`);

    if (exists) {
      const actualType = py.runPython(`type(${varName}).__name__`);
      let message = `✓ Variable '${varName}' exists`;

      if (test.expectedType) {
        if (actualType === test.expectedType) {
          message += ` and is a ${test.expectedType}`;
        } else {
          return {
            description: test.description,
            passed: false,
            message: `Variable '${varName}' exists but is wrong type`,
            details: `Expected: ${test.expectedType}\nActual: ${actualType}`,
          };
        }
      }

      return {
        description: test.description,
        passed: true,
        message,
      };
    } else {
      return {
        description: test.description,
        passed: false,
        message: `Variable '${varName}' not found. Make sure to create it.`,
      };
    }
  };

  const testFunctionReturns = (
    py: PyodideInterface,
    test: Test,
  ): TestResult => {
    const funcName = test.functionName!;

    // Check if function exists
    const exists = py.runPython(
      `'${funcName}' in globals() and callable(${funcName})`,
    );
    if (!exists) {
      return {
        description: test.description,
        passed: false,
        message: `Function '${funcName}' not found or not callable.`,
      };
    }

    try {
      // Call function with inputs
      const inputs = test.inputs || [];
      const inputsStr = inputs.map((i) => JSON.stringify(i)).join(", ");
      const actualValue = py.runPython(`${funcName}(${inputsStr})`);

      if (JSON.stringify(actualValue) === JSON.stringify(test.expectedValue)) {
        return {
          description: test.description,
          passed: true,
          message: `✓ Function '${funcName}(${inputsStr})' returned correct value`,
        };
      } else {
        return {
          description: test.description,
          passed: false,
          message: `Function '${funcName}' returned wrong value`,
          details: `Expected: ${JSON.stringify(test.expectedValue)}\nActual: ${JSON.stringify(actualValue)}`,
        };
      }
    } catch (error: any) {
      return {
        description: test.description,
        passed: false,
        message: `Error calling function '${funcName}'`,
        details: error.message,
      };
    }
  };

  const testOutputContains = (test: Test, output: string): TestResult => {
    const expected = test.expectedOutput!;

    if (output.includes(expected)) {
      return {
        description: test.description,
        passed: true,
        message: `✓ Output contains '${expected}'`,
      };
    } else {
      return {
        description: test.description,
        passed: false,
        message: `Output doesn't contain expected text`,
        details: `Expected to find: "${expected}"\nActual output: "${output.trim() || "(no output)"}"`,
      };
    }
  };

  const testListLength = (py: PyodideInterface, test: Test): TestResult => {
    const varName = test.variableName!;

    const exists = py.runPython(`'${varName}' in globals()`);
    if (!exists) {
      return {
        description: test.description,
        passed: false,
        message: `Variable '${varName}' not found.`,
      };
    }

    const isList = py.runPython(`isinstance(${varName}, list)`);
    if (!isList) {
      return {
        description: test.description,
        passed: false,
        message: `Variable '${varName}' is not a list.`,
      };
    }

    const actualLength = py.runPython(`len(${varName})`);
    if (actualLength === test.expectedLength) {
      return {
        description: test.description,
        passed: true,
        message: `✓ List '${varName}' has correct length (${test.expectedLength})`,
      };
    } else {
      return {
        description: test.description,
        passed: false,
        message: `List '${varName}' has wrong length`,
        details: `Expected: ${test.expectedLength}\nActual: ${actualLength}`,
      };
    }
  };

  return (
    <div class="space-y-4">
      {/* Loading State */}
      <Show when={isLoading()}>
        <div class="flex items-center gap-2 rounded-lg border p-4">
          <div class="border-primary h-4 w-4 animate-spin rounded-full border-b-2"></div>
          <span class="text-sm">Loading Python environment...</span>
        </div>
      </Show>

      {/* Test Results */}
      <Show when={!isLoading()}>
        <div class="space-y-3">
          {/* Evaluating State */}
          <Show when={isEvaluating()}>
            <div class="text-muted-foreground flex items-center gap-2 rounded-lg border p-4">
              <div class="border-primary h-4 w-4 animate-spin rounded-full border-b-2"></div>
              <span>Running tests...</span>
            </div>
          </Show>

          {/* Results List */}
          <Show when={!isEvaluating() && results().length > 0}>
            <div class="space-y-2">
              <For each={results()}>
                {(result) => (
                  <div
                    class={`rounded-lg border p-3 ${
                      result.passed
                        ? "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950"
                        : "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950"
                    }`}
                  >
                    <div class="flex items-start gap-2">
                      <div
                        class={`mt-1 h-4 w-4 flex-shrink-0 rounded-full ${
                          result.passed ? "bg-green-500" : "bg-red-500"
                        }`}
                      />
                      <div class="min-w-0 flex-1">
                        <p class="text-sm font-medium">{result.description}</p>
                        <p class="text-muted-foreground mt-1 text-sm">
                          {result.message}
                        </p>
                        <Show when={result.details}>
                          <pre class="mt-2 rounded bg-gray-100 p-2 text-xs whitespace-pre-wrap dark:bg-gray-800">
                            {result.details}
                          </pre>
                        </Show>
                      </div>
                    </div>
                  </div>
                )}
              </For>
            </div>
          </Show>

          {/* Empty State */}
          <Show when={!isEvaluating() && results().length === 0}>
            <div class="text-muted-foreground rounded-lg border p-4 text-center">
              <p class="text-sm">
                Results will appear here after you run the tests.
              </p>
            </div>
          </Show>
        </div>
      </Show>
    </div>
  );
};
