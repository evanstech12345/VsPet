// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
//!make it so it saves your pets progress if needed 
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
context.subscriptions.push(
	vscode.commands.registerCommand("vsPet.start", () => {
		//creates a new webview
		const panel = vscode.window.createWebviewPanel(
			'vsPet',//type of webview
			'Your Pet',//title of the webview
			vscode.ViewColumn.One,//Editor column to show the new webview panel
			{}//webview options
		)

	})
)
// 	// Use the console to output diagnostic information (console.log) and errors (console.error)
// 	// This line of code will only be executed once when your extension is activated
// 	console.log('Congratulations, your extension "VSPET" is now active!');

// 	// The command has been defined in the package.json file
// 	// Now provide the implementation of the command with  registerCommand
// 	// The commandId parameter must match the command field in package.json
// 	let disposable = vscode.commands.registerCommand('helloworld.helloWorld', function () {
// 		// The code you place here will be executed every time your command is executed

// 		// Display a message box to the user
// 		vscode.window.showInformationMessage('Hello from VsPet!');
// 	});

// 	context.subscriptions.push(disposable);
// }
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
