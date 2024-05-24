/*:ja
 * @target MZ
 * @plugindesc ゲームデータを指定の変数に自動的に同期
 * @author cursed_steven
 * @base PluginCommonBase
 * @orderAfter PluginCommonBase
 * @orderAfter CSVN_excessItems
 * @preserve
 *
 * @help
 * RPG Maker MZ - CSVN_gameDataSync.ts (transpiled)
 * ----------------------------------------------------------------------------
 * (C)2023 cursed_steven
 * This software is released under the MIT License.
 * http://opensource.org/licenses/mit-license.php
 * ----------------------------------------------------------------------------
 * Version
 * 1.0.0  2023/06/22 初版 (based on CSVN_gameDataSync.js)
 * 1.1.0  2024/05/17 公開用に微修正
 * ----------------------------------------------------------------------------
 * [Twitter]: https://twitter.com/cursed_steven
 *
 * 以下のことが起こった場合、ゲーム中のいろいろな値を
 * プラグインパラメータで指定した変数に自動的に書き込みます。
 *
 * アイテムやスキルを使用したとき
 * マップを読み込んだとき
 * マップ上で歩いたとき
 * パーティーメンバーに増減があったとき
 * 所持金の増減があったとき
 * 戦闘が始まったとき
 * 戦闘に勝利したもしくは逃走したとき
 *
 * なお、変数に値の書き込みがあった場合、通常はマップやイベント等の
 * 更新処理が行われますが、このプラグインで使用する変数については、
 * その更新処理を行う対象から除外することができます。
 * (=このプラグインで設定している変数が変わってもマップやイベントが
 * 　更新されない)
 * これもプラグインパラメータで設定可能です。
 *
 * @param lastUsed
 * @text 最後に使用した＊＊
 * @type struct<LastUsed>
 *
 * @param lastSubject
 * @text 最後に行動した＊＊
 * @type struct<LastSubjectTarget>
 *
 * @param lastTarget
 * @text 最後に対象になった＊＊
 * @type struct<LastSubjectTarget>
 *
 * @param mapId
 * @text マップID
 * @type variable
 *
 * @param x
 * @text X座標
 * @type variable
 *
 * @param y
 * @text Y座標
 * @type variable
 *
 * @param lastRegion
 * @text 直前にいたリージョン
 * @type variable
 *
 * @param currentRegion
 * @text いまいるリージョン
 * @type variable
 *
 * @param lastTerrain
 * @text 直前にいた地形タグ
 * @type variable
 *
 * @param currentTerrain
 * @text いまいる地形タグ
 * @type variable
 *
 * @param gold
 * @text 所持金
 * @type variable
 *
 * @param steps
 * @text 累計歩数
 * @type variable
 *
 * @param battleCount
 * @text 戦闘回数
 * @type variable
 *
 * @param winCount
 * @text 勝利回数
 * @type variable
 *
 * @param escapeCount
 * @text 逃走回数
 * @type variable
 *
 * @param requireRefresh
 * @text 更新要求をするか
 * @desc このプラグインで指定した変数に書き込みがあったとき、マップやイベントを更新するか
 * @type struct<RequireRefresh>
 */
/*~struct~LastUsed:ja
 * @preserve
 *
 * @param skillId
 * @text 直前使用スキルのID
 * @type variable
 *
 * @param skillMpCost
 * @text 直前使用スキルの消費MP
 * @type variable
 *
 * @param skillTpCost
 * @text 直前使用スキルの消費TP
 * @type variable
 *
 * @param itemId
 * @text 直前使用アイテムのID
 * @type variable
 */
/*~struct~LastSubjectTarget:ja
 * @preserve
 *
 * @param actorId
 * @text アクターのID
 * @desc 直前に行動した/対象になったアクターのID
 * @type variable
 *
 * @param enemyIndex
 * @text 敵のインデックス
 * @desc 直前に行動した/対象になった敵のインデックス
 * @type variable
 */
/*~struct~RequireRefresh:ja
 * @preserve
 *
 * @param lastUsed
 * @text 最後に使用した＊＊
 * @type boolean
 * @default false
 * @on 更新する
 * @off 更新しない
 *
 * @param lastSubject
 * @text 最後に行動した＊＊
 * @type boolean
 * @default false
 * @on 更新する
 * @off 更新しない
 *
 * @param lastTarget
 * @text 最後に対象になった＊＊
 * @type boolean
 * @default false
 * @on 更新する
 * @off 更新しない
 *
 * @param mapId
 * @text マップID
 * @type boolean
 * @default false
 * @on 更新する
 * @off 更新しない
 *
 * @param x
 * @text X座標
 * @type boolean
 * @default false
 * @on 更新する
 * @off 更新しない
 *
 * @param y
 * @text Y座標
 * @type boolean
 * @default false
 * @on 更新する
 * @off 更新しない
 *
 * @param lastRegion
 * @text 直前にいたリージョン
 * @type boolean
 * @default false
 * @on 更新する
 * @off 更新しない
 *
 * @param currentRegion
 * @text いまいるリージョン
 * @type boolean
 * @default false
 * @on 更新する
 * @off 更新しない
 *
 * @param lastTerrain
 * @text 直前にいた地形タグ
 * @type boolean
 * @default false
 * @on 更新する
 * @off 更新しない
 *
 * @param currentTerrain
 * @text いまいる地形タグ
 * @type boolean
 * @default false
 * @on 更新する
 * @off 更新しない
 *
 * @param gold
 * @text 所持金
 * @type boolean
 * @default true
 * @on 更新する
 * @off 更新しない
 *
 * @param steps
 * @text 累計歩数
 * @type boolean
 * @default false
 * @on 更新する
 * @off 更新しない
 *
 * @param battleCount
 * @text 戦闘回数
 * @type boolean
 * @default true
 * @on 更新する
 * @off 更新しない
 *
 * @param winCount
 * @text 勝利回数
 * @type boolean
 * @default true
 * @on 更新する
 * @off 更新しない
 *
 * @param escapeCount
 * @text 逃走回数
 * @type boolean
 * @default true
 * @on 更新する
 * @off 更新しない
 */
(() => {
    // src/plugins/CSVN_gameDataSync.ts
    var CSVN_gameDataSync = {
        params: PluginManagerEx.createParameter(document.currentScript),
        ipcRenderer: null,
    };
    var lastUsed = CSVN_gameDataSync.params.lastUsed;
    var lastSubject = CSVN_gameDataSync.params.lastSubject;
    var lastTarget = CSVN_gameDataSync.params.lastTarget;
    var requireRefresh = CSVN_gameDataSync.params.requireRefresh;
    var _Game_Temp_setLastUsedSkillId_gsy =
        Game_Temp.prototype.setLastUsedSkillId;
    Game_Temp.prototype.setLastUsedSkillId = function (skillId) {
        _Game_Temp_setLastUsedSkillId_gsy.call(this, skillId);
        if (!DataManager.isBattleTest()) {
            $gameVariables.setValue(lastUsed.skillId, skillId);
            $gameVariables.setValue(
                lastUsed.skillMpCost,
                $dataSkills[skillId].mpCost
            );
            $gameVariables.setValue(
                lastUsed.skillTpCost,
                $dataSkills[skillId].tpCost
            );
        }
    };
    var _Game_Temp_setLastUsedItemId_gsy =
        Game_Temp.prototype.setLastUsedItemId;
    Game_Temp.prototype.setLastUsedItemId = function (itemId) {
        _Game_Temp_setLastUsedItemId_gsy.call(this, itemId);
        $gameVariables.setValue(lastUsed.itemId, itemId);
    };
    var _Game_Temp_setLastSubjectActorId_gsy =
        Game_Temp.prototype.setLastSubjectActorId;
    Game_Temp.prototype.setLastSubjectActorId = function (actorId) {
        _Game_Temp_setLastSubjectActorId_gsy.call(this, actorId);
        if (!DataManager.isBattleTest()) {
            $gameVariables.setValue(lastSubject.actorId, actorId);
        }
    };
    var _Game_Temp_setLastSubjectEnemyIndex_gsy =
        Game_Temp.prototype.setLastSubjectEnemyIndex;
    Game_Temp.prototype.setLastSubjectEnemyIndex = function (enemyIndex) {
        _Game_Temp_setLastSubjectEnemyIndex_gsy.call(this, enemyIndex);
        if (!DataManager.isBattleTest()) {
            $gameVariables.setValue(lastSubject.enemyIndex, enemyIndex);
        }
    };
    var _Game_Temp_setLastTargetActorId_gsy =
        Game_Temp.prototype.setLastTargetActorId;
    Game_Temp.prototype.setLastTargetActorId = function (actorId) {
        _Game_Temp_setLastTargetActorId_gsy.call(this, actorId);
        if (!DataManager.isBattleTest()) {
            $gameVariables.setValue(lastTarget.actorId, actorId);
        }
    };
    var _Game_Temp_setLastTargetEnemyIndex_gsy =
        Game_Temp.prototype.setLastTargetEnemyIndex;
    Game_Temp.prototype.setLastTargetEnemyIndex = function (enemyIndex) {
        _Game_Temp_setLastTargetEnemyIndex_gsy.call(this, enemyIndex);
        if (!DataManager.isBattleTest()) {
            $gameVariables.setValue(lastTarget.enemyIndex, enemyIndex);
        }
    };
    var _Game_Map_setup_gsy = Game_Map.prototype.setup;
    Game_Map.prototype.setup = function (mapId) {
        _Game_Map_setup_gsy.call(this, mapId);
        $gameVariables.setValue(CSVN_gameDataSync.params.mapId, mapId);
    };
    Game_Party.prototype.syncPlayerPosition = function () {
        const x = $gamePlayer.x;
        const y = $gamePlayer.y;
        const param = CSVN_gameDataSync.params;
        $gameVariables.setValue(param.mapId, $gameMap.mapId());
        $gameVariables.setValue(param.x, x);
        $gameVariables.setValue(param.y, y);
        $gameVariables.setValue(
            param.lastRegion,
            $gameVariables.value(param.currentRegion)
        );
        $gameVariables.setValue(param.currentRegion, $gameMap.regionId(x, y));
        $gameVariables.setValue(
            param.lastTerrain,
            $gameVariables.value(param.currentTerrain)
        );
        $gameVariables.setValue(
            param.currentTerrain,
            $gameMap.terrainTag(x, y)
        );
    };
    var _Game_Party_onPlayerWalk_gsy = Game_Party.prototype.onPlayerWalk;
    Game_Party.prototype.onPlayerWalk = function () {
        _Game_Party_onPlayerWalk_gsy.call(this);
        this.syncPlayerPosition();
    };
    var _Game_Party_getOnOffVehicle_gsy = Game_Party.prototype.getOnOffVehicle;
    Game_Party.prototype.getOnOffVehicle = function () {
        _Game_Party_getOnOffVehicle_gsy.call(this);
        this.syncPlayerPosition();
    };
    var _Game_Party_addActor_gsy = Game_Party.prototype.addActor;
    Game_Party.prototype.addActor = function (actorId) {
        _Game_Party_addActor_gsy.call(this, actorId);
        if (!DataManager.isBattleTest()) {
            $gameVariables.setValue(
                CSVN_gameDataSync.params.partySize,
                this.size()
            );
        }
    };
    var _Game_Party_removeActor_gsy = Game_Party.prototype.removeActor;
    Game_Party.prototype.removeActor = function (actorId) {
        _Game_Party_removeActor_gsy.call(this, actorId);
        if (!DataManager.isBattleTest()) {
            $gameVariables.setValue(
                CSVN_gameDataSync.params.partySize,
                this.size()
            );
        }
    };
    var _Game_Party_gainGold_gsy = Game_Party.prototype.gainGold;
    Game_Party.prototype.gainGold = function (amount) {
        _Game_Party_gainGold_gsy.call(this, amount);
        if (!DataManager.isBattleTest()) {
            $gameVariables.setValue(CSVN_gameDataSync.params.gold, this.gold());
        }
    };
    var _Game_Party_increaseSteps_gsy = Game_Party.prototype.increaseSteps;
    Game_Party.prototype.increaseSteps = function () {
        _Game_Party_increaseSteps_gsy.call(this);
        $gameVariables.setValue(CSVN_gameDataSync.params.steps, this.steps());
    };
    var _Game_System_onBattleStart_gsy = Game_System.prototype.onBattleStart;
    Game_System.prototype.onBattleStart = function () {
        _Game_System_onBattleStart_gsy.call(this);
        if (!DataManager.isBattleTest()) {
            $gameVariables.setValue(
                CSVN_gameDataSync.params.battleCount,
                this.battleCount()
            );
        }
    };
    var _Game_System_onBattleWin_gsy = Game_System.prototype.onBattleWin;
    Game_System.prototype.onBattleWin = function () {
        _Game_System_onBattleWin_gsy.call(this);
        if (!DataManager.isBattleTest()) {
            $gameVariables.setValue(
                CSVN_gameDataSync.params.winCount,
                this.winCount()
            );
        }
    };
    var _Game_System_onBattleEscape_gsy = Game_System.prototype.onBattleEscape;
    Game_System.prototype.onBattleEscape = function () {
        _Game_System_onBattleEscape_gsy.call(this);
        if (!DataManager.isBattleTest()) {
            $gameVariables.setValue(
                CSVN_gameDataSync.params.escapeCount,
                this.escapeCount()
            );
        }
    };
    var _Game_Variables_setValue_gsy = Game_Variables.prototype.setValue;
    Game_Variables.prototype.setValue = function (varId, value) {
        _Game_Variables_setValue_gsy.call(this, varId, value);
        Object.keys(CSVN_gameDataSync.params).forEach((k) => {
            if (
                (varId === CSVN_gameDataSync.params[k] && requireRefresh[k]) ||
                $gameVariables.value(CSVN_gameDataSync.params.lastRegion) !==
                    $gameVariables.value(CSVN_gameDataSync.params.currentRegion)
            ) {
                this.onChange();
            }
        });
    };
})();
