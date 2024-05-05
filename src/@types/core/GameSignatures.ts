class Game_Message implements Game_Message {}
class Game_Temp implements Game_Temp {}
class Game_System implements Game_System {}
class Game_Screen implements Game_Screen {}
class Game_Timer implements Game_Timer {}
class Game_Switches implements Game_Switches {}
class Game_SelfSwitches implements Game_SelfSwitches {}
class Game_Variables implements Game_Variables {}
class Game_BattlerBase implements Game_BattlerBase {
    /** 属性有効度 */
    static TRAIT_ELEMENT_RATE: TraitCodeValue;
    /** 弱体有効度 */
    static TRAIT_DEBUFF_RATE: TraitCodeValue;
    /** ステート有効度 */
    static TRAIT_STATE_RATE: TraitCodeValue;
    /** ステート無効化 */
    static TRAIT_STATE_RESIST: TraitCodeValue;
    /** 通常能力値 */
    static TRAIT_PARAM: TraitCodeValue;
    /** 追加能力値 */
    static TRAIT_XPARAM: TraitCodeValue;
    /** 特殊能力値 */
    static TRAIT_SPARAM: TraitCodeValue;
    /** 攻撃時属性 */
    static TRAIT_ATTACK_ELEMENT: TraitCodeValue;
    /** 攻撃時ステート */
    static TRAIT_ATTACK_STATE: TraitCodeValue;
    /** 攻撃速度補正 */
    static TRAIT_ATTACK_SPEED: TraitCodeValue;
    /** 攻撃追加回数 */
    static TRAIT_ATTACK_TIMES: TraitCodeValue;
    /** 攻撃スキル */
    static TRAIT_ATTACK_SKILL: TraitCodeValue;
    /** スキルタイプ追加 */
    static TRAIT_STYPE_ADD: TraitCodeValue;
    /** スキルタイプ封印 */
    static TRAIT_STYPE_SEAL: TraitCodeValue;
    /** スキル追加 */
    static TRAIT_SKILL_ADD: TraitCodeValue;
    /** スキル封印 */
    static TRAIT_SKILL_SEAL: TraitCodeValue;
    /** 武器タイプ装備 */
    static TRAIT_EQUIP_WTYPE: TraitCodeValue;
    /** 防具タイプ装備 */
    static TRAIT_EQUIP_ATYPE: TraitCodeValue;
    /** 装備固定 */
    static TRAIT_EQUIP_LOCK: TraitCodeValue;
    /** 装備封印 */
    static TRAIT_EQUIP_SEAL: TraitCodeValue;
    /** 装備スロットタイプ */
    static TRAIT_SLOT_TYPE: TraitCodeValue;
    /** 行動回数追加 */
    static TRAIT_ACTION_PLUS: TraitCodeValue;
    /** 特殊フラグ */
    static TRAIT_SPECIAL_FLAG: TraitCodeValue;
    /** 消滅効果 */
    static TRAIT_COLLAPSE_TYPE: TraitCodeValue;
    /** パーティー能力 */
    static TRAIT_PARTY_ABILITY: TraitCodeValue;
    /** 特殊フラグ/自動戦闘 */
    static FLAG_ID_AUTO_BATTLE: number;
    /** 特殊フラグ/防御 */
    static FLAG_ID_GUARD: number;
    /** 特殊フラグ/身代わり */
    static FLAG_ID_SUBSTITUTE: number;
    /** 特殊フラグ/TP持ち越し */
    static FLAG_ID_PRESERVE_TP: number;
    /** バフアイコンの開始インデックス */
    static ICON_BUFF_START: number;
    /** デバフアイコンの開始インデックス */
    static ICON_DEBUFF_START: number;
}
class Game_Battler implements Game_Battler {
    /** 初期化 */
    initialize: () => void;
}
class Game_Actor implements Game_Actor {
    /**
     * アクター/コアスクリプト更新時には注意
     * ※コンストラクタを直接呼ぶケースでは必要
     */
    constructor(actorId: number) {}
}
class Game_Enemy implements Game_Enemy {
    /**
     * 初期化1
     * ここでは黙っておいて、コアスクリプト側の実装で
     * 直接prototypeにねじこませることでヨシとする。
     */
    // initialize: (enemyId: number, x: number, y: number) => void;
}

class Game_Actors implements Game_Actors {}
class Game_Unit implements Game_Unit {}
class Game_Party implements Game_Party {}
class Game_Troop implements Game_Troop {}
class Game_Map implements Game_Map {}
class Game_CommonEvent implements Game_CommonEvent {}
class Game_CharacterBase implements Game_CharacterBase {}
class Game_Character implements Game_Character {}
class Game_Player implements Game_Player {}
class Game_Vehicle implements Game_Vehicle {}
class Game_Action implements Game_Action {
    /** HP回復 */
    static EFFECT_RECOVER_HP: EffectCodeValue;
    /** MP回復 */
    static EFFECT_RECOVER_MP: EffectCodeValue;
    /** TP回復 */
    static EFFECT_GAIN_TP: EffectCodeValue;
    /** ステート付与 */
    static EFFECT_ADD_STATE: EffectCodeValue;
    /** ステート解除 */
    static EFFECT_REMOVE_STATE: EffectCodeValue;
    /** 強化 */
    static EFFECT_ADD_BUFF: EffectCodeValue;
    /** 弱体 */
    static EFFECT_ADD_DEBUFF: EffectCodeValue;
    /** 強化の解除 */
    static EFFECT_REMOVE_BUFF: EffectCodeValue;
    /** 弱体の解除 */
    static EFFECT_REMOVE_DEBUFF: EffectCodeValue;
    /** 特殊効果 */
    static EFFECT_SPECIAL: EffectCodeValue;
    /** 成長 */
    static EFFECT_GROW: EffectCodeValue;
    /** スキル習得 */
    static EFFECT_LEARN_SKILL: EffectCodeValue;
    /** コモンイベント */
    static EFFECT_COMMON_EVENT: EffectCodeValue;
    /** 特殊効果/逃げる */
    static SPECIAL_EFFECT_ESCAPE: number;
    /** 必中 */
    static HITTYPE_CERTAIN: HitTypeValue;
    /** 物理 */
    static HITTYPE_PHYSICAL: HitTypeValue;
    /** 魔法 */
    static HITTYPE_MAGICAL: HitTypeValue;
    /**
     * 行動/コアスクリプト更新時には注意
     * ※コンストラクタを直接呼ぶケースでは必要
     */
    constructor(subject: Game_Battler, forcing: boolean) {}
}
class Game_ActionResult implements Game_ActionResult {}
class Game_Item implements Game_Item {}
class Game_Interpreter implements Game_Interpreter {}
