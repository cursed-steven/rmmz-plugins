/** バトラー基底 */
declare interface Game_BattlerBase {
    /** ステート回復のないHP/MPのみの回復 */
    recoverWithoutState(): void;
}

/** パーティー */
declare interface Game_Party {
    /** ステート回復のないHP/MPのみの回復 */
    recoverWithoutState(): void;
    /** 生存先頭アクターIDを所定の変数にセットする */
    setAliveLeaderMemberId(): void;
    /** パーティーの平均LV */
    averageLevel(): number;
}
