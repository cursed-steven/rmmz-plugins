/** スプライト */
declare interface Sprite {
    /** ビットマップ */
    bitmap: Bitmap;
    /** X座標 */
    x: number;
    /** Y座標 */
    y: number;
    /** ??? */
    dy: number;
    /** 可視かどうか */
    visible: boolean;
    /** 幅 */
    width: number;
    /** 高さ */
    height: number;
    /** 子スプライト */
    children: Sprite[];
    /** アンカー? */
    anchor: any;
    /** PIXIの何か? */
    worldTransform: any;
    /** 表示領域の設定 */
    setFrame(x: number, y: number, width: number, height: number): void;
    /** 子スプライトの追加 */
    addChild(sprite: Sprite): void;
    /** 移動 */
    move(x: number, y: number): void;
    /** 表示 */
    show(): void;
    /** 非表示 */
    hide(): void;
    /** 更新 */
    update(): void;
    /** 破棄 */
    destroy(): void;
}

/** スプライト(クリッカブル) */
declare interface Sprite_Clickable extends Sprite {}

/** スプライト(キャラクター) */
declare interface Sprite_Character extends Sprite {
    /** メンバプロパティ初期化 */
    initMembers(): void;
    /** キャラクタのセット */
    setCharacter(character: Game_CharacterBase): void;
}

/** スプライト(バトラー) */
declare interface Sprite_Battler extends Sprite_Clickable {
    /** バトラー名 */
    _battlerName: string;
    /** プロパティの初期化 */
    initMembers(): void;
    /** バトラーのセット */
    setBattler(battler: Game_Battler): void;
    /** ホームポジションの設定 */
    setHome(x: number, y: number): void;
    /** ビットマップの更新 */
    updateBitmap(): void;
    /** 色相のセット */
    setHue(hue: number): void;
}

/** スプライト(アクター) */
declare interface Sprite_Actor extends Sprite_Battler {
    /** 開始位置へ移動 */
    moveToStartPosition(): void;
    /** 退却 */
    retreat(): void;
}

/** スプライト(敵) */
declare interface Sprite_Enemy extends Sprite_Battler {
    /** 敵データ */
    _enemy: Game_Battler;
    /** バトラー色相 */
    _battlerHue: number;
    /** 画像のロード */
    loadBitmap(name: string): void;
    /** 可視性の初期化 */
    initVisibility(): void;
}

/** スプライト(ボタン) */
declare interface Sprite_Button extends Sprite_Clickable {}

/** スプライト(ステートアイコン) */
declare interface Sprite_StateIcon extends Sprite {
    /** アイコンインデックス */
    _iconIndex: number;
    /** バトラー */
    _battler: Game_Battler;
    /** アニメーションインデックス */
    _animationIndex: number;
    /** アニメーションカウント */
    _animationCount: number;
    /** プロパティの初期化 */
    initMembers(): void;
    /** セットアップ */
    setup(battler: Game_Battler): void;
    /** アイコンの更新 */
    updateIcon(): void;
    /** 表示すべきか */
    shouldDisplay(): boolean;
    /** 更新 */
    update(): void;
    /** 表示領域の更新 */
    updateFrame(): void;
}

/** ダメージ色 */
declare type DamageColorTypeValue = 0 | 1 | 2 | 3 | 4 | 5 | 6;
/** スプライト(ダメージ) */
declare interface Sprite_Damage extends Sprite {
    /** 表示色種別 */
    _colorType: DamageColorTypeValue;
    /** セットアップ */
    setup(target: Game_Battler): void;
    /** フォントサイズ */
    fontSize(): number;
    /** 子スプライトを生成して返す */
    createChildSprite(width: number, height: number): Sprite;
    /**
     * CSVN_damagePopupEx
     */
    /** 追加セットアップ */
    additionalSetup(target: Game_Battler): void;
    /** 追加スプライトの生成 */
    createAdditional(text: string, colorType: DamageColorTypeValue): void;
}

/** スプライトセット(マップ・戦闘用の基底) */
declare interface Spriteset_Base extends Sprite {
    /** 初期化 */
    initialize(): void;
    /** 更新 */
    update(): void;
}

/** スプライトセット(マップ) */
declare interface Spriteset_Map extends Spriteset_Base {}

/** スプライトセット(戦闘) */
declare interface Spriteset_Battle extends Spriteset_Base {}

/**
 * CSVN_damagePopupEx
 */
/** ダメージポップアップ */
declare interface DamagePopup {
    text: string;
    color: Rgba;
    threshold: string;
}
