const { app, BrowserView } = require('electron');

let mainWindow;

app.whenReady().then(() => {
  mainWindow = new BrowserView({})
})
