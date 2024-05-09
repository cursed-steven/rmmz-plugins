/*:ja
 * @target MZ
 * @plugindesc Electronで起動している環境用の共通関数群
 * @author cursed_steven
 * @base PluginCommonBase
 * @orderAfter PluginCommonBase
 * @url https://note.com/cursed_steven/n/ndfb3fc4858c6
 * @preserve
 *
 * @help
 * RPG Maker MZ - CSVN_baseElectron.ts (transpiled)
 * ----------------------------------------------------------------------------
 * (C)2023 cursed_steven
 * This software is released under the MIT License.
 * http://opensource.org/licenses/mit-license.php
 * ----------------------------------------------------------------------------
 * Version
 * 1.0.0  2023/06/16 初版 (based on CSVN_electronDebugHelper.js)
 * 1.1.0  2023/06/18 CSVN_baseElectron.ts に改称
 * 1.2.0  2024/05/09 公開用に名前と内容の一部修正
 * ----------------------------------------------------------------------------
 * [Twitter]: https://twitter.com/cursed_steven
 *
 * ツクールMZデフォルトの NW.js ではなく、 Electron で
 * 開発、テスト、デプロイ(=配布用パッケージ生成)を行うときの、
 * 共通関数群です。
 * ※ブラウザ向けのビルドは現状考慮していません。
 *
 * 詳細についてはこちらをご確認ください。
 * https://note.com/cursed_steven/n/ndfb3fc4858c6
 *
 * ◆ショートカット
 * [Win]
 * Ctrl+R: リロード
 * Alt+Ctrl+I: 開発者ツール開閉
 * F2: FPSカウント表示/非表示
 * [macOS]
 * cmd+R: リロード
 * option+Cmd+I: 開発者ツール開閉
 * F2: FPSカウント表示/非表示
 *
 * ◆タイトル画面省略
 * プラグインパラメータでタイトル画面省略について設定できます。
 * 0: 無効
 * 1: ニューゲーム開始
 * 2: 最新セーブデータで開始(オートセーブをのぞく)
 *
 * ◆F9動作変更
 * F9でデバッグウィンドウが起動する動作を変更します。
 * 0: コンソールにスイッチ名・変数名もまとめて表示
 * 1: デバッグウィンドウ(従来通りの動作)
 * 2: 両方
 *
 * ◆暗号化素材使用の強制
 * ツクール本体側のデプロイメント時に暗号化した画像や音源を
 * Electron 上のテスト中にも使用するよう強制することができます。
 * ※暗号化済み素材へ入れ替えは手動でがんばる想定なので、
 * 　暗号化前のものは別途バックアップしておいてください。
 *
 * @param cutTitle
 * @text タイトルカット
 * @desc タイトル画面をとばしてゲームを開始します。
 * @default 0
 * @type select
 * @option 無効
 * @value 0
 * @option ニューゲーム開始
 * @value 1
 * @option 最新データをロード
 * @value 2
 *
 * @param alternativeF9
 * @text F9操作変更
 * @desc デバッグウィンドウを出さずにスイッチと変数の内容をコンソールに流します。
 * @default 0
 * @type select
 * @option コンソール
 * @value 0
 * @option デバッグウィンドウ
 * @value 1
 * @option 両方
 * @value 2
 *
 * @param forceDecryption
 * @text 強制復号
 * @desc テスト中も画像と音源が暗号化済みである前提で動作するよう強制します
 * @type boolean
 * @default false
 *
 * @param encryptionKey
 * @text 復号キー
 * @desc 暗号化後のプロジェクトの data/System.json 末尾に記載の encryptionKey の値を設定します。
 */
(() => {
    // src/plugins/CSVN_baseElectron.ts
    Utils.isElectron = function () {
        return typeof window.electron === "object";
    };
    var CSVN_baseElectron = {
        params: PluginManagerEx.createParameter(document.currentScript),
        ipcRenderer: Utils.isElectron() ? window.electron.ipcRenderer : null,
    };
    console.log(
        ">>>>>>>> Hello from CSVN_baseElectron.",
        CSVN_baseElectron.params
    );
    var isDev;
    if (typeof window.electron === "undefined") {
        console.warn(">>>> Electron is not loaded properly.");
    } else {
        CSVN_baseElectron.ipcRenderer
            .invoke("isDev")
            .then((result) => {
                return result;
            })
            .then((result) => {
                console.log(`>>>> isDev?: ${result}`);
                isDev = result;
            });
    }
    var _Scene_Boot_start_bse = Scene_Boot.prototype.start;
    Scene_Boot.prototype.start = function () {
        _Scene_Boot_start_bse.apply(this, arguments);
        this.cutSceneTitle();
    };
    Scene_Boot.prototype.cutSceneTitle = async function () {
        switch (CSVN_baseElectron.params.cutTitle) {
            case 1:
                this.goToNewGame();
                break;
            case 2:
                const result = await this.goToLatestContinue();
                if (!result) {
                    this.goToNewGame();
                }
                break;
        }
    };
    Scene_Boot.prototype.goToNewGame = function () {
        DataManager.setupNewGame();
        SceneManager.goto(Scene_Map);
    };
    Scene_Boot.prototype.goToLatestContinue = async function () {
        if (DataManager.isAnySavefileExists()) {
            await DataManager.loadGame(DataManager.latestSavefileId());
            SceneManager.goto(Scene_Map);
            $gameSystem.onAfterLoad();
            return true;
        } else {
            return false;
        }
    };
    Scene_Boot.prototype.setEncryptionInfo = function () {
        const forceDecryption = CSVN_baseElectron.params.forceDecryption;
        const encryptionKey = CSVN_baseElectron.params.encryptionKey;
        let hasImages;
        let hasAudio;
        let key;
        if (forceDecryption && encryptionKey) {
            hasImages = true;
            hasAudio = true;
            key = encryptionKey;
        } else {
            hasImages = $dataSystem.hasEncryptedImages;
            hasAudio = $dataSystem.hasEncryptedAudio;
            key = $dataSystem.encryptionKey;
        }
        Utils.setEncryptionInfo(hasImages, hasAudio, key);
    };
    var _Scene_Map_updateCallDebug_bse = Scene_Map.prototype.updateCallDebug;
    Scene_Map.prototype.updateCallDebug = function () {
        if (this.isDebugCalled()) {
            switch (CSVN_baseElectron.params.alternativeF9) {
                case 0:
                    $gameSwitches.console();
                    $gameVariables.console();
                    break;
                case 1:
                    _Scene_Map_updateCallDebug_bse.call(this);
                    break;
                case 2:
                    $gameSwitches.console();
                    $gameVariables.console();
                    _Scene_Map_updateCallDebug_bse.call(this);
                    break;
            }
        }
    };
    Game_Temp.prototype.isPlaytest = function () {
        return isDev;
    };
    Game_Switches.prototype.console = function () {
        console.log("");
        console.log(">>>> $s");
        let sObj = {
            name: "",
            value: false,
        };
        let data = [];
        $dataSystem.switches.forEach((s, i) => {
            data.push({
                name: s,
                value: $gameSwitches.value(i),
            });
        });
        console.table(data);
        console.log("");
    };
    Game_Variables.prototype.console = function () {
        console.log("");
        console.log(">>>> $v");
        let vObj = {
            name: "",
            value: null,
        };
        let data = [];
        $dataSystem.variables.forEach((name, i) => {
            data.push({
                name,
                value: $gameVariables.value(i),
            });
        });
        console.table(data);
        console.log("");
    };
})();
