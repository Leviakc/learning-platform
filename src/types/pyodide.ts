export interface PyodideInterface {
  runPython(code: string): any;
  runPythonAsync(code: string): Promise<any>;
  globals: {
    get(name: string): any;
    set(name: string, value: any): void;
    has(name: string): boolean;
  };
  setStdout(options: { batched?: (output: string) => void }): void;
}

declare global {
  interface Window {
    loadPyodide: (options: { indexURL: string }) => Promise<PyodideInterface>;
  }
}
