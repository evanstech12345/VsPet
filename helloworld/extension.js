const vscode = require('vscode');

function activate(context) {
	context.subscriptions.push(
	  vscode.commands.registerCommand("vsPet.start", () => {
		// creates a new webview
		const panel = vscode.window.createWebviewPanel(
		  'vsPet', // type of webview
		  'Your Pet', // title of the webview
		  vscode.ViewColumn.One, // Editor column to show the new webview panel
		  {
			enableScripts: true, // enable JavaScript in the webview
		  }
		);
  
		// Set the HTML content for the webview
		panel.webview.html = getWebviewContent();
	  })
	);
  }
  
  function getWebviewContent() { /*You need html to have it show up in the webview*/
	return `
	  <html>
		<body>
		  <h1>Hello VsPet Coding!</h1>
		</body>
	  </html>
	`;
  }
  // exports.activate = activate;


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

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
