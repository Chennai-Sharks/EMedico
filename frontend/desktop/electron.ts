import { app, BrowserWindow } from 'electron';

const __prod__ = app.isPackaged;

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    title: 'Maxillo',
    webPreferences: {
      nodeIntegration: false, // since im not using any native features.
      nativeWindowOpen: true,
      devTools: __prod__ ? false : true,
    },
  });

  win.loadURL(__prod__ ? 'https://www.maxillo.in' : 'http://localhost:3000');

  // Open the DevTools.
  //   if (!__prod__) {
  //     win.webContents.openDevTools({ mode: "detach" });
  //   }
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
