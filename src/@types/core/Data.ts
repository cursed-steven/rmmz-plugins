declare type DamageTypeValue = 0 | 1 | 2 | 3 | 4 | 5 | 6;
/** ダメージ種別 */
declare interface DamageType {
    /** なし */
    NONE: DamageTypeValue;
    /** HPダメージ */
    HP_DAMAGE: DamageTypeValue;
    /** MPダメージ */
    MP_DAMAGE: DamageTypeValue;
    /** HP回復 */
    HP_RECOVERY: DamageTypeValue;
    /** MP回復 */
    MP_RECOVERY: DamageTypeValue;
    /** HP吸収 */
    HP_DRAIN: DamageTypeValue;
    /** MP吸収 */
    MP_DRAIN: DamageTypeValue;
}

/** ダメージ */
declare interface Damage {
    /** ダメージ種別 */
    type: DamageTypeValue;
    /** 属性ID */
    elementId: number | null;
    /** 数式 */
    formula: string | null;
    /** 分散 */
    variance: number | null;
    /** 会心有無 */
    critical: boolean | null;
}

declare type HitTypeValue = 0 | 1 | 2;
/** 命中種別 */
declare interface HitType {
    /** 必中 */
    CERTAIN: HitTypeValue;
    /** 物理 */
    PHYSICAL: HitTypeValue;
    /** 魔法 */
    MAGICAL: HitTypeValue;
}

declare type ITypeIdValue = 1 | 2 | 3 | 4;
/** アイテム種別 */
declare interface ITypeId {
    /** 通常 */
    NORMAL: ITypeIdValue;
    /** 大事なもの */
    KEY_ITEM: ITypeIdValue;
    /** 隠しアイテムA */
    HIDDEN_A: ITypeIdValue;
    /** 隠しアイテムB */
    HIDDEN_B: ITypeIdValue;
}

declare type OccasionValue = 0 | 1 | 2 | 3;
/** 使用可能時 */
declare interface Occasion {
    /** 常時 */
    ALWAYS: OccasionValue;
    /** 戦闘中のみ */
    BATTLE: OccasionValue;
    /** メニューのみ */
    MENU: OccasionValue;
    /** なし */
    NONE: OccasionValue;
}

declare type ScopeValue =
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14;
/** 効果範囲 */
declare interface Scope {
    /** なし */
    NONE: ScopeValue;
    /** 敵単体 */
    SINGLE_ENEMY: ScopeValue;
    /** 敵全員 */
    ALL_ENEMIES: ScopeValue;
    /** 敵ランダム1体 */
    RANDOM_ENEMY_1: ScopeValue;
    /** 敵ランダム2体 */
    RANDOM_ENEMY_2: ScopeValue;
    /** 敵ランダム3体 */
    RANDOM_ENEMY_3: ScopeValue;
    /** 敵ランダム4体 */
    RANDOM_ENEMY_4: ScopeValue;
    /** 生存している味方ひとり */
    SINGLE_ALIVE_FRIEND: ScopeValue;
    /** 生存している味方全員 */
    ALL_ALIVE_FRIENDS: ScopeValue;
    /** 戦闘不能の味方ひとり */
    SINGLE_DEAD_FRIEND: ScopeValue;
    /** 戦闘不能の味方全員 */
    ALL_DEAD_FRIENDS: ScopeValue;
    /** 使用者自身 */
    USER: ScopeValue;
    /** 生死関係なく味方単体 */
    SINGLE_FRIEND: ScopeValue;
    /** 生死関係なく味方全員 */
    ALL_FRIENDS: ScopeValue;
    /** 敵味方全員 */
    EVERYONE: ScopeValue;
}

declare type TraitCodeValue =
    | 11
    | 12
    | 13
    | 14
    | 21
    | 22
    | 23
    | 31
    | 32
    | 33
    | 34
    | 35
    | 41
    | 42
    | 43
    | 44
    | 51
    | 52
    | 53
    | 54
    | 55
    | 61
    | 62
    | 63
    | 64;
declare interface TraitCode {
    /** 属性有効度 */
    ELEMENT_RATE: TraitCodeValue;
    /** 弱体有効度 */
    DEBUFF_RATE: TraitCodeValue;
    /** ステート有効度 */
    STATE_RATE: TraitCodeValue;
    /** ステート無効化 */
    STATE_RESIST: TraitCodeValue;
    /** 通常能力値 */
    PARAM: TraitCodeValue;
    /** 追加能力値 */
    XPARAM: TraitCodeValue;
    /** 特殊能力値 */
    SPARAM: TraitCodeValue;
    /** 攻撃時属性 */
    ATTACK_ELEMENT: TraitCodeValue;
    /** 攻撃時ステート */
    ATTACK_STATE: TraitCodeValue;
    /** 攻撃速度補正 */
    ATTACK_SPEED: TraitCodeValue;
    /** 攻撃追加回数 */
    ATTACK_TIMES: TraitCodeValue;
    /** 攻撃スキル */
    ATTACK_SKILL: TraitCodeValue;
    /** スキルタイプ追加 */
    STYPE_ADD: TraitCodeValue;
    /** スキルタイプ封印 */
    STYPE_SEAL: TraitCodeValue;
    /** スキル追加 */
    SKILL_ADD: TraitCodeValue;
    /** スキル封印 */
    SKILL_SEAL: TraitCodeValue;
    /** 武器タイプ装備 */
    EQUIP_WTYPE: TraitCodeValue;
    /** 防具タイプ装備 */
    EQUIP_ATYPE: TraitCodeValue;
    /** 装備固定 */
    EQUIP_LOCK: TraitCodeValue;
    /** 装備封印 */
    EQUIP_SEAL: TraitCodeValue;
    /** 装備スロットタイプ */
    SLOT_TYPE: any;
    /** 行動回数追加 */
    ACTION_PLUS: TraitCodeValue;
    /** 特殊フラグ */
    SPECIAL_FLAG: any;
    /** 消滅エフェクト */
    COLLAPSE_EFFECT: any;
    /** パーティー能力 */
    PARTY_ABILITY: any;
}

declare type EffectCodeValue =
    | 11
    | 12
    | 13
    | 21
    | 22
    | 31
    | 32
    | 33
    | 34
    | 41
    | 42
    | 43
    | 44;

declare interface EffectCode {
    /** HP回復 */
    RECOVER_HP: EffectCodeValue;
    /** MP回復 */
    RECOVER_MP: EffectCodeValue;
    /** TP回復 */
    GAIN_TP: EffectCodeValue;
    /** ステート付与 */
    ADD_STATE: EffectCodeValue;
    /** ステート解除 */
    REMOVE_STATE: EffectCodeValue;
    /** 強化 */
    ADD_BUFF: EffectCodeValue;
    /** 弱体 */
    ADD_DEBUFF: EffectCodeValue;
    /** 強化の解除 */
    REMOVE_BUFF: EffectCodeValue;
    /** 弱体の解除 */
    REMOVE_DEBUFF: EffectCodeValue;
    /** 特殊効果 */
    SPECIAL: EffectCodeValue;
    /** 成長 */
    GROW: EffectCodeValue;
    /** スキル習得 */
    LEARN_SKILL: EffectCodeValue;
    /** コモンイベント */
    COMMON_EVENT: EffectCodeValue;
    /** 特殊効果/逃げる */
    SPECIAL_EFFECT_ESCAPE: number;
}

/** 特徴 */
declare interface Trait {
    /** コード */
    code: TraitCodeValue;
    /** データID */
    dataId: number;
    /** 数値 */
    value: number;
}

/** 効果 */
declare interface Effect {
    /** コード */
    code: EffectCodeValue;
    /** データID */
    dataId: number;
    /** 数値1 */
    value1: number;
    /**  数値2 */
    value2: number;
}

/** 8能力値 */
declare type Params = [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number
];

declare type DataContainerIdValue = 0 | 1 | 2;
/** データコンテナID */
declare interface DataContainerId {
    /** アイテム */
    ITEM: DataContainerIdValue;
    /** 武器 */
    WEAPON: DataContainerIdValue;
    /** 防具 */
    ARMOR: DataContainerIdValue;
}

/** データレコード */
declare interface Data_Record {
    /** ID */
    id: number;
    /** 名前 */
    name: string;
    /** メモ */
    note: string;
    /** メタ */
    meta: any;
}

/** アクターデータ全件 */
declare var $dataActors: Data_Actor[];
/** アクターデータ1件 */
declare interface Data_Actor extends Data_Record {
    /** ふたつな */
    nickname: string;
    /** プロフィール */
    profile: string;
    /** キャラ画像名 */
    characterName: string;
    /** キャラ画像インデックス */
    characterIndex: number;
    /** 顔グラインデックス */
    faceIndex: number;
    /** 顔グラ画像名 */
    faceName: string;
    /** SVキャラ画像名 */
    battlerName: string;
    /** 職業 */
    classId: number;
    /** 装備 */
    equips: number[];
    /** 特徴 */
    traits: Trait[];
    /** 初期レベル */
    initialLevel: number;
    /** レベル上限 */
    maxLevel: number;
}

/** 習得スキル */
declare interface Learnings {
    /** 習得レベル */
    level: number;
    /** スキルID */
    skillId: number;
    /** メモ */
    note: string;
}

/** 職業データ全件 */
declare var $dataClasses: Data_Class[];
/** 職業データ1件 */
declare interface Data_Class extends Data_Record {
    /** 特徴 */
    traits: Trait[];
    /** 習得スキル */
    learnings: Learnings[];
}

/** アイテム/スキルの種別(成長、隠しアイテム、キーアイテムを除く) */
declare type ItemType =
    | "hpRecovery"
    | "mpRecovery"
    | "revival"
    | "hpDamage"
    | "mpDamage"
    | "hpDrain"
    | "mpDrain"
    | "removeGoodState"
    | "removeBadState"
    | "addGoodState"
    | "addBadState"
    | "addBuff"
    | "addDebuff"
    | "removeBuff"
    | "removeDebuff"
    | "map"
    | "hidden"
    | "key"
    | "grow"
    | "unknown"
    | "commonSkill"
    | "empty";

/** スキルデータ全件 */
declare var $dataSkills: Data_Skill[];
/** スキルデータ1件 */
declare interface Data_Skill extends Data_Record {
    /** アニメーションID */
    animationId: number;
    /** ダメージ */
    damage: Damage;
    /** 効果 */
    effects: Effect[];
    /** 命中タイプ */
    hitType: HitTypeValue;
    /** アイコンインデックス */
    iconIndex: number;
    /** メッセージ1行め */
    message1: string;
    /** メッセージ2行め */
    message2: string;
    /** 消費MP */
    mpCost: number;
    /** 使用可能時 */
    occasion: OccasionValue;
    /** 連続回数 */
    repeats: number;
    /** 必要武器タイプ1 */
    requiredWtypeId1: number;
    /** 必要武器タイプ2 */
    requiredWtypeId2: number;
    /** 効果範囲 */
    scope: ScopeValue;
    /** 速度補正 */
    speed: number;
    /** スキル種別 */
    stypeId: number;
    /** 成功率 */
    successRate: number;
    /** 消費TP */
    tpCost: number;
    /** 取得TP */
    tpGain: number;
    /** jsonにはある謎のプロパティ(固定値=1) */
    messageType: number;
    /** 説明 */
    description: string;
}

/** アイテムデータ全件 */
declare var $dataItems: Data_Item[];
/** アイテムデータ1件 */
declare interface Data_Item extends Data_Record {
    /** 説明 */
    description: string;
    /** アニメーションID */
    animationId: number;
    /** 消費有無 */
    consumable: boolean;
    /** ダメージ */
    damage: Damage;
    /** 命中タイプ */
    hitType: HitTypeValue;
    /** アイコンインデックス */
    iconIndex: number;
    /** アイテム種別ID */
    itypeId: ITypeIdValue;
    /** 使用可能時 */
    occasion: OccasionValue;
    /** 価格 */
    price: number;
    /** 連続回数 */
    repeats: number;
    /** 効果範囲 */
    scope: ScopeValue;
    /** 速度補正 */
    speed: number;
    /** 成功率 */
    successRate: number;
    /** 取得TP */
    tpGain: number;
    /** 使用効果 */
    effects: Effect[];
}

/** 武器データ全件 */
declare var $dataWeapons: Data_Weapon[];
/** 武器データ1件 */
declare interface Data_Weapon extends Data_Record {
    /** 説明 */
    description: string;
    /** アニメーションID */
    animationId: number;
    /** 装備タイプID */
    etypeId: number;
    /** 特徴 */
    traits: Trait[];
    /** アイコンインデックス */
    iconIndex: number;
    /** 8能力値 */
    params: Params;
    /** 価格 */
    price: number;
    /** 武器種別ID */
    wtypeId: number;
}

/** 防具データ全件 */
declare var $dataArmors: Data_Armor[];
/** 防具データ1件 */
declare interface Data_Armor extends Data_Record {
    /** 説明 */
    description: string;
    /** 防具種別ID */
    atypeId: number;
    /** 装備タイプID */
    etypeId: number;
    /** 特徴 */
    traits: Trait[];
    /** アイコンインデックス */
    iconIndex: number;
    /** 8能力値 */
    params: Params;
    /** 価格 */
    price: number;
}

/** 敵行動パターン */
declare interface EnemyAction {
    /** 条件設定値1 */
    conditionParam1: number;
    /** 条件設定値2 */
    conditionParam2: number;
    /** 条件種別 */
    conditionType: number;
    /** レーティング */
    rating: number;
    /** スキルID */
    skillId: number;
    /** 優先度スコア */
    score: number;
}

/** ドロップアイテム */
declare interface DropItem {
    /** アイテム/武器/防具 */
    kind: DataContainerIdValue;
    /** アイテム/武器/防具ID */
    dataId: number;
    /** 1/n */
    denominator: number;
}

/** 敵データ全件 */
declare var $dataEnemies: Data_Enemy[];
/** 敵データ1件 */
declare interface Data_Enemy extends Data_Record {
    /** 行動パターン */
    actions: EnemyAction[];
    /** 敵画像色相 */
    battlerHue: number;
    /** バトラー名 */
    battlerName: string;
    /** ドロップアイテム */
    dropItems: DropItem[];
    /** 経験値 */
    exp: number;
    /** 金額 */
    gold: number;
    /** 特徴 */
    traits: Trait[];
    /** 8能力値 */
    params: Params;
}

/** 敵グループ内メンバー */
declare interface DataTroopMember {
    /** 敵ID */
    enemyId: number;
    /** X座標 */
    x: number;
    /** Y座標 */
    y: number;
    /** 隠れているか */
    hidden: boolean;
}

/** 敵グループ全件 */
declare var $dataTroops: Data_Troop[];
/** 敵グループ1件 */
declare interface Data_Troop extends Data_Record {
    /** 敵グループ */
    members: DataTroopMember[];
    /** グループ名 */
    name: string;
    /** バトルイベント */
    pages: any[];
}

/** ステート全件 */
declare var $dataStates: Data_State[];
/** ステート1件 */
declare interface Data_State extends Data_Record {
    /** 行動制約 */
    restriction: number;
    /** 特徴 */
    traits: Trait[];
}

/** ステートによる行動制限 */
declare interface StateRestriction {
    /** なし */
    NONE: number;
    /** 敵を攻撃 */
    ATTACK_OPPONENT: number;
    /** 誰かを攻撃 */
    ATTACK_SOMEBODY: number;
    /** 味方を攻撃 */
    ATTACK_FRIEND: number;
    /** 行動できない */
    RESTRICTED: number;
}

/** アニメーション全件 */
declare var $dataAnimations: Data_Animation[];
/** アニメーション1件 */
declare interface Data_Animation extends Data_Record {}

/** タイルセット全件 */
declare var $dataTilesets: Data_Tileset[];
/** タイルセット1件 */
declare interface Data_Tileset extends Data_Record {}

declare type CommonEventTriggerValue = 0 | 1 | 2;
/** コモンイベントのトリガー */
declare interface CommonEventTrigger {
    /** なし */
    NONE: CommonEventTriggerValue;
    /** 自動実行 */
    AUTO: CommonEventTriggerValue;
    /** 並列処理 */
    PARALLEL: CommonEventTriggerValue;
}

/** コモンイベント全件 */
declare var $dataCommonEvents: Data_CommonEvent[];
/** コモンイベント1件 */
declare interface Data_CommonEvent extends Data_Record {
    /** トリガー */
    trigger: CommonEventTriggerValue;
    /** 実行内容リスト */
    list: any[];
}

/** システムデータ */
declare var $dataSystem: Data_System;
/** システムデータ */
declare interface Data_System {
    /** ゲームタイトル */
    gameTitle: string;
    /** SVか */
    optSideView: boolean;
    /** 属性名 */
    elements: string[];
    /** 装備タイプ */
    equipTypes: string[];
    /** 武器種名 */
    weaponTypes: string[];
    /** 防具種名 */
    armorTypes: string[];
    /** スイッチ情報 */
    switches: string[];
    /** 変数情報 */
    variables: string[];
    /** タイトルコマンドウィンドウ */
    titleCommandWindow: any;
    /** 画像が暗号化済みか */
    hasEncryptedImages: boolean;
    /** 音源が暗号化済みか */
    hasEncryptedAudio: boolean;
    /** 暗号化キー */
    encryptionKey: string;
}

/** マップメタ情報全件 */
declare var $dataMapInfos: Data_MapInfo[];
/** マップメタ情報1件 */
declare interface Data_MapInfo extends Data_Record {}

/** マップデータ */
declare var $dataMap: Data_Map;
/** マップデータ1件 */
declare interface Data_Map extends Data_Record {
    /** 表示名 */
    displayName: string;
    /** イベント */
    events: Data_Event[];
}

/** イベントデータ1件 */
declare interface Data_Event extends Data_Record {}

/** マップ */
declare interface Data_Maps {
    /** ニューゲーム初期化 */
    init: number;
    /** クレジット表示 */
    credit: number;
    /** ワールドマップ */
    world: number;
}

/** 性別 */
declare type GenderValue = "m" | "f";
