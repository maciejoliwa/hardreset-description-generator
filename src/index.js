const { app, BrowserWindow } = require('electron');
const { join } = require('path');
const url = require('url');

require('dotenv').config();

const createWindow = () => {
  const window = new BrowserWindow({
    width: 450,
    height: 740,
    title: 'Hardreset Description Generator',
    resizable: true,
    autoHideMenuBar: true,
    icon: join(__dirname, '..', 'logo.ico'),
    webPreferences: {
      preload: join(__dirname, 'preload.js'),
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: true
    }
  });

  window.loadFile(join(__dirname, '..', 'application', 'index.html'))
}

app.whenReady().then(() => createWindow());
