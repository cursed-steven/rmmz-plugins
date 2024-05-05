declare type ParamIdValue = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
/** パラメータID */
declare interface ParamId {
    /** 最大HP */
    MHP: number;
    /** 最大MP */
    MMP: number;
    /** 攻撃力 */
    ATK: number;
    /** 防御力 */
    DEF: number;
    /** 魔力 */
    MAT: number;
    /** 魔法防御 */
    MDF: number;
    /** 素早さ */
    AGI: number;
    /** 運の良さ */
    LUK: number;
}

/** 方向 */
declare interface DirValues {
    NONE: DirValue;
    DOWN: DirValue;
    LEFT: DirValue;
    RIGHT: DirValue;
    UP: DirValue;
}

/** フェードタイプ */
declare interface FadeType {
    /** 黒 */
    BLACK: FadeTypeValue;
    /** 白 */
    WHITE: FadeTypeValue;
    /** なし */
    NONE: FadeTypeValue;
}

/** メッセージ表示位置 */
declare type MessagePositionType = 0 | 1 | 2;

/** メッセージ背景タイプ */
declare type BackgroundType = 0 | 1 | 2;

/** メッセージ情報 */
declare var $gameMessage: Game_Message;
/** メッセージ情報 */
declare interface Game_Message {
    /** 行ごとのリスト */
    _texts: string[];
    /** 使用中か */
    isBusy(): boolean;
    /** メッセージ背景タイプ */
    background(): BackgroundType;
    /** メッセージ表示位置 */
    positionType(): MessagePositionType;
    /** 顔グラの設定 */
    setFaceImage(name: string, index: number): void;
    /** 背景タイプの設定 */
    setBackground(type: BackgroundType): void;
    /** メッセージ表示位置の設定 */
    setPositionType(type: MessagePositionType): void;
    /** 話者の設定 */
    setSpeakerName(name: string): void;
    /** 選択肢の設定 */
    setChoices(choices: any[], defaultType: number, cancelType: number): void;
    /** 選択肢の背景の設定 */
    setChoiceBackground(background: number): void;
    /** 選択肢の表示位置の設定 */
    setChoicePositionType(positionType: number): void;
    /** 選択肢のコールバックの設定 */
    setChoiceCallback(callback: Function): void;
    /** メッセージ追加 */
    add(text: string): void;
    /** 改行コードで連結した全文 */
    allText(): string;
}

/** 一時ゲーム情報 */
declare var $gameTemp: Game_Temp;
/** 一時ゲーム情報 */
declare interface Game_Temp {
    /** 予約済みコモンイベントのリスト */
    _commonEventQueue: number[];
    /** 初期化 */
    initialize(): void;
    /** コモンイベントを予約する */
    reserveCommonEvent(cevId: number): void;
    /** コモンイベントが1件でも予約されているか */
    isCommonEventReserved(): boolean;
    /** 予約済みコモンイベントの先頭を取得 */
    retrieveCommonEvent(): Data_CommonEvent;
    /** テストプレイ中かどうか */
    isPlaytest(): boolean;
    /** 最後に使用したスキルのIDをセット */
    setLastUsedSkillId(skillId: number): void;
    /** 最後に使用したアイテムのIDをセット */
    setLastUsedItemId(itemId: number): void;
    /** 最後に行動したアクターのIDをセット */
    setLastSubjectActorId(actorId: number): void;
    /** 最後に行動した敵のインデックスをセット */
    setLastSubjectEnemyIndex(enemyIndex: number): void;
    /** 最後に対象になったアクターのIDをセット */
    setLastTargetActorId(actorId: number): void;
    /** 最後に対象になった敵のインデックスをセット */
    setLastTargetEnemyIndex(enemyIndex: number): void;
    /** タッチ状態のクリア */
    clearTouchState(): void;
    /** 行先座標の設定 */
    setDestination(x: number, y: number): void;
    /** アニメーション表示要求 */
    requestAnimation(
        characters: Game_Character[],
        animationId: number,
        mirror: boolean
    ): void;
}

/** ゲームシステム */
declare var $gameSystem: Game_System;
/** ゲームシステム */
declare interface Game_System {
    /** メインフォント */
    mainFontFace(): string;
    /** メインフォントサイズ */
    mainFontSize(): number;
    /** 数字フォント */
    numberFontFace(): string;
    /** ウィンドウ内側余白 */
    windowPadding(): number;
    /** ロード完了後の処理(累計フレーム数のロード、BGM/BGS演奏) */
    onAfterLoad(): void;
    /** SVか */
    isSideView(): boolean;
    /** エンカ許可されているか */
    isEncounterEnabled(): boolean;
    /** エンカを許可する */
    enableEncounter(): void;
    /** エンカを禁止する */
    disableEncounter(): void;
    /** 戦闘開始時の処理 */
    onBattleStart(): void;
    /** 戦闘勝利時の処理 */
    onBattleWin(): void;
    /** 戦闘逃走時の処理 */
    onBattleEscape(): void;
    /** セーブ許可/禁止 */
    isSaveEnabled(): boolean;
    /** セーブを禁止 */
    disableSave(): void;
    /** セーブを許可 */
    enableSave(): void;
    /** ロケールが日本か */
    isJapanese(): boolean;
    /** プレイ時間テキスト */
    playtimeText(): string;
}

/** ゲーム画面 */
declare var $gameScreen: Game_Screen;
/** ゲーム画面 */
declare interface Game_Screen {
    /** フラッシュ開始 */
    startFlash(rgba: number[], duration: number): void;
    /** 色調変更開始 */
    startTint(rgba: number[], duration: number): void;
    /** フラッシュ開始(ダメージ) */
    startFlashForDamage(): void;
    /** 味方のクリティカルによるフラッシュ開始 */
    startFlashPlayerCritical(): void;
    /** 敵のクリティカルによるフラッシュ開始 */
    startFlashEnemyCritical(): void;
}

/** ゲームタイマー */
declare var $gameTimer: Game_Timer;
/** ゲームタイマー */
declare interface Game_Timer {}

/** スイッチ */
declare var $gameSwitches: Game_Switches;
/** スイッチ */
declare interface Game_Switches {
    /** 保持しているデータ */
    _data: any;
    /** 指定スイッチの値 */
    value(switchId: number): boolean;
    /** 指定スイッチの値を設定する */
    setValue(switchId: number, value: boolean): void;
    /** 保持しているデータをコンソールに流す */
    console(): void;
}

/** スイッチ */
declare interface Switch {
    id: number;
    value: boolean;
}

/** セルフスイッチ */
declare var $gameSelfSwitches: Game_SelfSwitches;
/** セルフスイッチ */
declare interface Game_SelfSwitches {
    /** 値の設定 */
    setValue(values: (string | number)[], value: boolean): void;
}

/** 変数 */
declare var $gameVariables: Game_Variables;
/** 変数 */
declare interface Game_Variables {
    /** 保持しているデータ */
    _data: any;
    /** 指定変数の値 */
    value(variableId: number): any;
    /** 指定変数の値をセットする */
    setValue(variableId: number, value: any): void;
    /** 値が変更されたときの処理 */
    onChange(): void;
    /** 保持しているデータをコンソールに流す */
    console(): void;
}

/** 変数 */
declare interface Variable {
    id: number;
    value: any;
}

/** バトラー基底 */
declare interface Game_BattlerBase {
    /** 現HP */
    _hp: number;
    /** 現MP */
    _mp: number;
    /** 現TP */
    _tp: number;
    /** 現HP */
    hp: number;
    /** 現MP */
    mp: number;
    /** 現TP */
    tp: number;
    /** 最大HP */
    mhp: number;
    /** 最大MP */
    mmp: number;
    /** 攻撃力 */
    atk: number;
    /** 防御力 */
    def: number;
    /** 魔力 */
    mat: number;
    /** 魔法防御 */
    mdf: number;
    /** 素早さ */
    agi: number;
    /** 運の良さ */
    luk: number;
    /** 命中率 */
    hit: number;
    /** 回避率 */
    eva: number;
    /** 会心率 */
    cri: number;
    /** 会心回避率 */
    cev: number;
    /** 魔法回避率 */
    mev: number;
    /** 魔法反射率 */
    mrf: number;
    /** 反撃率 */
    cnt: number;
    /** HP再生率 */
    hrg: number;
    /** MP再生率 */
    mrg: number;
    /** TP再生率 */
    trg: number;
    /** 狙われ率 */
    tgr: number;
    /** 防御効果率 */
    grd: number;
    /** 回復効果率 */
    rec: number;
    /** 薬の知識 */
    pha: number;
    /** MP消費率 */
    mcr: number;
    /** TPチャージ率 */
    tcr: number;
    /** 物理ダメージ率 */
    pdr: number;
    /** 魔法ダメージ率 */
    mdr: number;
    /** 床ダメージ率 */
    fdr: number;
    /** EXP取得率 */
    exr: number;
    /** ステートのリスト */
    _states: number[];
    /** 各能力値のバフ段階のリスト */
    _buffs: number[];
    /** プロパティの初期化 */
    initMembers(): void;
    /** 更新 */
    refresh(): void;
    /** アクターか */
    isActor(): boolean;
    /** 敵か */
    isEnemy(): boolean;
    /** 生きているか */
    isAlive(): boolean;
    /** 指定の追加能力値の特徴値合計 */
    xparam(xparamId: number): number;
    /** ついているステートのリスト */
    states(): Data_State[];
    /** ついているバフ/デバフのリスト */
    buffs(paramId: ParamIdValue): number;
    /** キャラクターの装備やバフを除外した基礎能力値 */
    paramBase(paramId: ParamIdValue): number;
    /** キャラクターの装備やバフを加味した能力値 */
    param(paramId: ParamIdValue): number;
    /** 能力値のバフ/デバフの変化割合 */
    paramBuffRate(paramId: ParamIdValue): number;
    /** 攻撃時属性の特徴のリスト */
    attackElements(): number[];
    /** 攻撃追加回数の合計 */
    attackTimesAdd(): number;
    /** 指定属性を持つ攻撃時属性の特徴の値の総乗 */
    elementRate(elementId: number): number;
    /** ダメージ発生時のTPチャージ */
    chargeTpByDamage(damageRate: number): void;
    /** 出現しているか */
    isAppeared(): boolean;
    /** 指定ステートがついているか */
    isStateAffected(stateId: number): boolean;
    /** 戦闘不能か */
    isDeathStateAffected(): boolean;
    /** バフが乗っているか */
    isBuffAffected(paramId: ParamIdValue): boolean;
    /** デバフが乗っているか */
    isDebuffAffected(paramId: ParamIdValue): boolean;
    /** 最大までデバフが乗っているか */
    isMaxBuffAffected(paramId: ParamIdValue): boolean;
    /** 最大までデバフが乗っているか */
    isMaxDebuffAffected(paramId: ParamIdValue): boolean;
    /** 通常攻撃可能か */
    canAttack(): boolean;
    /** 防御可能か */
    canGuard(): boolean;
    /** アイテム/スキルを使用可能か */
    canUse(item: Data_Item | Data_Skill): boolean;
    /** 指定スキルのTPコスト */
    skillTpCost(skill: Data_Skill): number;
    /** 指定スキルのMPコスト */
    skillMpCost(skill: Data_Skill): number;
    /** スキルコストを払えるか */
    canPaySkillCost(skill: Data_Skill): boolean;
    /** スキルコストを支払う */
    paySkillCost(skill: Data_Skill): void;
    /** スキルが封印されているか */
    isSkillSealed(skillId: number): boolean;
    /** スキルタイプが封印されているか */
    isSkillTypeSealed(stypeId: number): boolean;
    /** スキルもしくはアイテムの使用可能条件を満たすか(使用条件と所持数) */
    meetsItemConditions(item: Data_Item | Data_Skill): boolean;
    /** スキルもしくはアイテムの使用可能条件を満たすか(使用条件) */
    meetsUsableItemConditions(item: Data_Item | Data_Skill): boolean;
    /** すべてのアイコンのインデックスのリスト */
    allIcons(): number[];
    /** すべてのステートアイコンのインデックスのリスト */
    stateIcons(): number[];
    /** すべてのバフアイコンのインデックスのリスト */
    buffIcons(): number[];
    /** バフアイコンのインデックス */
    buffIconIndex(): number[];
}

/** バトラー */
declare interface Game_Battler extends Game_BattlerBase {
    /** 行動パターン */
    _actions: Game_Action[];
    /** 行動結果 */
    _result: Game_ActionResult;
    /** 名前 */
    name(): string;
    /** バトラー名 */
    battlerName(): string;
    /** バトラー色相 */
    battlerHue(): number;
    /** 次の行動 */
    currentAction(): Game_Action;
    /** モーションの更新をキャンセル */
    cancelMotionRefresh(): void;
    /** 混乱しているか */
    isConfused(): boolean;
    /** 行動の決定 */
    makeActions(): void;
    /** 行動のクリア */
    clearActions(): void;
    /** ターン終了時の処理 */
    onTurnEnd(): void;
    /** アイテム/スキルの使用 */
    useItem(item: Data_Item | Data_Skill): void;
    /** 行動結果 */
    result(): Game_ActionResult;
    /** TP初期化 */
    initTp(): void;
    /** MP増減 */
    gainMp(mp: number): void;
    /** TP増減 */
    gainTp(value: number): void;
    /** TP増減(行動結果に入れない) */
    gainSilentTp(value: number): void;
    /** TP設定 */
    setTp(value: number): void;
    /** ステート付与 */
    addState(stateId: number): void;
    /** アクション状態のセット */
    setActionState(stateName: string): void;
    /** ダメージVE要求 */
    requestEffect(effectName: string): void;
    /** ダメージ演出 */
    performDamage(): void;
    /** ダメージを受けたときの処理 */
    onDamage(): void;
    /** 画面基準X座標 */
    screenX(): number;
    /** 画面基準Y座標 */
    screenY(): number;
    /** 直近の標的を保存 */
    setLastTarget(target: Game_Battler): void;
}

/** アクター */
declare var $gameActor: Game_Actor;
/** アクター */
declare interface Game_Actor extends Game_Battler {
    /** アクターID */
    _actorId: number;
    /** レベル */
    _level: number;
    /** レベル */
    level: number;
    /** 習得スキル */
    _skills: number[];
    /** アクターID */
    actorId(): number;
    /** セットアップ */
    setup(actorId: number): void;
    /** 現在の職業 */
    currentClass(): Data_Class;
    /** 基本床ダメージ */
    basicFloorDamage(): number;
    /** 床ダメージ処理実行 */
    executeFloorDamage(): void;
    /** このアクターにおける指定スキルの消費MP */
    skillMpCost(skill: Data_Skill): number;
    /** このアクターにおける指定スキルの消費TP */
    skillTpCost(skill: Data_Skill): number;
    /** 装備 */
    equips(): (Data_Weapon | Data_Armor)[];
    /** 装備可能か */
    canEquip(ite: Data_Weapon | Data_Armor): boolean;
    /** 装備変更 */
    changeEquip(slotId: number, item: Data_Weapon | Data_Armor): void;
    /** 経験値の変更 */
    changeExp(exp: number, show: boolean): void;
    /** 転職 */
    changeClass(classId: number, keepExp: boolean): void;
    /** 装備の最適化 */
    optimizeEquipments(): void;
    /** 装備をすべてはずす */
    clearEquipments(): void;
    /** SV画像名 */
    battlerName(): string;
    /** SV画像を設定する */
    setBattlerImage(battlerName: string): void;
    /** キャラ画像を設定する */
    setCharacterImage(characterName: string, characterIndex: number): void;
    /** モーション開始要求 */
    requestMotionRefresh(): void;
    /** 武器タイプ判定 */
    isSkillWtypeOk(skill: Data_Skill): boolean;
    /** 指定タイプの武器を装備中か */
    isWtypeEquipped(wtypeId: number): boolean;
    /** 最後に使用したスキル */
    lastBattleSkill(): Data_Skill;
    /** 最後に使用したスキルを記憶する */
    setLastBattleSkill(skill: Data_Skill): void;
    /** 最後に選択したコマンドシンボル */
    lastCommandSymbol(): string;
    /** 最後に選択したコマンドシンボルを記憶する */
    setLastCommandSymbol(symbol: string): void;
    /** 最大レベルに到達しているか */
    isMaxLevel(): boolean;
    /** 現在の経験値 */
    currentExp(): number;
    /** 次のレベルまでの必要経験値 */
    nextRequiredExp(): number;
    /** レベルアップ表示 */
    displayLevelUp(newSkills: Data_Skill[]): void;
    /** ステートや装備品等を加味したEXP獲得倍率 */
    finalExpRate(): number;
    /** パーティーが1歩歩くごとに呼ばれる処理 */
    onPlayerWalk(): void;
    /** 素手の攻撃属性 */
    bareHandsElementId(): number;
    /** 指定スキルが行使可能か */
    isSkillWtypeOk(skill: Data_Skill): boolean;
}

/** 敵 */
declare interface Game_Enemy extends Game_Battler {
    /** 初期化2 */
    setup(enemyId: number, x: number, y: number): void;
    /** 経験値 */
    exp(): number;
    /** 敵データ */
    enemy(): Data_Enemy;
    /** 敵ID */
    enemyId(): number;
    /** 行動回数 */
    numActions(): number;
    /** 行動 */
    action(index: number): Game_Action;
    /** 行動が使用可能か */
    isActionValid(action: EnemyAction): boolean;
    /** 行動内容の決定 */
    makeActions(): void;
    /** 行動が条件に合うか */
    meetsCondition(action: EnemyAction): boolean;
    /** 行動の選考1 */
    selectAllActions(actionList: EnemyAction[]): void;
    /** 行動の選考2 */
    selectAction(actionList: EnemyAction[], ratingZero: number): EnemyAction;
}

/** アクターズ */
declare var $gameActors: Game_Actors;
/** アクターズ */
declare interface Game_Actors {
    /** 指定したアクターIDのアクター */
    actor(actorId: number): Game_Actor;
}

/** ユニット */
declare interface Game_Unit {
    /** 初期化 */
    initialize(): void;
    /** 生死を問わず全メンバー */
    members(): Game_Battler[];
    /** 死亡メンバー */
    deadMembers(): Game_Battler[];
    /** 生存メンバー */
    aliveMembers(): Game_Battler[];
    /** ランダムに選択した標的 */
    randomTarget(): Game_Battler;
    /** 指定の生存メンバー */
    smoothTarget(index: number): Game_Battler;
}

/** パーティー */
declare var $gameParty: Game_Party;
/** パーティー */
declare interface Game_Party extends Game_Unit {
    /** パーティー名 */
    name(): string;
    /** パーティーメンバー全員 */
    members(): Game_Actor[];
    /** 戦闘メンバー全員のうちパーティー内にいるメンバー */
    allBattleMembers(): Game_Actor[];
    /** 戦闘メンバー全員 */
    battleMembers(): Game_Actor[];
    /** 戦闘メンバーの先頭 */
    leader(): Game_Actor;
    /** 戦闘メンバーの最大数 */
    maxBattleMembers(): number;
    /** パーティー内の最高レベル */
    highestLevel(): number;
    /** パーティーが1歩歩くごとに呼ばれる処理 */
    onPlayerWalk(): void;
    /** 乗り降りする */
    getOnOffVehicle(): void;
    /** アクターの加入 */
    addActor(actorId: number): void;
    /** アクターの離脱 */
    removeActor(actorId: number): void;
    /** 選択中のアクター */
    menuActor(): Game_Actor;
    /** 選択中のアクターを保持 */
    setMenuActor(actor: Game_Actor): void;
    /** オブジェクトをもとにして該当コンテナを返す */
    itemContainer(item: Data_Record): any;
    /** 指定のアイテムを持っているか */
    hasItem(
        item: Data_Item | Data_Weapon | Data_Armor,
        includeEquip: boolean
    ): boolean;
    /** だれかひとりでも装備しているか */
    isAnyMemberEquipped(item: Data_Item | Data_Weapon | Data_Armor): boolean;
    /** アイテム増減 */
    gainItem(item: Data_Record, amount: number, includeEquip: boolean): void;
    /** アイテム減 */
    loseItem(item: Data_Record, amount: number, includeEquip: boolean): void;
    /** 所持金の増減 */
    gainGold(amount: number): void;
    /** 所持金 */
    gold(): number;
    /** 指定アイテムの所持数 */
    numItems(item: Data_Record): number;
    /** 品目あたりの所持数の最大値 */
    maxItems(): number;
    /** メンバーが装備中の装備品を指定数量まで順次はずして廃棄 */
    discardMembersEquip(item: Data_Record, amount: number): void;
    /** 累計歩数の増加 */
    increaseSteps(): void;
    /** 戦闘中か */
    inBattle(): boolean;
    /** 生存メンバー */
    aliveMembers(): Game_Actor[];
    /** 戦闘中限定のステートを解除 */
    removeBattleStates(): void;
    /** 勝利ポーズ */
    performVictory(): void;
}

/** 敵グループ */
declare var $gameTroop: Game_Troop;
/** 敵グループ */
declare interface Game_Troop extends Game_Unit {
    /** 敵グループ */
    _troopId: number;
    /** 敵データのリスト */
    _enemies: Game_Enemy[];
    /** 全メンバー */
    members(): Game_Enemy[];
    /** 生存メンバー */
    aliveMembers(): Game_Enemy[];
    /** 敵グループデータ */
    troop(): Data_Troop;
    /** 金額合計 */
    goldTotal(): number;
    /** EXP合計 */
    expTotal(): number;
}

/** エンカウンター */
declare interface Encounter {
    /** 敵グループ */
    troopId: number;
    /** 重み */
    weight: number;
    /** リージョン */
    regionSet: number[];
}

/** マップ */
declare var $gameMap: Game_Map;
/** マップ */
declare interface Game_Map {
    /** インタプリタ */
    _interpreter: Game_Interpreter;
    /** 初期化 */
    initialize(): void;
    /** 初期設定 */
    setup(mapId: number): void;
    /** イベントの準備 */
    setupEvents(): void;
    /** マップID */
    mapId(): number;
    /** 表示名 */
    displayName(): string;
    /** イベントのリスト */
    events(): Game_Event[];
    /** イベント */
    event(eventId: number): Game_Event;
    /** 指定座標のリージョン */
    regionId(x: number, y: number): void;
    /** 指定座標の地形タグ */
    terrainTag(x: number, y: number): void;
    /** マップ設定されているBGM/BGS自動演奏 */
    autoplay(): void;
    /** フレーム更新 */
    update(sceneActive: boolean): void;
    /** タイル幅 */
    tileWidth(): number;
    /** タイル高さ */
    tileHeight(): number;
    /** リフレッシュ要求 */
    requestRefresh(): void;
    /** エンカウンターリスト */
    encounterList(): Encounter[];
    /** 追加エンカウンターリストの設定 */
    setupAdditionalEncounterList(mapId: number): void;
    /** 敵遭遇歩数変更条件の設定 */
    setupStepsConditions(mapId: number): void;
    /** 各種イベントの開始準備 */
    setupStartingEvent(): boolean;
    /** イベント動作中か */
    isEventRunning(): boolean;
    /** 小型船 */
    boat(): Game_Vehicle;
    /** 大型船 */
    ship(): Game_Vehicle;
    /** 飛行船 */
    airship(): Game_Vehicle;
    /** 画面上のX座標をマップX座標に変換して返す */
    canvasToMapX(x: number): number;
    /** 画面上のY座標をマップY座標に変換して返す */
    canvasToMapY(y: number): number;
}

/** イベント */
declare interface Game_Event extends Game_Character {
    /** イベントID */
    eventId(): number;
}

/** コモンイベント */
declare interface Game_CommonEvent {}

declare type Terrain = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
/** キャラクターベース */
declare interface Game_CharacterBase {
    _x: number;
    _y: number;
    _realX: number;
    _realY: number;
    /** いまいる場所の地形タグ */
    terrainTag(): Terrain;
    /** 向いている方向 */
    direction(): DirValue;
    /** 画像の設定 */
    setImage(characterName: string, characterIndex: number): void;
    /** 透明化ON/OFF */
    setTransparent(transparent: boolean): void;
    /** 足踏みアニメーションのON/OFF */
    setStepAnime(flg: boolean): void;
    /** 方向設定 */
    setDirection(dir: DirValue): void;
    /** 位置設定 */
    setPosition(x: number, y: number): void;
    /** 人物ではなく物体である場合のY座標補正 */
    shiftY(): number;
    /** 何かのX方向補正(?) */
    scrolledX(): number;
    /** 何かのY方向補正(?) */
    scrolledY(): number;
    /** 画面上でのX座標 */
    screenX(): number;
    /** 画面上でのY座標 */
    screenY(): number;
    /** はしごにつかまっているかどうか */
    isOnLadder(): boolean;
    /** 草むらにいるかどうか */
    isOnBush(): boolean;
    /** リージョンID */
    regionId(): number;
    /** ??? */
    isNearTheScreen(): boolean;
}

/** キャラクター */
declare interface Game_Character extends Game_CharacterBase {}

/** 乗り物 */
declare interface Game_Vehicle extends Game_Character {
    /** 位置の設定 */
    setLocation(mapId: number, x: number, y: number): void;
    /** 降りる */
    getOff(): void;
}

declare type DirValue = 0 | 2 | 4 | 6 | 8;
declare type FadeTypeValue = 0 | 1 | 2;

/** プレイヤー */
declare var $gamePlayer: Game_Player;
/** プレイヤー */
declare interface Game_Player extends Game_Character {
    /** 敵出現歩数 */
    _encounterCount: number;
    /** X座標 */
    x: number;
    /** Y座標 */
    y: number;
    /** 仮 */
    checkEventTriggerHere(triggers: any[]): void;
    /** ダメージ床の上にいるか */
    isOnDamageFloor(): boolean;
    /** いまいる座標のリージョン */
    regionId(): number;
    /** 移動を予約する */
    reserveTransfer(
        mapId: number,
        x: number,
        y: number,
        dir: DirValue,
        fadeType: FadeTypeValue
    ): void;
    /** 移動実行 */
    performTransfer(): void;
    /** 敵遭遇歩数の決定 */
    makeEncounterCount(): void;
    /** 条件に合致する歩数変更条件をもとに新たな敵遭遇歩数を返す */
    stepsForUpdate(): number;
    /** 敵遭遇歩数を更新 */
    updateEncounterCount(): void;
    /** 敵遭遇歩数を減らす値の算出 */
    encounterProgressValue(): number;
    /** 敵グループIDの選出 */
    makeEncounterTroopId(): number;
    /** エンカ実行 */
    executeEncounter(): boolean;
    /** 移動中か */
    isMoving(): boolean;
    /** 小型船に乗っているか */
    isInBoat(): boolean;
    /** 大型船に乗っているか */
    isInShip(): boolean;
    /** 飛行船に乗っているか */
    isInAirship(): boolean;
    /** なんらかの乗り物に乗っているか */
    isInVehicle(): boolean;
    /** 乗り物の乗降 */
    getOnOffVehicle(): boolean;
    /** 更新 */
    refresh(): void;
}

/** アクション */
declare interface Game_Action {
    /** アイテム/スキル */
    _item: Game_Item;
    /** 強制行動中か */
    _forcing: boolean;
    /** ターゲットインデックス */
    _targetIndex: number;
    /** 行動主体アクターID */
    _subjectActorId: number;
    /** 行動主体になる敵インデックス */
    _subjectEnemyIndex: number;
    /** 初期化 */
    initialize(subject: Game_Battler, forcing: boolean): void;
    /** 行動主体のセット */
    setSubject(subject: Game_Battler): void;
    /** クリア */
    clear(): void;
    /** 行動時アイテム/スキル */
    item(): Data_Item | Data_Skill;
    /** 会心率 */
    itemCri(target: Game_Battler): number;
    /** 魔法反射率 */
    itemMrf(target: Game_Battler): number;
    /** 攻撃行動か */
    isAttack(): boolean;
    /** 使用可能か */
    isValid(): boolean;
    /** 行動主体 */
    subject(): Game_Battler;
    /** 行動の設定(敵用) */
    setEnemyAction(action: EnemyAction): void;
    /** スキルをセット */
    setSkill(skillId: number): void;
    /** 標的をセット */
    setTarget(index: number): void;
    /** 行動にセットされているアイテム/スキルの連続回数 */
    numRepeats(): number;
    /** 連続回数2以上の場合の標的追加設定 */
    repeatTargets(targets: Game_Battler[]): Game_Battler[];
    /** ターゲットの指定属性の相性を算出、算出結果を保持(基準値:1) */
    calcElementRate(target: Game_Battler): number;
    /** 複数の指定属性のうちターゲットに対する属性有効度が最大になる場合の有効度 */
    elementsMaxRate(target: Game_Battler, elements: number[]): number;
    /** 運によるステート付与・デバフ付与の成功倍率 */
    lukEffectRate(target: Game_Battler): number;
    /** ダメージ式を評価して基本値を得る */
    evalDamageFormula(target: Game_Battler): number;
    /** ダメージ値計算 */
    makeDamageValue(target: Game_Battler, critical: boolean): number;
    /** ダメージ実行 */
    executeDamage(target: Game_Battler, value: number): void;
    /** HPダメージ実行 */
    executeHpDamage(target: Game_Battler, value: number): void;
    /** アイテム・スキルによるTP増減 */
    itemEffectGainTp(target: Game_Battler, effect: Effect): void;
    /** 単体向けか */
    isForOne(): boolean;
    /** 敵味方全員向けの行動か */
    isForEveryone(): boolean;
    /** 相手向けの行動か */
    isForOpponent(): boolean;
    /** ランダム向けの行動か */
    isForRandom(): boolean;
    /** 味方向けの行動か */
    isForFriend(): boolean;
    /** 使用者自身向けの行動か */
    isForUser(): boolean;
    /** 死んだ味方向けの行動か */
    isForDeadFriend(): boolean;
    /** 生きている味方向けの行動か */
    isForAliveFriend(): boolean;
    /** 物理攻撃である */
    isPhysical(): boolean;
    /** 魔法攻撃である */
    isMagical(): boolean;
    /** 効果の適用 */
    apply(target: Game_Battler): void;
    /** 行動効果の適用(全体/コモンイベント等) */
    applyGlobal(): void;
    /** クリティカル適用 */
    applyCritical(value: number): number;
    /** 分散の適用 */
    applyVariance(value: number, variance: number): number;
    /** 防御状態の適用 */
    applyGuard(value: number, target: Game_Battler): number;
    /** 使用者への効果反映 */
    applyItemUserEffect(target: Game_Battler): void;
    /** 標的の決定 */
    makeTargets(): Game_Battler[];
    /** 混乱中に選定した標的 */
    confusionTarget(): Game_Battler;
    /** 敵味方全体から選んだ標的 */
    targetsForEveryone(): Game_Battler[];
    /** 相手側から選んだ標的 */
    targetsForOpponents(): Game_Battler[];
    /** 味方側から選んだ標的 */
    targetsForFriends(): Game_Battler[];
    /** 死んでいる中から選んだ標的 */
    targetsForDead(unit: Game_Unit): Game_Battler[];
    /** 生きている中から選んだ標的 */
    targetsForAlive(unit: Game_Unit): Game_Battler[];
    /** 生死を問わず選んだ標的 */
    targetsForDeadAndAlive(unit: Game_Unit): Game_Battler[];
    /** ランダムに選んだ標的 */
    randomTargets(unit: Game_Unit): Game_Battler[];
    /** 味方ユニット */
    friendsUnit(): Game_Unit;
    /** 相手ユニット */
    opponentsUnit(): Game_Unit;
}

/** 行動結果 */
declare interface Game_ActionResult {
    /** 使用後か */
    used: boolean;
    /** クリティカルか */
    critical: boolean;
    /** ミスしたか */
    missed: boolean;
    /** 回避したか */
    evaded: boolean;
    /** 吸収か */
    drain: boolean;
    /** TPダメージ */
    tpDamage: number;
    /** 命中したか */
    isHit(): boolean;
}

/** スキル/アイテム/武器/防具 */
declare interface Game_Item {
    /** 項目ID */
    _itemId: number;
    /** 項目ID */
    itemId(): number;
}

/** イベントコマンド */
declare interface EventCommand {
    /** コード */
    code: number;
    /** インデント */
    indent: number;
    /** パラメータ */
    parameters: any[];
}

/** インタープリタ */
declare interface Game_Interpreter {
    /** 処理対象のイベントコマンドのリスト */
    _list: EventCommand[];
    /** 予約済みのコモンイベントのセットアップ */
    setupReserveCommonEvent(): boolean;
    /** 文章の表示 */
    command101(params: any[]): boolean;
    /** 選択肢の表示 */
    command102(params: any[]): void;
    /** 選択肢のセットアップ */
    setupChoices(params: any[]): void;
    /** **を選択したとき */
    command402(params: any[]): boolean;
    /** 選択したとき */
    command403(params: any[]): boolean;
    /** イベントコマンドによるコモンイベントのセットアップ */
    command117(params: any[]): boolean;
    /** 色調変更開始 */
    command223(params: any[]): void;
    /** スクリプト実行 */
    command355(): boolean;
    /** 指定内容をインタープリタオブジェクト内部にセットする */
    setup(list: any[], eventId: number): void;
    /** 1つ下の階層についてインタープリタをセットアップする */
    setupChild(list: any[], eventId: number): void;
    /** インタープリタに設定されたマップがいまいるマップかどうか */
    isOnCurrentMap(): boolean;
    /** キャラクター */
    character(id: number): Game_Character;
    /** ウェイトモード設定 */
    setWaitMode(mode: string): void;
}
