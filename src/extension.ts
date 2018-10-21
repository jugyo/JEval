import * as vscode from "vscode";
import jeval from "./jeval";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("extension.jeval.eval", () => {
      jeval.eval();
    })
  );
}

export function deactivate() {}
