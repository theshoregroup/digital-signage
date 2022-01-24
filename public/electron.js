// import { app, BrowserWindow } from "electron";
// import { autoUpdater } from 'electron-updater'
// import path from "path";
// import isDev from "electron-is-dev";

const { app, BrowserWindow } = require("electron");
const { autoUpdater } = require('electron-updater')
const path = require("path")
const isDev = require("electron-is-dev")


let mainWindow;


function createWindow() {
    mainWindow = new BrowserWindow({
        show: false, fullscreen: true
    });

    mainWindow.maximize()
    mainWindow.show()

    mainWindow.loadURL(
        isDev
            ? "http://localhost:3000"
            : `file://${path.join(__dirname, "../build/index.html")}`
    );

    autoUpdater.checkForUpdatesAndNotify()

    mainWindow.on("closed", () => (mainWindow = null));
}
app.on("ready", createWindow);
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});