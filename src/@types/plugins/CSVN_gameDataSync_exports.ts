/** 最後に使用した＊＊ */
export interface LastUsed {
    /** スキルのID */
    skillId: number;
    /** スキルの消費MP */
    skillMpCost: number;
    /** スキルの消費TP */
    skillTpCost: number;
    /** アイテムのID */
    itemId: number;
}

/** 最後に行動した/対象になった */
export interface LastSubjectTarget {
    /** アクターのID */
    actorId: number;
    /** 敵のインデックス */
    enemyIndex: number;
}

/** マップやイベントのリフレッシュを行うか */
export interface RequireRefresh {
    /** 最後に使用した＊＊ */
    lastUsed: boolean;
    /** 最後に行動した＊＊ */
    lastSubject: boolean;
    /** 最後に対象になった＊＊ */
    lastTarget: boolean;
    /** マップID */
    mapId: boolean;
    /** X座標 */
    x: boolean;
    /** Y座標 */
    y: boolean;
    /** 直前にいたリージョン */
    lastRegion: boolean;
    /** いまいるリージョン */
    currentRegion: boolean;
    /** 直前にいた地形タグ */
    lastTerrain: boolean;
    /** いまいる地形タグ */
    currentTerrain: boolean;
    /** パーティー人数 */
    partySize: boolean;
    /** 所持金 */
    gold: boolean;
    /** 累計歩数 */
    steps: boolean;
    /** 戦闘回数 */
    battleCount: boolean;
    /** 勝利回数 */
    winCount: boolean;
    /** 逃走回数 */
    escapeCount: boolean;
}
