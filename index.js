const { app, BrowserWindow } = require('electron')
const createWindow = () => {
const win = new BrowserWindow({
    frame: false,
    titleBarOverlay:false,
    width: 800,
    height: 600
})
win.setWindowButtonPosition({ x: 50, y: 20 }) // This line doesn't work
win.setWindowButtonVisibility(true);
win.loadFile('index.html')
}
app.whenReady().then(() => {
    createWindow()
})