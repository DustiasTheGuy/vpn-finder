const { app, BrowserWindow } = require('electron')
const url = require("url");
const path = require("path");

let appWindow
let production = false;

let initWindow = () => {
    appWindow = new BrowserWindow({
        width: 1000,
        height: 800,
        webPreferences: { nodeIntegration: true }
    });

    if(production) {
        // Electron Build Path
        appWindow.loadURL(
            url.format({
            pathname: path.join(__dirname, `/dist/index.html`),
            protocol: "file:",
            slashes: true
            })
        );
        
    } else {
        appWindow.loadURL("http://localhost:4200");
    };

    // Initialize the DevTools.
    //appWindow.webContents.openDevTools()
    appWindow.on('closed', () => appWindow = null);
};

app.on('ready', initWindow);

// Close when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();   // On macOS specific close process
});

app.on('activate', () => {
  if (win === null) initWindow();
});
