/*:ja
 * @target MZ
 * @plugindesc 敵の出現頻度を上げる
 * @author cursed_steven
 * @base PluginCommonBase
 * @orderAfter PluginCommonBase
 * @preserve
 *
 * @help
 * RPG Maker MZ - CSVN_liberama.ts (transpiled)
 * ----------------------------------------------------------------------------
 * (C)2023 cursed_steven
 * This software is released under the MIT License.
 * http://opensource.org/licenses/mit-license.php
 * ----------------------------------------------------------------------------
 * Version
 * 1.0.0  2023/11/09 初版
 * 1.1.0  2024/06/11 公開用に一部修正
 * ----------------------------------------------------------------------------
 * [Twitter]: https://twitter.com/cursed_steven
 *
 * 以下の手順で、所定のスイッチが入っている間敵遭遇を増やします。
 *
 * 1. プラグインパラメータで有効判定に使うスイッチを決める
 * 2. コモンイベント等でそのスイッチを入れる
 * 3. 2と同時に累計歩数を利用して期限切れとなる歩数を設定する
 * -- このスイッチが入っている間に敵遭遇が増える
 * 4. コモンイベント(並列処理トリガー)で累計歩数を監視する
 * 5. 累計歩数が期限に達したらスイッチを切る
 *
 * @param switchId
 * @text 有効判定スイッチ
 * @type switch
 *
 * @param rate
 * @text 遭遇倍率
 * @type number
 * @min 1
 */

const CSVN_liberama: PluginConsts = {
    params: PluginManagerEx.createParameter(document.currentScript),
    ipcRenderer: null,
};

const paramSwId: number = CSVN_liberama.params.switchId;
const rate: number = CSVN_liberama.params.rate;

const _Game_Player_encounterProgressValue_lib =
    Game_Player.prototype.encounterProgressValue;
Game_Player.prototype.encounterProgressValue = function () {
    let value = _Game_Player_encounterProgressValue_lib.call(this);
    if ($gameSwitches.value(paramSwId)) {
        value *= rate;
    }
    return value;
};
