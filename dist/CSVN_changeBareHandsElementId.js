/*:ja
 * @target MZ
 * @plugindesc 素手の攻撃属性を設定する
 * @author cursed_steven
 * @base PluginCommonBase
 * @orderAfter PluginCommonBase
 *
 * @help
 * RPG Maker MZ - CSVN_changeBareHandsElementId.js
 * ----------------------------------------------------------------------------
 * (C)2024 cursed_steven
 * This software is released under the MIT License.
 * http://opensource.org/licenses/mit-license.php
 * ----------------------------------------------------------------------------
 * Version
 * 1.0.0  2024/04/21 初版
 * ----------------------------------------------------------------------------
 * [Twitter]: https://twitter.com/cursed_steven
 *
 * @param bareHandsElementId
 * @text 素手の攻撃属性(ID)
 * @type number
 * @default 1
 */

(() => {
    "use strict";
    const param = PluginManagerEx.createParameter(document.currentScript);
    const _Game_Actor_bareHandsElementId =
        Game_Actor.prototype.bareHandsElementId;

    Game_Actor.prototype.bareHandsElementId = function () {
        if (!param.bareHandsElementId) {
            return _Game_Actor_bareHandsElementId.call(this);
        } else {
            return param.bareHandsElementId;
        }
    };
})();
