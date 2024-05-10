/*:ja
 * @target MZ
 * @plugindesc 地形タグによってダメージ床の挙動を変化させる
 * @author cursed_steven
 * @base PluginCommonBase
 * @orderAfter PluginCommonBase
 * @preserve
 *
 * @help
 * RPG Maker MZ - CSVN_damageFloors.ts (transpiled)
 * ----------------------------------------------------------------------------
 * (C)2023 cursed_steven
 * This software is released under the MIT License.
 * http://opensource.org/licenses/mit-license.php
 * ----------------------------------------------------------------------------
 * Version
 * 1.0.0  2023/07/02 初版 (based on CSVN_variableFloorDamage2.js)
 * 1.1.0  2024/05/11 公開用に一部修正
 * ----------------------------------------------------------------------------
 * [Twitter]: https://twitter.com/cursed_steven
 *
 * デフォルトでは固定10でフラッシュも赤だけの床ダメージを
 * 複数種類にしていろいろ設定します。
 * 設定は地形タグごとに可能です。
 * また、指定した確率で指定のステートを付加することもできます。
 * 毒沼につかったら毒を受けたりとか。
 *
 * @param floors
 * @text ダメージ床設定リスト
 * @type struct<DamageFloor>[]
 */

/*~struct~DamageFloor:ja
 *
 * @preserve
 *
 * @param terrain
 * @text 地形タグ
 * @type select
 * @option 1
 * @option 2
 * @option 3
 * @option 4
 * @option 5
 * @option 6
 * @option 7
 *
 * @param damage
 * @text ダメージ値
 * @type number
 * @default 10
 *
 * @param se
 * @text SE
 * @type struct<SeSetting>
 *
 * @param flash
 * @text フラッシュ
 * @type struct<Rgba>
 *
 * @param flashDuration
 * @text フラッシュの長さ(f)
 * @type number
 *
 * @param state
 * @text 付与ステート
 * @desc 毒沼に入ったら毒がつくみたいなことをしたいときに設定
 * @type state
 *
 * @param stateRate
 * @parent state
 * @text 付与ステート発生率
 * @type number
 * @max 100
 * @min 1
 */

/*~struct~SeSetting:ja
 *
 * @preserve
 *
 * @param name
 * @text ファイル
 * @type file
 * @dir audio/se/
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

/*~struct~Rgba:ja
 *
 * @preserve
 *
 * @param r
 * @text 赤
 * @type number
 * @max 255
 * @min 0
 *
 * @param g
 * @text 緑
 * @type number
 * @max 255
 * @min 0
 *
 * @param b
 * @text 青
 * @type number
 * @max 255
 * @min 0
 *
 * @param a
 * @text アルファ
 * @type number
 * @max 255
 * @min 0
 */

const CSVN_damageFloors: PluginConsts = {
    params: PluginManagerEx.createParameter(document.currentScript),
    ipcRenderer: null,
};

// console.log(
//     ">>>>>>>> Hello from CSVN_damageFloors.",
//     CSVN_damageFloors.params
// );

const floors: DamageFloor[] = CSVN_damageFloors.params.floors;
function trueByRate(rate: number): boolean {
    if (rate === 0) return false;

    const rv = Math.randomInt(100);
    return rv <= rate;
}

//-----------------------------------------------------------------------------
// Game_Map

Game_Map.prototype.selectDamageFloor = function (this: Game_Map): DamageFloor {
    // 地形タグが合致しているもの
    const fitByTt = floors.filter(
        (f) => f.terrain === $gamePlayer.terrainTag()
    );

    // さらに付与ステートがあるもの
    const hasState = fitByTt.filter((f) => typeof f.state !== "string");

    let sortedByDamage = [];
    if (hasState.length > 0) {
        // 付与ステートがあるものをダメージでソート
        sortedByDamage = hasState.sort((a, b) => b.damage - a.damage);
    } else {
        // 地形タグが合致したものをダメージでソート
        sortedByDamage = fitByTt.sort((a, b) => b.damage - a.damage);
    }

    return sortedByDamage[0] ? sortedByDamage[0] : null;
};

//-----------------------------------------------------------------------------
// Game_Actor

const _Game_Actor_basicFloorDamage_dfl = Game_Actor.prototype.basicFloorDamage;
Game_Actor.prototype.basicFloorDamage = function (this: Game_Actor) {
    const floor = $gameMap.selectDamageFloor();
    // console.log(">> floor: ", floor);
    return floor ? floor.damage : _Game_Actor_basicFloorDamage_dfl.call(this);
};

const _Game_Actor_executeFloorDamage_dfl =
    Game_Actor.prototype.executeFloorDamage;
Game_Actor.prototype.executeFloorDamage = function (this: Game_Actor): void {
    _Game_Actor_executeFloorDamage_dfl.call(this);

    const floor = $gameMap.selectDamageFloor();
    if (
        floor &&
        trueByRate(floor.stateRate) &&
        !this.isStateAffected(floor.state)
    ) {
        this.addState(floor.state);
        $gameScreen.startFlashForDamage();
    }
};

//-----------------------------------------------------------------------------
// Game_Screen

const _Game_Screen_startFlashForDamage_dfl =
    Game_Screen.prototype.startFlashForDamage;
Game_Screen.prototype.startFlashForDamage = function (this: Game_Screen): void {
    const floor = $gameMap.selectDamageFloor();
    if (floor) {
        if (typeof floor.flash !== "string") {
            this.startFlash(
                [floor.flash.r, floor.flash.g, floor.flash.b, floor.flash.a],
                floor.flashDuration
            );
        }
        AudioManager.playStaticSe({
            name: floor.se.name,
            volume: floor.se.volume,
            pitch: floor.se.pitch,
            pan: floor.se.pan,
        });
    } else {
        _Game_Screen_startFlashForDamage_dfl.call(this);
    }
};
