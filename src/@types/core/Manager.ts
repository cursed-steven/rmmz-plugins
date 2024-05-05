/** セーブ内容 */
declare interface SaveContents {
    system: Game_System;
    screen: Game_Screen;
    timer: Game_Timer;
    switches: Game_Switches;
    variables: Game_Variables;
    selfSwitches: Game_SelfSwitches;
    actors: Game_Actors;
    party: Game_Party;
    map: Game_Map;
    player: Game_Player;
}

/** 追加能力値 */
declare type AdditionalParamIdValue = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
/** 追加能力値ID */
declare interface XparamId {
    /** 命中率 */
    HIT_RATE: AdditionalParamIdValue;
    /** 回避率 */
    EVADE_RATE: AdditionalParamIdValue;
    /** 会心率 */
    CRITICAL_RATE: AdditionalParamIdValue;
    /** 会心回避率 */
    EVADE_CRITICAL_RATE: AdditionalParamIdValue;
    /** 魔法回避率 */
    EVADE_MAGIC_RATE: AdditionalParamIdValue;
    /** 魔法反射率 */
    REFLECT_MAGIC_RATE: AdditionalParamIdValue;
    /** 反撃率 */
    COUNTER_RATE: AdditionalParamIdValue;
    /** HP再生率 */
    HP_REGENERATE_RATE: AdditionalParamIdValue;
    /** MP再生率 */
    MP_REGENERATE_RATE: AdditionalParamIdValue;
    /** TP再生率 */
    TP_REGENERATE_RATE: AdditionalParamIdValue;
}

/** 特殊能力値 */
declare type SpecialParamIdValue = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
/** 特殊能力値 */
declare interface SparamId {
    /** 狙われ率 */
    TARGETTED_RATE: SpecialParamIdValue;
    /** 防御効果率 */
    DEF_EFFECTIVENESS: SpecialParamIdValue;
    /** 回復効果率 */
    RESTORE_EFFECTIVENESS: SpecialParamIdValue;
    /** 薬の知識 */
    PHARMACY: SpecialParamIdValue;
    /** MP消費率 */
    MP_COST_RATE: SpecialParamIdValue;
    /** TPチャージ率 */
    TP_CHARGE_RATE: SpecialParamIdValue;
    /** 物理ダメージ率 */
    PHYSICAL_DAMAGE_RATE: SpecialParamIdValue;
    /** 魔法ダメージ率 */
    MAGICAL_DAMAGE_RATE: SpecialParamIdValue;
    /** 床ダメージ率 */
    FLOOR_DAMAGE_RATE: SpecialParamIdValue;
    /** 経験値獲得率 */
    EXP_GET_RATE: SpecialParamIdValue;
}

/** プラグイン関連定数 */
declare interface PluginConsts {
    /** プラグインパラメータ */
    params: any;
    /** Electron IPCレンダラ */
    ipcRenderer: Electron.IpcRenderer;
}

/** 戦闘結果 */
declare type BattleResultValue = 0 | 1 | 2;
/** 戦闘結果 */
declare interface BattleResult {
    /** 勝利 */
    VICTORY: BattleResultValue;
    /** 逃走 */
    ESCAPE: BattleResultValue;
    /** 敗北 */
    DEFEAT: BattleResultValue;
}

/** 戦利品 */
declare interface Reward {
    /** 資金 */
    gold: number;
    /** 経験値 */
    exp: number;
    /** ドロップアイテム */
    items: (Data_Item | Data_Weapon | Data_Armor)[];
}
