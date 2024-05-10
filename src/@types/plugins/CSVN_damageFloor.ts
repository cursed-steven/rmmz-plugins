/** ダメージ床設定 */
declare interface DamageFloor {
    /** 地形タグ */
    terrain: Terrain;
    /** ダメージ値 */
    damage: number;
    /** SE */
    se: SeSetting;
    /** フラッシュ色 */
    flash: Rgba;
    /** フラッシュ長さ */
    flashDuration: number;
    /** ステート付与 */
    state: number;
    /** ステート付与発生率 */
    stateRate: number;
}
/** マップ */
declare interface Game_Map {
    /** ダメージ床設定を選択 */
    selectDamageFloor(): DamageFloor;
}
