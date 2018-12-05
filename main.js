// Modules to control application life and create native browser window
const {app, BrowserWindow,ipcMain} = require('electron')
const path = require('path');
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
let loginWindow
function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 1280, 
    height: 720,
    autoHideMenuBar: true, 
    webPreferences: {
    javascript: true,
    plugins: true,
    nodeIntegration: false,
    webSecurity: false,
    preload: path.join(__dirname, './renderer.js') 
  }})
  mainWindow.loadURL('http://localhost:8080/think/note')
  mainWindow.show()
}
ipcMain.on('showHomePage',(event,arg)=>{
  loginWindow.close()
  createMainWindow()
  loginWindow = null
})
function createWindow () {
  // Create the browser window.
  loginWindow = new BrowserWindow({
    width: 430, 
    height: 640,
    show:false,
    frame:false,
    resizable:false,
    autoHideMenuBar: true, 
    webPreferences: {
    javascript: true,
    plugins: true,
    nodeIntegration: false,
    webSecurity: false,
    preload: path.join(__dirname, './renderer.js') 
  }})

  // and load the index.html of the app.
  loginWindow.loadURL('http://localhost:8080/login')
  loginWindow.once('ready-to-show',()=>loginWindow.show())
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  loginWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    loginWindow = null
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
