// src/main/preload.ts
var import_electron = require("electron");
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = "1";
import_electron.contextBridge.exposeInMainWorld("electron", {
    ipcRenderer: import_electron.ipcRenderer,
});
