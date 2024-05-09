/*:ja
 * @target MZ
 * @plugindesc Electron環境下でのファイルの読み書き/NW.js環境での動作も保証はする
 * @author cursed_steven
 * @base PluginCommonBase
 * @orderAfter PluginCommonBase
 * @url https://note.com/cursed_steven/n/ndfb3fc4858c6
 * @preserve
 *
 * @help
 * RPG Maker MZ - CSVN_electronStorageIOManager.ts (transpiled)
 * ----------------------------------------------------------------------------
 * (C)2023 cursed_steven
 * This software is released under the MIT License.
 * http://opensource.org/licenses/mit-license.php
 * ----------------------------------------------------------------------------
 * Version
 * 1.0.0  2023/06/20 初版 (based on StorageIOManager,DataManager,ConfigManager
 *                         in rmmz_managers.js)
 * 1.1.0  2024/05/01 CSVN_baseElectron を ON にしていない場合(=NW.js)でも
 *                   ひととおり動作するように改修
 * 1.2.0  2024/05/09 公開用に名前と内容の一部修正
 * ----------------------------------------------------------------------------
 * [Twitter]: https://twitter.com/cursed_steven
 *
 * @param gameId
 * @text ゲームID
 * @desc ローカルストレージを使用する場合のみ、データベース/システム2の項目を転記してください。
 * @type number
 */
(() => {
    // src/plugins/CSVN_electronStorageManager.ts
    if (typeof Utils.isElectron !== "function") {
        Utils.isElectron = function () {
            return typeof window.electron === "object";
        };
    }
    Utils.isElectronAvailable = function () {
        return typeof Utils.isElectron === "function" && Utils.isElectron();
    };
    var CSVN_electronStorageIOManager = {
        params: PluginManagerEx.createParameter(document.currentScript),
        ipcRenderer: Utils.isElectronAvailable()
            ? window.electron.ipcRenderer
            : null,
    };
    console.log(
        ">>>>>>>> Hello from CSVN_electronStorageIOManager.",
        CSVN_electronStorageIOManager.params
    );
    if (!Utils.isElectronAvailable()) {
        console.warn(">>>> Electron is not loaded properly, NW.js going on.");
    } else {
        CSVN_electronStorageIOManager.ipcRenderer
            .invoke("isDev")
            .then((result) => {
                return result;
            })
            .then((result) => {
                console.log(`>>>> isDev?: ${result}`);
                isDev = result;
            });
    }
    StorageIOManager.isLocalMode = function () {
        return true;
    };
    StorageIOManager.forageKey = function (savefileName) {
        return `rmmzsave.${CSVN_electronStorageIOManager.params.gameId}.${savefileName}`;
    };
    var _StorageIOManager_loadObject_nwjs = StorageIOManager.loadObject;
    StorageIOManager.loadObject = async function (savefileName) {
        if (Utils.isElectron()) {
            return await StorageIOManager.loadZip(savefileName)
                .then((zip) => StorageIOManager.zipToJson(zip))
                .then((json) => StorageIOManager.jsonToObject(json));
        } else {
            return await _StorageIOManager_loadObject_nwjs.call(
                this,
                savefileName
            );
        }
    };
    StorageIOManager.loadZip = async function (savefileName) {
        if (StorageIOManager.isLocalMode()) {
            return await StorageIOManager.loadFromLocalFile(savefileName);
        } else {
            return await StorageIOManager.loadFromForage(savefileName);
        }
    };
    StorageIOManager.loadFromLocalFile = async function (saveName) {
        if (Utils.isElectron()) {
            const filePath = await StorageIOManager.savefilePath(saveName);
            return new Promise(async (resolve, reject) => {
                const data = await StorageIOManager.readFile(filePath);
                resolve(data);
            });
        } else {
            const filePath = StorageIOManager.filePath(saveName);
            return new Promise((resolve, reject) => {
                const data = StorageIOManager.fsReadFile(filePath);
                resolve(data);
            });
        }
    };
    var _StorageIOManager_saveToLocalFile_nwjs =
        StorageIOManager.saveToLocalFile;
    StorageIOManager.saveToLocalFile = async function (savefileName, zip) {
        if (Utils.isElectron()) {
            const saveDirPath = await StorageIOManager.saveDir();
            const filePath = await StorageIOManager.savefilePath(savefileName);
            const backupFilePath = filePath + "_";
            return new Promise((resolve, reject) => {
                StorageIOManager.mkdir(saveDirPath);
                StorageIOManager.rm(backupFilePath);
                StorageIOManager.mv(filePath, backupFilePath);
                try {
                    StorageIOManager.writeFile(filePath, zip);
                    StorageIOManager.rm(backupFilePath);
                    resolve(true);
                } catch (e) {
                    try {
                        StorageIOManager.writeFile(filePath, zip);
                        StorageIOManager.rm(backupFilePath);
                    } catch (e2) {}
                    reject(e);
                }
            });
        } else {
            return _StorageIOManager_saveToLocalFile_nwjs.call(
                this,
                savefileName,
                zip
            );
        }
    };
    StorageIOManager.exists = async function (savefileName) {
        if (StorageIOManager.isLocalMode()) {
            return await StorageIOManager.localFileExists(savefileName);
        } else {
            return await StorageIOManager.forageExists(savefileName);
        }
    };
    var _StorageIOManager_localFileExists_nwjs =
        StorageIOManager.localFileExists;
    StorageIOManager.localFileExists = async function (savefileName) {
        if (Utils.isElectron()) {
            const filePath = await StorageIOManager.savefilePath(savefileName);
            return await CSVN_electronStorageIOManager.ipcRenderer.invoke(
                "exists",
                filePath
            );
        } else {
            return _StorageIOManager_localFileExists_nwjs.call(
                this,
                savefileName
            );
        }
    };
    StorageIOManager.remove = async function (saveName) {
        const saveFilePath = await this.savefilePath(saveName);
        this.rm(saveFilePath);
    };
    StorageIOManager.saveDir = async function () {
        let path;
        if (Utils.isElectronAvailable()) {
            path = await CSVN_electronStorageIOManager.ipcRenderer.invoke(
                "saveDir"
            );
        } else {
            path = "save/";
        }
        return path;
    };
    StorageIOManager.savefilePath = async function (savefileName) {
        const saveDir = await StorageIOManager.saveDir();
        return `${saveDir}${savefileName}.rmmzsave`;
    };
    StorageIOManager.rm = function (filePath) {
        if (Utils.isElectronAvailable()) {
            CSVN_electronStorageIOManager.ipcRenderer.send("rm", filePath);
        } else {
            StorageIOManager.fsUnlink(filePath);
        }
    };
    StorageIOManager.mkdir = function (dirPath) {
        if (Utils.isElectronAvailable()) {
            CSVN_electronStorageIOManager.ipcRenderer.send("mkdir", dirPath);
        } else {
            StorageIOManager.fsMkdir(dirPath);
        }
    };
    StorageIOManager.mv = function (oldPath, newPath) {
        if (Utils.isElectronAvailable()) {
            CSVN_electronStorageIOManager.ipcRenderer.send(
                "mv",
                oldPath,
                newPath
            );
        } else {
            StorageIOManager.fsRename(oldPath, newPath);
        }
    };
    StorageIOManager.readFile = async function (filePath) {
        let data;
        if (Utils.isElectronAvailable()) {
            data = await CSVN_electronStorageIOManager.ipcRenderer.invoke(
                "readFile",
                filePath
            );
        } else {
            data = StorageIOManager.fsReadFile(filePath);
        }
        return data;
    };
    StorageIOManager.writeFile = function (filePath, data) {
        if (Utils.isElectronAvailable()) {
            CSVN_electronStorageIOManager.ipcRenderer.send(
                "writeFile",
                filePath,
                data
            );
        } else {
            StorageIOManager.fsWriteFile(filePath, data);
        }
    };
    StorageIOManager.dataDir = async function () {
        let path;
        if (Utils.isElectronAvailable()) {
            path = await CSVN_electronStorageIOManager.ipcRenderer.invoke(
                "dataDir"
            );
        } else {
            path = "data/";
        }
        return path;
    };
    StorageIOManager.dataFilePath = async function (src) {
        const dataDir = await StorageIOManager.dataDir();
        return `${dataDir}${src}`;
    };
    StorageIOManager.saveData = function (data, src) {
        if (StorageIOManager.isLocalMode()) {
            StorageIOManager.saveToLocalFileNoZip(JSON.stringify(data), src);
        }
    };
    StorageIOManager.saveToLocalFileNoZip = async function (data, src) {
        const filePath = await StorageIOManager.dataFilePath(src);
        const backupFilePath = filePath + "_";
        return new Promise((resolve, reject) => {
            StorageIOManager.rm(backupFilePath);
            StorageIOManager.mv(filePath, backupFilePath);
            try {
                StorageIOManager.writeFile(filePath, data);
                StorageIOManager.rm(backupFilePath);
                resolve(true);
            } catch (e) {
                try {
                    StorageIOManager.writeFile(filePath, data);
                    StorageIOManager.rm(backupFilePath);
                } catch (e2) {}
                reject(e);
            }
        });
    };
    DataManager.loadGlobalInfo = async function () {
        const globalInfo = await StorageIOManager.loadObject("global");
        try {
            this._globalInfo = globalInfo;
            DataManager.removeInvalidGlobalInfo();
        } catch (e) {
            console.warn(">>>> failed to load globalInfo.");
            this._globalInfo = [];
        }
    };
    DataManager.loadGame = async function (savefileId) {
        const savefileName = this.makeSavename(savefileId);
        const contents = await StorageIOManager.loadObject(savefileName);
        this.createGameObjects();
        this.extractSaveContents(contents);
        this.correctDataErrors();
    };
    DataManager.savefileExists = async function (savefileId) {
        const savefileName = DataManager.makeSavename(savefileId);
        return await StorageIOManager.exists(savefileName);
    };
    ConfigManager.load = async function () {
        const config = await StorageIOManager.loadObject("config");
        ConfigManager.applyData(config || {});
        ConfigManager._isLoaded = true;
    };
})();
