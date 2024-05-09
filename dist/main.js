var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
    for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
    if ((from && typeof from === "object") || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
            if (!__hasOwnProp.call(to, key) && key !== except)
                __defProp(to, key, {
                    get: () => from[key],
                    enumerable:
                        !(desc = __getOwnPropDesc(from, key)) ||
                        desc.enumerable,
                });
    }
    return to;
};
var __toESM = (mod, isNodeMode, target) => (
    (target = mod != null ? __create(__getProtoOf(mod)) : {}),
    __copyProps(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule
            ? __defProp(target, "default", { value: mod, enumerable: true })
            : target,
        mod
    )
);
var __toCommonJS = (mod) =>
    __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main/main.ts
var main_exports = {};
__export(main_exports, {
    mainWindowHeight: () => mainWindowHeight,
    mainWindowWidth: () => mainWindowWidth,
});
module.exports = __toCommonJS(main_exports);
var import_node_path = __toESM(require("path"));
var import_node_fs = __toESM(require("fs"));
var import_buffer = require("buffer");
var import_electron = require("electron");
function isDev() {
    return true;
}
function isDarwin() {
    return process.platform === "darwin";
}
var mainWindow;
var mainWindowWidth = 816;
var mainWindowHeight = isDarwin() ? 652 : 624;
function onAppResize() {
    const size = mainWindow.getSize();
    const width = size[0];
    const zoom = width / mainWindowWidth;
    mainWindow.webContents.setZoomFactor(zoom);
}
function createWindow() {
    const iconPath = isDev() ? "icon/icon.png" : "project/icon/icon.png";
    const indexPath = isDev() ? "../../index.html" : "project/index.html";
    mainWindow = new import_electron.BrowserWindow({
        width: mainWindowWidth,
        height: mainWindowHeight,
        minWidth: mainWindowWidth,
        minHeight: isDarwin() ? mainWindowHeight + 28 : mainWindowHeight,
        icon: iconPath,
        webPreferences: {
            preload: import_node_path.default.resolve(__dirname, "preload.js"),
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
import_electron.app.whenReady().then(createWindow);
import_electron.app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});
import_electron.app.once("window-all-closed", () => import_electron.app.quit());
import_electron.ipcMain.handle("isDev", (e) => {
    return isDev();
});
import_electron.ipcMain.handle("saveDir", (e) => {
    return import_node_path.default.join(
        import_node_path.default.resolve(require.main.filename, "../../.."),
        "save/"
    );
});
import_electron.ipcMain.handle("dataDir", (e) => {
    return import_node_path.default.join(
        import_node_path.default.resolve(require.main.filename, "../../.."),
        "data/"
    );
});
import_electron.ipcMain.handle("exists", (e, filePath) => {
    return import_node_fs.default.existsSync(filePath);
});
import_electron.ipcMain.on("mkdir", (e, dirPath) => {
    if (!import_node_fs.default.existsSync(dirPath)) {
        import_node_fs.default.mkdirSync(dirPath);
    }
});
import_electron.ipcMain.on("rm", (e, filePath) => {
    if (import_node_fs.default.existsSync(filePath)) {
        import_node_fs.default.unlinkSync(filePath);
    }
});
import_electron.ipcMain.on("mv", (e, oldPath, newPath) => {
    if (import_node_fs.default.existsSync(oldPath)) {
        import_node_fs.default.renameSync(oldPath, newPath);
    }
});
import_electron.ipcMain.handle("readFile", (e, filePath) => {
    if (import_node_fs.default.existsSync(filePath)) {
        return import_node_fs.default.readFileSync(filePath, {
            encoding: "utf8",
        });
    } else {
        return null;
    }
});
import_electron.ipcMain.on("writeFile", (e, filePath, data) => {
    import_node_fs.default.writeFileSync(
        filePath,
        typeof data === "string" ? data : import_buffer.Buffer.from(data)
    );
});
// Annotate the CommonJS export names for ESM import in node:
0 &&
    (module.exports = {
        mainWindowHeight,
        mainWindowWidth,
    });
