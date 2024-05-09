/*=============================================================================
 preload.ts
-------------------------------------------------------------------------------
 Version History:
 1.0.0 2023/06/16 cursed_steven     初版
 ------------------------------------------------------------------------------
 Contact:
 [Twitter]  https://twitter.com/cursed_steven
 [note]     https://note.com/cursed_steven/n/n56c4cd52558e
=============================================================================*/

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = "1";
import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electron", {
    ipcRenderer: ipcRenderer,
});
