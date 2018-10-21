import * as vscode from "vscode";

const _eval = (_code: string): any => {
  const result = eval(_code);
  return result;
};

const _stringify = (object: any): string => {
  return JSON.stringify(object, null, "  ");
};

const jeval = {
  eval: async () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }
    const selection = editor.selection;
    const code = editor.document.getText(selection);
    if (code.trim().length === 0) {
      return;
    }

    let stringifiedResult = "";
    try {
      const result = _eval(code);
      stringifiedResult = _stringify(result);
    } catch (e) {
      stringifiedResult = e.name + ": " + e.message;
    }
    await editor.edit(editBuilder => {
      editBuilder.replace(selection, stringifiedResult);
    });
  }
};
export default jeval;
