const vscode = require('vscode');
const path = require('path');

/**
 * @param {vscode.ExtensionContext} context
 */

let previousTerminal = null;

function activate(context) {

	// console.log('Congratulations, your extension "jupytertomarkdown" is now active!');

	context.subscriptions.push(
		vscode.commands.registerCommand('jupytertomarkdown.ConvertToMarkdown', (uri) => {
			vscode.window.showInformationMessage('Convert To Markdown');

			let cwd = path.dirname(uri.fsPath);

			let fileName = path.basename(uri.fsPath);
			const terminal = vscode.window.createTerminal({ cwd: cwd });
			terminal.show();

			if (previousTerminal) {
				previousTerminal.dispose();
				previousTerminal = null;
			}
			previousTerminal = terminal;

			terminal.sendText(`jupyter nbconvert --to markdown '${fileName}'\n`);
		})
	);

	// vscode.commands.registerCommand("jupytertomarkdown.askQuestion", async () => {
	// 	let answer = await vscode.window.showInformationMessage("How was your day ?", "good", "bad",)
	// 	if (answer === "bad") {
	// 		vscode.window.showInformationMessage("sorry to hear it")
	// 	} else {
	// 		console.log({ answer })
	// 	}
	// });

}

// This method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
