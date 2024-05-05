/** JSON拡張 */
class JsonEx implements JsonEx {
    /** 文字列化 */
    static stringify: (content: any) => string;
    /** JSONのクローン */
    static makeDeepCopy: (arg0: any) => any;
}

/** キーボード/パッド入力 */
class Input {
    /** キーコード x シンボルマップ */
    static keyMapper: any;
    /** パッドボタンコード x シンボルマップ */
    static gamepadMapper: any;
    /** 指定キーが押されているか */
    static isPressed: (keyName: string) => boolean;
    /** 指定キーが長押しされているか */
    static isLongPressed: (keyName: string) => boolean;
    /** 指定キーが押されたか */
    static isTriggered: (symbol: string) => boolean;
    /** 入力をクリア */
    static clear: () => void;
}

/** タッチ入力 */
class TouchInput implements TouchInput {
    /** X座標 */
    static x: number;
    /** Y座標 */
    static y: number;
    /** 押されているか */
    static isPressed: () => boolean;
    /** トリガされているか */
    static isTriggered: () => boolean;
    /** 更新 */
    static update: () => void;
}

/** ポイント(座標) */
class Point implements Point {
    /**
     * ポイント(座標)/コアスクリプト更新時には注意
     * ※コンストラクタを直接呼ぶケースでは必要
     */
    constructor(x: number, y: number) {}
}

/** ビットマップ(画像) */
class Bitmap implements Bitmap {
    /** XHRロード完了時の処理 */
    _onXhrLoad: (xhr: XMLHttpRequest) => void;
}

/** ユーティリティ */
class Utils {
    /** URIエンコード */
    static encodeURI: (filename: string) => string;
    /** NW.js で起動しているか */
    static isNwjs: () => boolean;
    /** 暗号化情報のセット */
    static setEncryptionInfo: (
        hasImages: boolean,
        hasAudio: boolean,
        key: string
    ) => void;
    /** ArrayBufferの復号 */
    static decryptArrayBuffer: (buffer: ArrayBuffer) => ArrayBuffer;
    /**
     * Electron
     */
    /** Electronが利用可能か */
    static isElectronAvailable: () => boolean;
    /** Electronで起動しているか */
    static isElectron: () => boolean;
}

/** グラフィック */
class Graphics {
    /** 幅 */
    static width: number;
    /** 高さ */
    static height: number;
    /** 表示エリア幅 */
    static boxWidth: number;
    /** 表示エリア高さ */
    static boxHeight: number;
    /** フレームカウント */
    static frameCount: number;
}

/** 矩形領域 */
class Rectangle implements Rectangle {
    /**
     * 矩形領域/コアスクリプト更新時には注意
     * ※コンストラクタを直接呼ぶケースでは必要
     */
    constructor(x: number, y: number, width: number, height: number) {}
}
