/*=============================================================================
 main.ts
-------------------------------------------------------------------------------
 Version History:
 1.0.0 2023/06/13 cursed_steven     初版
 1.0.1 2024/04/16 cursed_steven     スケーリング対応
 ------------------------------------------------------------------------------
 Contact:
 [Twitter]  https://twitter.com/cursed_steven
 [note]     https://note.com/cursed_steven/n/n56c4cd52558e
=============================================================================*/

import path from "node:path";
import fs from "node:fs";
import { Buffer } from "buffer";
// eslint-disable-next-line node/no-unpublished-import
import { BrowserWindow, app, ipcMain } from "electron";

function isDev() {
    // console.log("env: ", process.env.NODE_ENV);
    return process.env.NODE_ENV === "development";
}

function isDarwin() {
    return process.platform === "darwin";
}

let mainWindow: BrowserWindow;
export const mainWindowWidth = 816;
// macOSの場合のみ本来のサイズ+28
export const mainWindowHeight = isDarwin() ? 652 : 624;

function onAppResize() {
    const size = mainWindow.getSize();
    const width = size[0];
    const zoom = width / mainWindowWidth;
    mainWindow.webContents.setZoomFactor(zoom);
}

function createWindow() {
    const iconPath = isDev() ? "icon/icon.png" : "project/icon/icon.png";
    const indexPath = isDev() ? "../../index.html" : "project/index.html";

    mainWindow = new BrowserWindow({
        width: mainWindowWidth,
        height: mainWindowHeight,
        minWidth: mainWindowWidth,
        minHeight: isDarwin() ? mainWindowHeight + 28 : mainWindowHeight,
        icon: iconPath,
        webPreferences: {
            preload: path.resolve(__dirname, "preload.js"),
        },
    });
    mainWindow.on("resize", () => {
        onAppResize();
    });
    mainWindow.setMenu(null);
    mainWindow.setAspectRatio(17 / 13);

    mainWindow.loadFile(indexPath).then(onAppResize);
    if (isDev()) {
        mainWindow.webContents.openDevTools({ mode: "detach" });
    }
}
app.whenReady().then(createWindow);

// macOSでドックアイコンをクリックしたときにウィンドウを再作成する
app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});
app.once("window-all-closed", () => app.quit());

ipcMain.handle("isDev", (e) => {
    // return process.env.NODE_ENV === "development";
    return isDev();
});

ipcMain.handle("saveDir", (e) => {
    return path.join(path.resolve(require.main.filename, "../../.."), "save/");
});

ipcMain.handle("dataDir", (e) => {
    return path.join(path.resolve(require.main.filename, "../../.."), "data/");
});

ipcMain.handle("exists", (e, filePath) => {
    return fs.existsSync(filePath);
});

ipcMain.on("mkdir", (e, dirPath) => {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
    }
});

ipcMain.on("rm", (e, filePath) => {
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
    }
});

ipcMain.on("mv", (e, oldPath, newPath) => {
    if (fs.existsSync(oldPath)) {
        fs.renameSync(oldPath, newPath);
    }
});

ipcMain.handle("readFile", (e, filePath) => {
    if (fs.existsSync(filePath)) {
        return fs.readFileSync(filePath, { encoding: "utf8" });
    } else {
        return null;
    }
});

ipcMain.on("writeFile", (e, filePath, data) => {
    fs.writeFileSync(
        filePath,
        typeof data === "string" ? data : Buffer.from(data)
    );
});
