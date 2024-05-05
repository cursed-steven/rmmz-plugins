/** 起動シーン */
declare interface Scene_Boot {
    /** 起動シーンの開始 */
    start(): void;
    /** 暗号化情報のセット */
    setEncryptionInfo(): void;
}

/** ベースシーン */
declare interface Scene_Base extends Stage {
    /** スプライトセット */
    _spriteset: Spriteset_Map | Spriteset_Battle;
    /** シーンで保持しているスプライトのリスト */
    children: any[];
    /** 初期化 */
    initialize(): void;
    /** 初期処理 */
    create(): void;
    /** 更新 */
    update(): void;
    /** 行数からウィンドウの高さを計算して返す */
    calcWindowHeight(numLines: number, selectable: boolean): number;
    /** レイヤにウィンドウを追加する */
    addWindow(window: any): void;
    /** 1つ前のシーンに戻る */
    popScene(): void;
    /** メインコマンド幅 */
    mainCommandWidth(): number;
    /** ボタンエリアの上辺Y座標 */
    buttonAreaTop(): number;
    /** ボタンエリアの底辺Y座標 */
    buttonAreaBottom(): number;
    /** ボタンエリアのY座標 */
    buttonY(): number;
}

/** タイトルシーン */
declare interface Scene_Title extends Scene_Base {
    /** タイトルコマンドウィンドウ */
    _commandWindow: Window_TitleCommand;
    /** タイトル用スプライト */
    _gameTitleSprite: Sprite;
    /** 開始 */
    start(): void;
    /** タイトル画面描画 */
    drawGameTitle(): void;
    /** コマンドウィンドウ作成 */
    createCommandWindow(): void;
    /** コマンドウィンドウの領域 */
    commandWindowRect(): Rectangle;
    /** オプション選択時の処理 */
    commandOptions(): void;
}

/** 名前入力シーン */
declare interface Scene_Name extends Scene_MenuBase {
    /** 編集ウィンドウの領域 */
    editWindowRect(): Rectangle;
}

/** メッセージシーン */
declare interface Scene_Message extends Scene_Base {
    /** 所持金ウィンドウ */
    _goldWindow: Window_Gold;
    /** メッセージウィンドウ */
    _messageWindow: Window_Message;
    /** ウィンドウの作成 */
    createAllWindows(): void;
}

/** マップシーン */
declare interface Scene_Map extends Scene_Message {
    /** メニューボタン */
    _menuButton: Sprite_Button;
    /** メニュー呼び出し中か */
    menuCalling: boolean;
    /** マップシーン開始 */
    start(): void;
    /** シーン更新 */
    updateScene(): void;
    /** コンソールにスイッチと変数の内容を表示 */
    updateCallDebug(): void;
    /** デバッグが呼ばれているか */
    isDebugCalled(): boolean;
    /** 必要なウィンドウの作成 */
    createAllWindows(): void;
    /** マップ移動時の処理 */
    onTransfer(): void;
    /** マップロード完了時の処理 */
    onMapLoaded(): void;
    /** メニューが使用可能か */
    isMenuEnabled(): boolean;
    /** メニューが呼ばれているか */
    isMenuCalled(): boolean;
    /** メニュー呼び出し */
    callMenu(): void;
    /** タッチ入力の処理 */
    processMapTouch(): void;
    /** タッチを検出したときの処理 */
    onMapTouch(): void;
    /** メニューボタンを隠す */
    hideMenuButton(): void;
    /** シーン終了 */
    terminate(): void;
}

/** 戦闘シーン */
declare interface Scene_Battle extends Scene_Message {
    /** キャンセルボタン */
    _cancelButton: Sprite_Button;
    /** ヘルプウィンドウ */
    _helpWindow: Window_Help;
    /** 戦闘用ステータスウィンドウ(不使用) */
    _statusWindow: Window_BattleStatus;
    /** パーティーコマンドウィンドウ */
    _partyCommandWindow: Window_PartyCommand;
    /** アクターウィンドウ */
    _actorWindow: Window_BattleActor;
    /** アイテムウィンドウ */
    _itemWindow: Window_BattleItem;
    /** 敵選択ウィンドウ */
    _enemyWindow: Window_BattleEnemy;
    /** スプライトセット */
    _spriteset: Spriteset_Battle;
    /** キャンセルボタンの作成 */
    createCancelButton(): void;
    /** ヘルプウィンドウの領域の再設定 */
    resetHelpWindowPosition(): void;
    /** ログウィンドウの領域 */
    logWindowRect(): Rectangle;
    /** ヘルプウィンドウの領域 */
    helpWindowRect(): Rectangle;
    /** アイテムウィンドウの領域 */
    itemWindowRect(): Rectangle;
    /** アクターウィンドウの領域 */
    actorWindowRect(): Rectangle;
    /** パーティーコマンドウィンドウの作成 */
    createPartyCommandWindow(): void;
    /** パーティーコマンドウィンドウの領域 */
    partyCommandWindowRect(): Rectangle;
    /** 戦闘用HUDの作成 */
    createStatusWindow(): void;
    /** 戦闘用HUDの領域 */
    statusWindowRect(): Rectangle;
    /** アクターコマンドウィンドウの作成 */
    createActorCommandWindow(): void;
    /** アクターコマンドウィンドウの領域 */
    actorCommandWindowRect(): Rectangle;
    /** アイテムウィンドウの領域 */
    itemWindowRect(): Rectangle;
    /** 敵選択ウィンドウの領域 */
    enemyWindowRect(): Rectangle;
    /** パーティー/戦う */
    commandFight(): void;
    /** 通常攻撃 */
    commandAttack(): void;
    /** キャンセル */
    commandCancel(): void;
    /** 防御 */
    commandGuard(): void;
    /** 撤退 */
    commandEscape(): void;
    /** アイテム */
    commandItem(): void;
    /** スキル */
    commandSkill(): void;
    /** アイテム選択時の処理 */
    onItemOk(): void;
    /** アイテム選択をキャンセルした時の処理 */
    onItemCancel(): void;
    /** 行動対象のアクター選択時の処理 */
    onActorOk(): void;
    /** 行動対象のアクター選択をキャンセルした時の処理 */
    onActorCancel(): void;
    /** 行動対象の敵選択時の処理 */
    onEnemyOk(): void;
    /** 行動対象の敵選択をキャンセル時の処理 */
    onEnemyCancel(): void;
    /** アクターコマンド選択時の処理 */
    onActorCommandOk(): void;
    /** 行動選択時の処理 */
    onSelectAction(): void;
    /** パーティーコマンド選択の開始 */
    startPartyCommandSelection(): void;
    /** アクターコマンド選択の開始 */
    startActorCommandSelection(): void;
    /** アクター選択の開始 */
    startActorSelection(): void;
    /** 敵選択の開始 */
    startEnemySelection(): void;
    /** 入力ウィンドウの変更 */
    changeInputWindow(): void;
    /** 入力子ウィンドウを隠す */
    hideSubInputWindows(): void;
    /** コマンド選択を終了 */
    endCommandSelection(): void;
}

/** 各種メニューシーンの基底クラス */
declare interface Scene_MenuBase extends Scene_Base {
    /** ヘルプウィンドウ */
    _helpWindow: Window_Help;
    /** スプライト(キャンセルボタン) */
    _cancelButton: Sprite_Button;
    /** メインエリアの上辺のY座標 */
    mainAreaTop(): number;
    /** ヘルプウィンドウの領域 */
    helpWindowRect(): Rectangle;
    /** ヘルプウィンドウ作成 */
    createHelpWindow(): void;
    /** 背景の不透明度を設定 */
    setBackgroundOpacity(opacity: number): void;
    /** 前後ページボタンの作成 */
    createPageButtons(): void;
    /** キャンセルボタンの作成 */
    createCancelButton(): void;
    /** 操作中のアクター */
    actor(): Game_Actor;
    /** 操作するアクターを変更した時の処理 */
    onActorChange(): void;
    /** 前のアクターに変更 */
    previousActor(): void;
    /** 次のアクターに変更 */
    nextActor(): void;
}

/** メニューシーン */
declare interface Scene_Menu extends Scene_MenuBase {
    /** コマンドウィンドウ */
    _commandWindow: Window_MenuCommand;
    /** アクター選択ウィンドウ */
    _statusWindow: Window_MenuStatus;
    /** 開始 */
    start(): void;
    /** コマンドウィンドウ作成 */
    createCommandWindow(): void;
    /** コマンドウィンドウの領域 */
    commandWindowRect(): Rectangle;
    /** アクター選択ウィンドウの領域 */
    statusWindowRect(): Rectangle;
    /** アイテムコマンド */
    commandItem(): void;
    /** アクター指定を伴うコマンド */
    commandPersonal(): void;
    /** オプションコマンド */
    commandOptions(): void;
    /** アクター指定時の処理 */
    onPersonalOk(): void;
    /** アクター指定をキャンセルしたときの処理 */
    onPersonalCancel(): void;
}

/** セーブ・ロードシーンの基底クラス */
declare interface Scene_File extends Scene_MenuBase {
    /** セーブデータリストウィンドウ */
    _listWindow: Window_SavefileList;
    /** セーブデータリストウィンドウの作成 */
    createListWindow(): void;
    /** ヘルプウィンドウの設定するテキスト */
    helpWindowText(): string;
    /** リストウィンドウの領域 */
    listWindowRect(): Rectangle;
    /** モード */
    mode(): string;
}

/** ロードシーン */
declare interface Scene_Load extends Scene_File {
    /** ロード成功時の処理 */
    onLoadSuccess(): void;
}

/** アイテムシーンならびにスキルシーンの基底クラス */
declare interface Scene_ItemBase extends Scene_MenuBase {
    /** 各種メニューシーンでのアクター選択ウィンドウ */
    _actorWindow: Window_MenuActor;
    /** 各種メニューシーンでの項目選択ウィンドウ */
    _itemWindow: Window_Selectable;
    /** アイテム/スキルリストウィンドウの作成 */
    createItemWindow(): void;
    /** アイテム/スキル使用対象ウィンドウの作成 */
    createActorWindow(): void;
    /** アクター選択ウィンドウ */
    actorWindowRect(): Rectangle;
    /** 項目選択ウィンドウを有効化する */
    activateItemWindow(): void;
    /** 項目使用時のSEを鳴らす */
    playSeForItem(): void;
    /** (MZETS-2では無効化) */
    checkCommonEvent(): void;
    /** アクター選択時の処理 */
    onActorOk(): void;
    /** アイテム選択時の処理 */
    onItemOk(): void;
    /** アイテム選択をキャンセルした時の処理 */
    onItemCancel(): void;
    /** 使用者 */
    user(): Game_Battler | null;
    /** リストウィンドウ内でカーソルが乗っている項目 */
    item(): Data_Item | Data_Skill;
    /** アイテム使用 */
    useItem(): void;
    /** アイテムの効果適用 */
    applyItem(): void;
    /** ゲームオーバーチェック */
    checkGameover(): void;
}

/** ゲームオーバーシーン */
declare interface Scene_Gameover extends Scene_Base {}

/** ゲーム終了シーン */
declare interface Scene_GameEnd extends Scene_MenuBase {
    /** コマンドウィンドウ領域 */
    commandWindowRect(): Rectangle;
    /** タイトル画面へ移動 */
    commandToTitle(): void;
}

/** アイテムシーン */
declare interface Scene_Item extends Scene_ItemBase {
    /** カテゴリウィンドウ */
    _categoryWindow: Window_ItemCategory;
    /** アイテムリストウィンドウ */
    _itemWindow: Window_ItemList;
    /** カテゴリーウィンドウ作成 */
    createCategoryWindow(): void;
    /** カテゴリーウィンドウ領域 */
    categoryWindowRect(): Rectangle;
    /** アイテムウィンドウ領域 */
    itemWindowRect(): Rectangle;
    /** SE */
    playSeForItem(): void;
    /** カテゴリ選択時の処理 */
    onCategoryOk(): void;
}

/** スキルシーン */
declare interface Scene_Skill extends Scene_ItemBase {
    /** スキルタイプウィンドウ */
    _skillTypeWindow: Window_SkillType;
    /** スキルリストウィンドウ */
    _itemWindow: Window_SkillList;
    /** スキルタイプウィンドウの作成 */
    createSkillTypeWindow(): void;
    /** リストウィンドウ内でカーソルが乗っている項目 */
    item(): Data_Skill;
    /** スキルタイプウィンドウ領域 */
    skillTypeWindowRect(): Rectangle;
    /** アイテムウィンドウ領域 */
    itemWindowRect(): Rectangle;
    /** スキルタイプ選択時の処理 */
    commandSkill(): void;
    /** 各ウィンドウのアクターを再設定する */
    refreshActor(): void;
    /** アイテム選択時の処理 */
    onItemOk(): void;
    /** SE */
    playSeForItem(): void;
}

/** オプション設定シーン */
declare interface Scene_Options extends Scene_MenuBase {
    /** オプションウィンドウ */
    _optionsWindow: Window_Options;
    /** オプションウィンドウ作成 */
    createOptionsWindow(): void;
    /** オプションウィンドウ領域 */
    optionsWindowRect(): Rectangle;
}
