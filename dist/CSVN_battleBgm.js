/*:ja
 * @target MZ
 * @plugindesc 敵グループごとに戦闘BGMを設定する
 * @author cursed_steven
 * @base PluginCommonBase
 * @orderAfter PluginCommonBase
 * @preserve
 *
 * @help
 * RPG Maker MZ - CSVN_battleBgm.ts (transpiled)
 * ----------------------------------------------------------------------------
 * (C)2023 cursed_steven
 * This software is released under the MIT License.
 * http://opensource.org/licenses/mit-license.php
 * ----------------------------------------------------------------------------
 * Version
 * 1.0.0  2023/07/02 初版
 * ----------------------------------------------------------------------------
 * [Twitter]: https://twitter.com/cursed_steven
 *
 * 戦闘BGMを敵グループごとに、プラグインパラメータで個別に設定できます。
 *
 * @param list
 * @text 設定リスト
 * @type struct<BattleBgm>[]
 */
/*~struct~BattleBgm:ja
 *
 * @preserve
 *
 * @param troopId
 * @text 敵グループ
 * @type troop
 *
 * @param bgm
 * @text BGM
 * @type struct<BgmSetting>
 *
 * @param bgs
 * @text BGS
 * @type struct<BgsSetting>
 */
/*~struct~BgmSetting:ja
 *
 * @preserve
 *
 * @param name
 * @text ファイル名
 * @type file
 * @dir audio/bgm/
 *
 * @param volume
 * @text 音量
 * @type number
 * @default 90
 *
 * @param pitch
 * @text ピッチ
 * @type number
 * @default 100
 *
 * @param pan
 * @text パン
 * @type number
 * @default 0
 */
/*~struct~BgsSetting:ja
 *
 * @preserve
 *
 * @param name
 * @text ファイル名
 * @type file
 * @dir audio/bgs/
 *
 * @param volume
 * @text 音量
 * @type number
 * @default 90
 *
 * @param pitch
 * @text ピッチ
 * @type number
 * @default 100
 *
 * @param pan
 * @text パン
 * @type number
 * @default 0
 */
(() => {
    var CSVN_battleBgm = {
        params: PluginManagerEx.createParameter(document.currentScript),
        ipcRenderer: null,
    };
    var battleBgmList = CSVN_battleBgm.params.list;
    var _BattleManager_playBattleBgm_bbg = BattleManager.playBattleBgm;
    BattleManager.playBattleBgm = function () {
        const troopId = $gameTroop._troopId;
        const battleBgm = battleBgmList.find((b) => b.troopId === troopId);
        if (battleBgm) {
            if (battleBgm.bgm) {
                AudioManager.playBgm(battleBgm.bgm, 0);
            } else {
                AudioManager.replayBgm(BattleManager._mapBgm);
            }
            if (battleBgm.bgs) {
                AudioManager.playBgs(battleBgm.bgs, 0);
            } else {
                AudioManager.replayBgs(BattleManager._mapBgs);
            }
        } else {
            _BattleManager_playBattleBgm_bbg.call(this);
        }
    };
})();
