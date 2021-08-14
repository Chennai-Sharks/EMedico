import { app, BrowserWindow, Menu } from 'electron';

import menuTray from './apptray';

let menu: Menu;
const __prod__ = app.isPackaged;

function createWindow() {
  // Create the window.
  const win = new BrowserWindow({
    width: 1200,
    height: 780,
    title: 'Maxillo',
    webPreferences: {
      nodeIntegration: false, // since im not using any native features.
      nativeWindowOpen: true,
      devTools: __prod__ ? false : true,
    },
  });

  // applying custom menu
  menu = Menu.buildFromTemplate(menuTray);
  Menu.setApplicationMenu(menu);

  win.loadURL(__prod__ ? 'https://www.maxillo.in' : 'http://localhost:3000');
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
