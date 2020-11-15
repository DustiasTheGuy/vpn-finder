const { app, BrowserWindow } = require('electron')

let appWindow
let production = false;

let initWindow = () => {
    appWindow = new BrowserWindow({
        width: 1000,
        height: 800,
        minWidth: 1370,
        minHeight: 1104,
        webPreferences: { nodeIntegration: true },
    })

    appWindow.maximize();
    //appWindow.setMenu(null);

    if(production) {
        appWindow.loadURL(`file://${__dirname}/dist/admin/index.html`);
    } else {
        appWindow.loadURL("http://localhost:4200");
    };

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
