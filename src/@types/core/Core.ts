/** 不等号 */
declare type Ineq = "<" | "<=" | "=" | ">=" | ">";

declare interface Math {
    /**
     * Generates a random integer in the range (0, max-1).
     *
     * @memberof JsExtensions
     * @param {number} max - The upper boundary (excluded).
     * @returns {number} A random integer.
     */
    randomInt(max: number): number;
    /** 分散を適用する */
    applyVariance(value: number, variance: number): number;
    /** 指定した確率(%)でtrueを返す */
    trueByRate(rate: number): boolean;
    /** aとbの間のランダムな整数を返す */
    randomRangeInt(a: number, b: number): number;
}

declare interface ArrayConstructor {
    /** 数値 or 文字列のリストの重複要素を除去して返す */
    unique(array: (number | string)[]): (number | string)[];
}

declare interface String {
    /**
     * Replaces %1, %2 and so on in the string to the arguments.
     *
     * @memberof JsExtensions
     * @param {any} ...args The objects to format.
     * @returns {string} A formatted string.
     */
    format(text: string): string;
}

declare interface Number {
    /**
     * Returns a number whose value is limited to the given range.
     *
     * @memberof JsExtensions
     * @param {number} min - The lower boundary.
     * @param {number} max - The upper boundary.
     * @returns {number} A number in the range (min, max).
     */
    clamp(min: number, max: number): number;
}

/** PIXI(とりあえずdeclareだけ) */
declare class PIXI {
    static Rectangle: any;
}

/** 各シーンの基底(PIXI.Container) */
declare interface Stage {
    /** コンテンツ追加 */
    addChild(content: any): void;
    /** コンテンツ削除 */
    removeChild(content: any): void;
}

/** ビットマップ */
declare interface Bitmap {
    /** アウトライン描画色(rgba(r, g, b, a)) */
    outlineColor: string;
    /** アウトライン描画幅 */
    outlineWidth: number;
    /** 幅 */
    width: number;
    /** 高さ */
    height: number;
    /** フォント */
    fontFace: string;
    /** フォントサイズ */
    fontSize: number;
    /** テキスト色 */
    textColor: any;
    /** 初期化 */
    initialize(width: number, height: number): void;
    /** 使用可能か */
    isReady(): boolean;
    /** テキスト描画 */
    drawText(
        text: string,
        x: number,
        y: number,
        maxWidth: number,
        lineHeight: number,
        align: AlignValue
    ): void;
    /** ロードリスナー追加 */
    addLoadListener(f: Function): void;
}

/** ポイント(座標) */
declare interface Point {
    /** 初期化 */
    initialize(x: number, y: number): void;
}

/** 矩形領域 */
declare interface Rectangle {
    /** X座標 */
    x: number;
    /** Y座標 */
    y: number;
    /** 幅 */
    width: number;
    /** 高さ */
    height: number;
    /** 指定座標が範囲内か(PIXI側っぽい) */
    contains(x: number, y: number): boolean;
}

/** BGM設定 */
declare interface BgmSetting {
    /** ファイル */
    name: string;
    /** 音量 */
    volume: number;
    /** ピッチ */
    pitch: number;
    /** パン */
    pan: number;
}

/** BGS設定 */
declare interface BgsSetting {
    /** ファイル */
    name: string;
    /** 音量 */
    volume: number;
    /** ピッチ */
    pitch: number;
    /** パン */
    pan: number;
}

/** ME設定 */
declare interface MeSetting {
    /** ファイル */
    name: string;
    /** 音量 */
    volume: number;
    /** ピッチ */
    pitch: number;
    /** パン */
    pan: number;
}

/** SE設定 */
declare interface SeSetting {
    /** ファイル */
    name: string;
    /** 音量 */
    volume: number;
    /** ピッチ */
    pitch: number;
    /** パン */
    pan: number;
}

/** 色設定 */
declare interface Rgba {
    /** 赤 */
    r: number;
    /** 緑 */
    g: number;
    /** 青 */
    b: number;
    /** アルファ */
    a: number;
}
