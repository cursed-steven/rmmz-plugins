/*:ja
 * @target MZ
 * @plugindesc 使いそうなプラグインコマンド
 * @author cursed_steven
 * @base PluginCommonBase
 * @orderAfter PluginCommonBase
 * @preserve
 *
 * @help
 * RPG Maker MZ - CSVN_usefulPluginCommands.ts (transpiled)
 * ----------------------------------------------------------------------------
 * (C)2023 cursed_steven
 * This software is released under the MIT License.
 * http://opensource.org/licenses/mit-license.php
 * ----------------------------------------------------------------------------
 * Version
 * 1.0.0  2023/09/19 初版
 * 1.1.0  2024/05/07 公開用に名前と内容の一部修正
 * ----------------------------------------------------------------------------
 * [Twitter]: https://twitter.com/cursed_steven
 *
 * イベントコマンドで組もうとすると意外に面倒な処理をプラグインコマンドひとつで
 * 行えるようにしたものです。
 *
 * ◆宿賃を計算して所定の変数にセット
 *
 * プラグインパラメータで計算結果を入れる変数を指定し、プラグインコマンドの
 * 引数で宿賃1人分を指定して呼び出すと、宿賃 x 生存人数が指定変数に
 * 格納されます。
 *
 * ◆宿屋式全回復
 *
 * 生存メンバーのHP/MPだけが全回復します。
 *
 * ◆宿屋処理実行
 *
 * 宿賃計算プラグインコマンドを呼び出したあとでこのプラグインコマンドを呼ぶと、
 * 生存者分の宿賃が支払われ、宿屋式全回復が行われます。
 *
 * ◆生存アクターのうち先頭にいるアクターのアクターIDを指定変数に入れる
 *
 * これを呼び出しておいて、メッセージで \n[指定した変数] とすると、
 * 生存アクターの先頭のメンバーの名前を簡単に呼べます。
 * 変数はプラグインパラメータで指定します。
 *
 * ◆戦闘メンバーのレベル平均を指定変数に入れる
 *
 * 戦闘メンバーのレベルの平均を、プラグインパラメータで指定した変数に入れます。
 *
 * ◆指定の職業が戦闘メンバーにいるか
 *
 * プラグインコマンドの引数で指定した職業のメンバーが、戦闘メンバーの中に
 * いるかどうかを、プラグインパラメータで指定したスイッチに入れます。
 *
 * @param aliveLeaderNameVarId
 * @text 生存先頭アクターID
 * @desc を入れる変数
 * @type variable
 *
 * @param innFeeVarId
 * @text 宿賃計算結果
 * @desc を入れる変数
 * @type variable
 *
 * @param averageLevelVarId
 * @text パーティーの平均LV
 * @desc を入れる変数
 * @type variable
 *
 * @command setInnFee
 * @text 宿賃計算結果を所定の変数にセット
 *
 * @arg innFee
 * @type number
 * @min 1
 *
 * @command innExec
 * @text 宿屋式回復実行
 *
 * @command recoverWithoutState
 * @text ステート以外のHP/MP回復
 *
 * @command setAliveLeaderMemberId
 * @text 生存先頭アクターID
 * @desc を所定の変数にセット
 *
 * @command setAverageLevel
 * @text パーティーの平均レベル
 * @desc を所定の変数にセット
 *
 * @command hasClassMember
 * @text 指定クラスがパーティーにいるか
 *
 * @arg classId
 * @type class
 *
 * @arg switchId
 * @text 結果格納先スイッチ
 * @type switch
 */
(() => {
    // src/plugins/CSVN_usefulPluginCommands.ts
    var CSVN_commonEvents = {
        params: PluginManagerEx.createParameter(document.currentScript),
        ipcRenderer: null,
    };
    var innFeeVarId = CSVN_commonEvents.params.innFeeVarId;
    var aliveLeaderNameVarId = CSVN_commonEvents.params.aliveLeaderNameVarId;
    var averageLevelVarId = CSVN_commonEvents.params.averageLevelVarId;
    PluginManagerEx.registerCommand(
        document.currentScript,
        "setInnFee",
        (args) => {
            const innFee = args.innFee;
            const fee = innFee * $gameParty.aliveMembers().length;
            $gameVariables.setValue(innFeeVarId, fee);
        }
    );
    PluginManagerEx.registerCommand(document.currentScript, "innExec", () => {
        const fee = $gameVariables.value(innFeeVarId);
        $gameParty.recoverWithoutState();
        $gameParty.gainGold(fee * -1);
    });
    PluginManagerEx.registerCommand(
        document.currentScript,
        "recoverWithoutState",
        () => {
            $gameParty.recoverWithoutState();
        }
    );
    PluginManagerEx.registerCommand(
        document.currentScript,
        "setAverageLevel",
        () => {
            const averageLevel = $gameParty.averageLevel();
            $gameVariables.setValue(averageLevelVarId, averageLevel);
        }
    );
    PluginManagerEx.registerCommand(
        document.currentScript,
        "hasClassMember",
        (args) => {
            const classId = args.classId;
            const switchId = args.switchId;
            const result = $gameParty
                .battleMembers()
                .some((m) => m.currentClass().id === classId);
            $gameSwitches.setValue(switchId, result);
        }
    );
    PluginManagerEx.registerCommand(
        document.currentScript,
        "setAliveLeaderMemberId",
        () => {
            $gameParty.setAliveLeaderMemberId();
        }
    );
    Game_BattlerBase.prototype.recoverWithoutState = function () {
        if (!this.isDeathStateAffected()) {
            this._hp = this.mhp;
            this._mp = this.mmp;
        }
    };
    Game_Party.prototype.recoverWithoutState = function () {
        for (const actor of this.battleMembers()) {
            actor.recoverWithoutState();
        }
    };
    Game_Party.prototype.setAliveLeaderMemberId = function () {
        const aliveLeader = this.battleMembers().find(
            (a) => !a.isDeathStateAffected()
        );
        $gameVariables.setValue(aliveLeaderNameVarId, aliveLeader.actorId());
    };
    Game_Party.prototype.averageLevel = function () {
        return (
            this.battleMembers().reduce((r, actor) => r + actor._level, 0) /
            this.battleMembers().length
        );
    };
})();
