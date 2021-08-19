const electron = require('electron');
const { clipboard } = require('electron');
const electronEjs = require('ejs-electron');

const path = require('path');
const url = require('url');

const app = electron.app;                          // Module to control application life.
const globalShortcut = electron.globalShortcut;    // Module to capture keyboard shortcut events.
const BrowserWindow = electron.BrowserWindow;      // Module to create native browser window.

const Menu = electron.Menu
Menu.setApplicationMenu(null);

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

// Set keys for ejs
if (process.env.NODE_ENV === 'development') {
  electronEjs.data({ 'url': 'http://qse.localhost' });
} else {
  electronEjs.data({ 'url': 'https://qse.moe.edu.sg' });
}

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true,
    },
    kiosk: true
  });

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.ejs'),
    protocol: 'file:',
    slashes: true
  }));

  // Open the DevTools.
  if (process.env.NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools();
  }

  // Disable special keys
  globalShortcut.register('PrintScreen', () => {});

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
    clipboard.clear();
  })

  mainWindow.on('blur', function() {
    clipboard.clear();
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
