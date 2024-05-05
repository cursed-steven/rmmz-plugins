/** 座標なし領域 */
declare interface NoCoordRectangle {
    width: number;
    height: number;
}

/** セーブファイル情報 */
declare interface SavefileInfo {
    /** タイトル */
    title: string;
    /** キャラクター */
    characters: any;
    /** フェイス */
    faces: any;
    /** プレイ時間 */
    playtime: string;
    /** タイムスタンプ */
    timestamp: Date;
    /** マップ名 */
    mapName: string;
    /** 主人公名 */
    leaderName: string;
    /** 主人公職業 */
    leaderClass: string;
    /** 主人公レベル */
    leaderLevel: string;
}

/** テキスト描画状態 */
declare interface TextState {
    /** テキスト */
    text: string;
    /** インデックス */
    index: number;
    /** X座標 */
    x: number;
    /** Y座標 */
    y: number;
    /** 幅 */
    width: number;
    /** 高さ */
    height: number;
    /** 開始位置X座標 */
    startX: number;
    /** 開始位置Y座標 */
    startY: number;
    /** アラビア文字を含むか */
    rtl: boolean;
    /** バッファ */
    buffer: any;
    /** 描画中か */
    drawing: boolean;
    /** 出力幅 */
    outputWidth: number;
    /** 出力高さ */
    outputHeight: number;
}

/** テキスト揃え位置 */
declare type AlignValue = "left" | "center" | "right";

/** ウィンドウ背景タイプ */
declare type WindowBackgroundTypeValue = 0 | 1 | 2;

/** ウィンドウベース */
declare interface Window_Base {
    /** 操作可能か */
    active: boolean;
    /** 開いている途中か */
    _opening: boolean;
    /** 閉じている途中か */
    _closing: boolean;
    /** Dimmerスプライト */
    _dimmerSprite: any;
    /** 左上端のX座標 */
    x: number;
    /** 左上端のY座標 */
    y: number;
    /** 幅 */
    width: number;
    /** 高さ */
    height: number;
    /** 内側幅 */
    innerWidth: number;
    /** 内側高さ */
    innerHeight: number;
    /** 可視か */
    visible: boolean;
    /** 表示内容 */
    contents: any;
    /** 背景内容 */
    contentsBack: any;
    /** 内側余白 */
    padding: number;
    /** どの程度開いているか */
    openness: number;
    /** スキン */
    windowskin: Bitmap;
    /** 不透明度 */
    opacity: number;
    /** 背景の不透明度 */
    backOpacity: number;
    /** 枠が可視か(本来はWindow内に定義済) */
    frameVisible: boolean;
    /** スプライト配置スペース(本来はWindow内に定義済) */
    _clientArea: Sprite;
    /** PIXIの何か? */
    worldTransform: any;
    /** 初期化 */
    initialize(rect: Rectangle): void;
    /** スキンのロード */
    loadWindowskin(): void;
    /** 領域確認 */
    checkRectObject(rect: Rectangle): void;
    /** 移動 */
    move(x: number, y: number, width: number, height: number): void;
    /** パディングの更新 */
    updatePadding(): void;
    /** 背景透過度の更新 */
    updateBackOpacity(): void;
    /** トーン更新 */
    updateTone(): void;
    /** 内容の作成 */
    createContents(): void;
    /** 行高 */
    lineHeight(): number;
    /** 項目高さ */
    itemHeight(): number;
    /** 内側余白 */
    itemPadding(): number;
    /** 項目領域 */
    itemLineRect(index: number): Rectangle;
    /** テキスト描画領域 */
    baseTextRect(): Rectangle;
    /** 文字列が占める幅を返す */
    textWidth(text: string): number;
    /** 文字色変更 */
    changeTextColor(color: any): void;
    /** 文字色をリセットする */
    resetTextColor(): void;
    /** フォント設定をリセットする */
    resetFontSettings(): void;
    /** カーソル領域の設定(本来はWindowに定義済み) */
    setCursorRect(x: number, y: number, width: number, height: number): void;
    /** テキスト描画領域 */
    textSizeEx(text: string): NoCoordRectangle;
    /** 矩形の描画 */
    drawRect(x: number, y: number, width: number, height: number): void;
    /** アイコン描画 */
    drawIcon(iconIndex: number, x: number, y: number): void;
    /** アイテム等の描画 */
    drawItemName(
        item:
            | Data_Item
            | Data_Weapon
            | Data_Armor
            | Data_Skill,
        x: number,
        y: number,
        width: number
    ): void;
    /** 通貨の描画 */
    drawCurrencyValue(
        value: number,
        unit: string,
        x: number,
        y: number,
        width: number
    ): void;
    /** テキスト描画 */
    drawText(
        text: string,
        x: number,
        y: number,
        maxWidth: number,
        align?: AlignValue
    ): void;
    /** テキスト描画 */
    drawTextEx(text: string, x: number, y: number, width?: number): void;
    /** キャラクター描画 */
    drawCharacter(
        characterName: string,
        characterIndex: number,
        x: number,
        y: number
    ): void;
    /** テキスト描画状態を作成して返す */
    createTextState(
        text: string,
        x: number,
        y: number,
        width: number
    ): TextState;
    /** テキスト描画状態の更新(?) */
    flushTextState(textState: TextState): void;
    /** すべてのテキストを処理 */
    processAllText(textState: TextState): void;
    /** 文字表示の処理 */
    processCharacter(textState: TextState): void;
    /** エスケープ文字の処理 */
    processEscapeCharacter(code: string, textState: TextState): void;
    /** 通常描画 or グレイアウト描画 */
    changePaintOpacity(enabled: boolean): void;
    /** 背景タイプ設定 */
    setBackgroundType(type: WindowBackgroundTypeValue): void;
    /** 制御文字を変換した文字列を返す */
    convertEscapeCharacters(text: string): string;
    /** 開いているか(本来はWindowに定義済み) */
    isOpen(): boolean;
    /** 閉じているか */
    isClosed(): boolean;
    /** 表示する */
    show(): void;
    /** 隠す */
    hide(): void;
    /** 開く */
    open(): void;
    /** 閉じる */
    close(): void;
    /** 有効化する */
    activate(): void;
    /** 無効化する */
    deactivate(): void;
    /** 更新 */
    update(): void;
    /** 開く演出の更新 */
    updateOpen(): void;
    /** 閉じる演出の更新 */
    updateClose(): void;
}

declare interface Window_MapName extends Window_Base {
    refresh(): void;
}

/** メッセージウィンドウ */
declare interface Window_Message extends Window_Base {
    /** メッセージ表示位置 */
    _positionType: MessagePositionType;
    /** 所持金ウィンドウ */
    _goldWindow: Window_Gold;
    /** メンバ変数初期化 */
    initMembers(): void;
    /** 改行判断 */
    shouldBreakHere(textState: TextState): boolean;
    /** 位置の更新 */
    updatePlacement(): void;
    /** 位置の更新(戦闘結果用) */
    updatePlacementForBattleResult(): void;
    /** トリガされているか */
    isTriggered(): boolean;
}

/** スクロールウィンドウ */
declare interface Window_Scrollable extends Window_Base {
    /** 原点(?) */
    origin: any;
    /** X方向スクロール値 */
    _scrollX: number;
    /** Y方向スクロール値 */
    _scrollY: number;
    /** X方向スクロール基礎値(?) */
    _scrollBaseX: number;
    /** Y方向スクロール基礎値(?) */
    _scrollBaseY: number;
    /** スクロール時間 */
    _scrollDuration: number;
    /** スクロールブロック幅(?) */
    scrollBlockWidth(): number;
    /** スクロールブロック高さ(?) */
    scrollBlockHeight(): number;
    /** スクロール状態のクリア */
    clearScrollStatus(): void;
    /** X方向スクロール基礎値(?) */
    scrollBaseX(): number;
    /** Y方向スクロール基礎値(?) */
    scrollBaseY(): number;
    /** 内容の描画 */
    paint(): void;
}

/** 選択可能ウィンドウ */
declare interface Window_Selectable extends Window_Scrollable {
    /** 選択中のインデックス */
    _index: number;
    /** カーソル固定か */
    _cursorFixed: boolean;
    /** 全体選択か */
    _cursorAll: boolean;
    /** ヘルプウィンドウとのひもづけ */
    _helpWindow: Window_Help;
    /** ハンドラ */
    _handlers: any;
    /** ダブルタッチか */
    _doubleTouch: boolean;
    /** リピート可能か */
    _canRepeat: boolean;
    /** インデックス */
    index(): number;
    /** マウスで当たっている項目のインデックス */
    hitIndex(): number;
    /** 最大列数 */
    maxCols(): number;
    /** 最大項目数 */
    maxItems(): number;
    /** ウィンドウ内に表示する最大項目数 */
    numVisibleRows(): number;
    /** 行間の空白 */
    rowSpacing(): number;
    /** 列間の空白 */
    colSpacing(): number;
    /** 項目幅 */
    itemWidth(): number;
    /** 項目高さ */
    itemHeight(): number;
    /** 現在カーソルが乗っている項目 */
    item(): unknown;
    /** インデックスで指定した項目 */
    itemAt(index: number): unknown;
    /** インデックスで指定した項目の領域(外周含む) */
    itemRect(index: number): Rectangle;
    /** インデックスで指定した項目の領域 */
    itemLineRect(index: number): Rectangle;
    /** 項目の選択 */
    select(index: number): void;
    /** 先頭行の設定 */
    setTopRow(row: number): void;
    /** 項目の選択(スクロールアニメーションなし) */
    forceSelect(index: number): void;
    /** 項目を選択していない状態にする */
    deselect(): void;
    /** 項目を再選択してカーソル位置調整 */
    reselect(): void;
    /** 水平か */
    isHorizontal(): boolean;
    /** 項目の選択() */
    smoothSelect(index: number): void;
    /** アニメーションつきスクロール表示の更新 */
    updateSmoothScroll(): void;
    /** リスト作成 */
    makeItemList(): void;
    /** 項目背景を描画 */
    drawItemBackground(index: number): void;
    /** 項目の描画 */
    drawItem(index: number): void;
    /** 自身にヘルプウィンドウをひもづける */
    setHelpWindow(helpWindow: Window_Help): void;
    /** 自身にハンドラをひもづける */
    setHandler(symbol: string, method: any): void;
    /** カーソル上移動 */
    cursorUp(wrap: boolean): void;
    /** カーソル下移動 */
    cursorDown(wrap: boolean): void;
    /** カーソル移動時の処理 */
    processCursorMove(): void;
    /** タッチ入力の処理 */
    processTouch(): void;
    /** カーソルの更新 */
    refreshCursor(): void;
    /** カーソルの更新(全体選択) */
    refreshCursorForAll(): void;
    /** タッチ選択 */
    onTouchSelect(trigger: boolean): void;
    /** ヘルプの更新(呼び出しのみ) */
    callUpdateHelp(): void;
    /** ヘルプの更新 */
    updateHelp(): void;
    /** ヘルプウィンドウに項目をセットする */
    setHelpWindowItem(item: Data_Record): void;
    /** 更新 */
    refresh(): void;
    /** 全項目描画 */
    drawAllItems(): void;
    /** シンボルがハンドルされているか */
    isHandled(symbol: string): boolean;
    /** キー/ボタン押下時処理 */
    processHandling(): void;
    /** 項目選択時の処理 */
    processOk(): void;
    /** 選択中の項目が有効か */
    isCurrentItemEnabled(): boolean;
    /** キー・タッチ入力データの更新 */
    updateInputData(): void;
    /** 指定シンボルのハンドラをコール */
    callHandler(symbol: string): void;
    /** OKハンドラのコール */
    callOkHandler(): void;
    /** 決定SE */
    playOkSound(): void;
    /** NGSE */
    playBuzzerSound(): void;
    /** 選択項目が見えるところまでスクロール */
    ensureCursorVisible(smooth: boolean): void;
}

/** シーン名ウィンドウ */
declare interface Window_CommandName extends Window_Base {}

/** ヘルプウィンドウ */
declare interface Window_Help extends Window_Base {
    /** 更新 */
    refresh(): void;
    /** テキストの設定 */
    setText(text: string): void;
    /** クリア */
    clear(): void;
}

/** 所持金ウィンドウ */
declare interface Window_Gold extends Window_Selectable {
    /** 所持金 */
    value(): number;
}

/** 点数ウィンドウ(アイテム) */
declare interface Window_ShopNumber extends Window_Selectable {
    /** 売買するアイテム */
    _item: Data_Item | Data_Weapon | Data_Armor;
    /** 売買価格 */
    _price: number;
    /** 売買数量 */
    _number: number;
    /** 売買可能最大数 */
    _max: number;
    /** 通貨単位 */
    _currencyUnit: string;
    /** ボタンの作成 */
    createButtons(): void;
    /** 売買するアイテム名の描画 */
    drawCurrentItemName(): void;
    /** カーソル幅 */
    cursorWidth(): number;
    /** カーソルのX座標 */
    cursorX(): number;
    /** 合計額のY座標 */
    totalPriceY(): number;
    /** アイテム名のY座標 */
    itemNameY(): number;
    /** 乗算記号のX座標 */
    multiplicationSignX(): number;
    /** 合計額の描画 */
    drawTotalPrice(): void;
    /** 水平仕切り線の描画 */
    drawHorzLine(): void;
}
/** 店頭の商品 */
declare type ShopItem = [DataContainerIdValue, number, number, number];

/** 買い物ウィンドウ(アイテム) */
declare interface Window_ShopBuy extends Window_Selectable {
    /** 所持金 */
    _money: number;
    /** 表示データ */
    _data: (Data_Item | Data_Weapon | Data_Armor)[];
    /** 価格リスト */
    _price: number[];
    /** 品目リスト */
    _shopGoods: ShopItem[];
    /** 指定項目の現在価格 */
    price(item: Data_Record): number;
    /** 価格表示に使う幅 */
    priceWidth(): number;
    /** 購入可能か */
    isEnabled(item: Data_Record): boolean;
    /** 所持金のセット */
    setMoney(money: number): number;
    /** 品目のセットアップ */
    setupGoods(goods: ShopItem[]): void;
    /** 品目→アイテム変換 */
    goodsToItem(shopItem: ShopItem): Data_Item | Data_Weapon | Data_Armor;
    /** ステータスウィンドウのひもづけ */
    setStatusWindow(sw: Window_ShopStatus): void;
}

/** コマンドウィンドウ項目 */
declare interface WindowCommandItem {
    /** 名称 */
    name: string;
    /** シンボル */
    symbol: string;
    /** 有効/無効 */
    enabled: boolean;
    /** 追加識別子 */
    ext: string | number;
}

/** コマンドウィンドウ */
declare interface Window_Command extends Window_Selectable {
    /** コマンドリスト */
    _list: WindowCommandItem[];
    /** 選択中のコマンド */
    currentData(): WindowCommandItem;
    /** 選択中のコマンドのシンボル */
    currentSymbol(): string;
    /** 選択中のコマンドの追加識別子 */
    currentExt(): string | number;
    /** 項目の文字揃え */
    itemTextAlign(): AlignValue;
    /** コマンド追加 */
    addCommand(name: string, symbol: string, enabled: boolean, ext: any): void;
    /** シンボルで項目を選択 */
    selectSymbol(symbol: string): void;
    /** Extで項目を選択 */
    selectExt(ext: string | number): void;
    /** コマンドリスト作成 */
    makeCommandList(): void;
}

/** メニューコマンドウィンドウ */
declare interface Window_MenuCommand extends Window_Command {
    /** 項目テキストそろえ */
    itemTextAlign(): AlignValue;
    /** コマンドリスト作成 */
    makeCommandList(): void;
    /** メインコマンドの追加 */
    addMainCommands(): void;
    /** メインコマンドが使用可能か */
    areMainCommandsEnabled(): boolean;
    /** メイン以外のコマンドの追加 */
    addOtherCommands(): void;
    /** 最後に選択していたものを再選択 */
    selectLast(): void;
}

/** スキルタイプウィンドウ */
declare interface Window_SkillType extends Window_Command {
    /** 操作中のアクター */
    _actor: Game_Actor;
    /** 操作するアクターの設定 */
    setActor(actor: Game_Actor): void;
    /** スキルリストウィンドウのセット */
    setSkillWindow(wsl: Window_SkillList): void;
    /** スキルタイプリスト作成 */
    makeCommandList(): void;
    /** 最後に選択していた項目を再選択する */
    selectLast(): void;
}

/** 水平方向コマンドウィンドウ */
declare interface Window_HorzCommand extends Window_Command {}

/** ショップコマンドウィンドウ */
declare interface Window_ShopCommand extends Window_Command {
    /** 店舗種別名 */
    _shopTypeName: string;
    /** 店舗種別名の設定 */
    setShopTypeName(name: string): void;
}

/** 選択肢ウィンドウ */
declare interface Window_ChoiceList extends Window_Command {
    /** ひもづくメッセージウィンドウ */
    _messageWindow: Window_Message;
    /** キャンセルボタン */
    _cancelButton: Sprite_Button;
    /** X座標 */
    windowX(): number;
    /** Y座標 */
    windowY(): number;
    /** 幅 */
    windowWidth(): number;
    /** 高さ */
    windowHeight(): number;
    /** 最大行数 */
    maxLines(): number;
    /** キャンセルボタンの配置 */
    placeCancelButton(): void;
    /** キャンセルボタン作成 */
    createCancelButton(): void;
}

/** ゲージタイプ */
declare type GaugeType = "time" | "hp" | "mp" | "tp";

/** セーブ・ロード・セーブデータ削除用ウィンドウ */
declare interface Window_SavefileList extends Window_Selectable {
    /** モード */
    _mode: string;
    /** ファイル番号→インデックス */
    indexToSavefileId(index: number): number;
    /** タイトルの描画 */
    drawTitle(savefileId: number, x: number, y: number): void;
    /** 内容の描画 */
    drawContents(info: SavefileInfo, rect: Rectangle): void;
    /** パーティーキャラクターの描画 */
    drawPartyCharacters(info: SavefileInfo, x: number, y: number): void;
    /** キャラクターの描画 */
    drawCharacter(
        characterName: string,
        characterIndex: number,
        x: number,
        y: number
    ): void;
    /** プレイ時間の描画 */
    drawPlaytime(info: SavefileInfo, x: number, y: number, width: number): void;
}

/** ステータスウィンドウの基底クラス */
declare interface Window_StatusBase extends Window_Selectable {
    /** 追加スプライト */
    _additionalSprites: any;
    /** 更新 */
    refresh(): void;
    /** 顔グラフィックのロード */
    loadFaceImages(): void;
    /** アクター名の配置 */
    placeActorName(actor: Game_Actor, x: number, y: number): void;
    /** ゲージの配置 */
    placeGauge(actor: Game_Actor, type: GaugeType, x: number, y: number): void;
    /** 時間経過ゲージの配置 */
    placeTimeGauge(actor: Game_Actor, x: number, y: number): void;
    /** HP/MP/TPのみのゲージ表示 */
    placeBasicGauges(actor: Game_Actor, x: number, y: number): void;
    /** ゲージの高さ */
    gaugeLineHeight(): number;
    /** キャラグラ描画 */
    drawActorCharacter(actor: Game_Actor, x: number, y: number): void;
    /** アクター顔グラ描画→キャラグラ描画 */
    drawActorFace(
        actor: Game_Actor,
        x: number,
        y: number,
        width: number,
        height: number
    ): void;
    /** アクター名描画 */
    drawActorName(actor: Game_Actor, x: number, y: number, width: number): void;
    /** アクター職業描画 */
    drawActorClass(
        actor: Game_Actor,
        x: number,
        y: number,
        width: number
    ): void;
    /** アクターレベル描画 */
    drawActorLevel(actor: Game_Actor, x: number, y: number): void;
    /** アクターアイコン描画 */
    drawActorIcons(
        actor: Game_Actor,
        x: number,
        y: number,
        width: number
    ): void;
    /** 簡易ステータス描画 */
    drawActorSimpleStatus(actor: Game_Actor, x: number, y: number): void;
    /** アクターの装備スロット名 */
    actorSlotName(actor: Game_Actor, index: number): string;
}

// Window_MenuStatus
declare interface Window_MenuStatus extends Window_StatusBase {
    /** 隊列モードか */
    _formationMode: boolean;
    /** 保留中のインデックス(?) */
    _pendingIndex: number;
    /** 選択中のアクター */
    actor(index: number): Game_Actor;
    /** ??? */
    drawPendingItemBackground(index: number): void;
}

// Window_MenuActor
declare interface Window_MenuActor extends Window_MenuStatus {}

/** ショップステータスウィンドウ */
declare interface Window_ShopStatus extends Window_StatusBase {
    /** 描画対象武器/防具 */
    _item: Data_Weapon | Data_Armor;
    /** ページインデックス(?) */
    _pageIndex: number;
    /** 所持数の描画 */
    drawPossession(x: number, y: number): void;
    /** メンバーの装備の描画 */
    drawEquipInfo(x: number, y: number): void;
    /** 指定アクターの装備品の描画 */
    drawActorEquipInfo(x: number, y: number, actor: Game_Actor): void;
    /** 指定アクターの能力値変化の描画 */
    drawActorParamChange(
        x: number,
        y: number,
        actor: Game_Actor,
        item1: Data_Weapon | Data_Armor
    ): void;
    /** 指定装備タイプの現在の装備 */
    currentEquippedItem(
        actor: Game_Actor,
        etypeId: number
    ): Data_Weapon | Data_Armor;
    /** ステータス表示対象メンバー */
    statusMembers(): Game_Actor[];
    /** 表示対象能力値ID */
    paramId(): number;
}

/** アイテムカテゴリウィンドウ */
declare interface Window_ItemCategory extends Window_Command {
    /** アイテムウィンドウの参照 */
    _itemWindow: Window_ItemList;
    /** コマンドリスト作成 */
    makeCommandList(): void;
}

/** アイテムリストウィンドウ */
declare interface Window_ItemList extends Window_Selectable {
    /** カテゴリ */
    _category: string;
    /** ウィンドウで取り扱うデータのリスト */
    _data: (Data_Item | Data_Weapon | Data_Armor)[];
    /** ウィンドウに含まれるかどうか */
    includes(item: Data_Item | Data_Weapon | Data_Armor): boolean;
    /** 指定の項目が使用可能か */
    isEnabled(item: Data_Item | Data_Weapon | Data_Armor): boolean;
    /** アイテムの所持数の描画に使う幅 */
    numberWidth(): number;
    /** 表示対象とするカテゴリーを設定 */
    setCategory(category: string): void;
    /** アイテムの所持数の描画 */
    drawItemNumber(
        item: Data_Record,
        x: number,
        y: number,
        width: number
    ): void;
    /** 取り扱う武器・防具のリストを生成する */
    makeItemList(): void;
    /** 最後に選択していた項目を再選択する */
    selectLast(): void;
}

/** 売り物ウィンドウ(アイテム) */
declare interface Window_ShopSell extends Window_ItemList {}

/** スキルリストウィンドウ */
declare interface Window_SkillList extends Window_Selectable {
    /** 操作中のアクター */
    _actor: Game_Actor;
    /** スキルタイプID */
    _stypeId: number;
    /** カテゴリー */
    _category: string;
    /** スキルデータリスト */
    _data: Data_Skill[];
    /** 操作するアクターの設定 */
    setActor(actor: Game_Actor): void;
    /** ウィンドウに含まれるかどうか */
    includes(skill: Data_Skill): boolean;
    /** 最後に選択していた項目を再選択する */
    selectLast(): void;
    /** 選択中の項目 */
    item(): Data_Skill;
    /** 指定したインデックスにある項目 */
    itemAt(index: number): Data_Skill;
    /** コスト描画に使う幅 */
    costWidth(): number;
    /** スキルが使用可能か */
    isEnabled(skill: Data_Skill): boolean;
    /**
     * DNMC2_sceneSkill
     */
    /** 表示対象とするカテゴリーを設定 */
    setCategory(category: string): void;
    /** スキルコストの描画 */
    drawSkillCost(skill: Data_Skill, rect: Rectangle): void;
}

/** 装備コマンドウィンドウ */
declare interface Window_EquipCommand extends Window_HorzCommand {
    /** コマンドリスト */
    _list: WindowCommandItem[];
    /** コマンドリスト作成 */
    makeCommandList(): void;
}

/** 装備シーンステータス */
declare interface Window_EquipStatus extends Window_StatusBase {
    /** 表示対象アクター */
    _actor: Game_Actor;
    /** 装備変更後表示用一時アクター */
    _tempActor: Game_Actor;
    /** 表示対象のアクターを設定する */
    setActor(actor: Game_Actor): void;
    /** 8能力値描画 */
    drawAllParams(): void;
    /** 属性有効度描画 */
    drawAgainstElement(): void;
    /** パラメータ描画X座標の基準位置 */
    paramX(): number;
    /** パラメータ描画Y座標の基準位置 */
    paramY(index: number): number;
    /** 能力値描画に使う幅 */
    paramWidth(): number;
    /** →描画に使う幅 */
    rightArrowWidth(): number;
    /** →描画 */
    drawRightArrow(x: number, y: number): void;
    /** 経験値情報 */
    drawExpInfo(x: number, y: number): void;
    /** 経験値合計 */
    expTotalValue(): string;
    /** 次のレベルまでの経験値 */
    expNextValue(): string;
    /** 8能力値1件分の描画 */
    drawParam(x: number, y: number, paramId: ParamIdValue): void;
    /** 8能力値1件分の能力値名の描画 */
    drawParamName(x: number, y: number, paramId: ParamIdValue): void;
    /** 8能力値の装備分を除外した値の描画 */
    drawBaseParam(x: number, y: number, paramId: ParamIdValue): void;
    /** 8能力値の現在値の描画 */
    drawCurrentParam(x: number, y: number, paramId: ParamIdValue): void;
    /** 8能力値のうち装備分の値の描画 */
    drawEquipParam(x: number, y: number, paramId: ParamIdValue): void;
    /** 8能力値のうち新しい装備分の値の描画 */
    drawNewEquipParam(x: number, y: number, paramId: ParamIdValue): void;
    /** 8能力値の変更後の値の描画 */
    drawNewParam(x: number, y: number, paramId: ParamIdValue): void;
    /** 属性有効度の値に対応した文字を返す */
    elementRateSymbol(rate: number): string;
}

/** 装備品ストックウィンドウ */
declare interface Window_EquipItem extends Window_ItemList {
    /** 表示対象アクター */
    _actor: Game_Actor;
    /** スロットID */
    _slotId: number;
    /** 表示対象のアクターを設定する */
    setActor(actor: Game_Actor): void;
    /** ステータスウィンドウをひもづける */
    setStatusWindow(statusWindow: Window_EquipStatus): void;
    /** 表示項目 */
    item(): Data_Weapon | Data_Armor;
}

/** 装備スロットウィンドウ */
declare interface Window_EquipSlot extends Window_StatusBase {
    /** 表示対象アクター */
    _actor: Game_Actor;
    /** スロット名表示幅 */
    slotNameWidth(): number;
    /** 表示対象のアクターを設定する */
    setActor(actor: Game_Actor): void;
    /** ステータスウィンドウをひもづける */
    setStatusWindow(statusWindow: Window_EquipStatus): void;
    /** 装備品ストックウィンドウをひもづける */
    setItemWindow(itemWindow: Window_EquipItem): void;
    /** スロットが使用可能か */
    isEnabled(index: number): boolean;
}

/** 名前編集ウィンドウ */
declare interface Window_NameEdit extends Window_StatusBase {
    /** 名前 */
    _name: string;
    /** 文字幅 */
    charWidth(): number;
    /** 文字の描画 */
    drawChar(index: number): void;
}

/** オプションウィンドウ */
declare interface Window_Options extends Window_Command {
    /** オプション設定用コマンドの追加 */
    addGeneralOptions(): void;
    /** 音量設定用コマンドの追加 */
    addVolumeOptions(): void;
}

/** タイトルコマンドウィンドウ */
declare interface Window_TitleCommand extends Window_Command {
    /** 最後に選択していたものを再選択 */
    selectLast(): void;
}

/** パーティーコマンドウィンドウ */
declare interface Window_PartyCommand extends Window_Command {
    /** 立ち上げ */
    setup(): void;
}

/** 戦闘中のステータスウィンドウ */
declare interface Window_BattleStatus extends Window_StatusBase {
    /** インデックスで指定したアクター */
    actor(index: number): Game_Actor;
}

/** アクターコマンドウィンドウ */
declare interface Window_ActorCommand extends Window_Command {
    /** 操作中のアクター */
    _actor: Game_Actor;
    /** 操作中アクター */
    actor(): Game_Actor;
    /** コマンドリスト作成 */
    makeCommandList(): void;
    /** 最後に選択していた項目を再選択する */
    selectLast(): void;
}

/** 戦闘中アイテムウィンドウ */
declare interface Window_BattleItem extends Window_ItemList {}

/** 戦闘中アクター選択ウィンドウ */
declare interface Window_BattleActor extends Window_BattleStatus {}

/** 敵選択ウィンドウ */
declare interface Window_BattleEnemy extends Window_Selectable {}

/** バトルログウィンドウ */
declare interface Window_BattleLog extends Window_Base {
    /** 行ごとの表示内容 */
    _lines: string[];
    /** 表示内容追加 */
    push(methodName: string): void;
    /** 表示内容追加 */
    push(methodName: string, text: string): void;
    /** 表示内容追加 */
    push(methodName: string, battler: Game_Battler): void;
    /** 行動開始 */
    startAction(
        subject: Game_Battler,
        action: Game_Action,
        targets: Game_Battler[]
    ): void;
    /** メッセージスピード */
    messageSpeed(): number;
    /** ウェイト */
    wait(): void;
    /** 指定行の領域 */
    lineRect(index: number): Rectangle;
    /** 行動結果表示 */
    displayActionResults(subject: Game_Battler, target: Game_Battler): void;
    /** クリティカル表示 */
    displayCritical(target: Game_Battler): void;
    /** ダメージ表示 */
    displayDamage(tagret: Game_Battler): void;
    /** ついているステートの表示 */
    displayAffectedStatus(target: Game_Battler): void;
    /** 行動失敗表示 */
    displayFailure(target: Game_Battler): void;
    /** クリティカル表示 */
    displayCriticalEx(subject: Game_Battler, target: Game_Battler): void;
    /** 一行テキスト描画 */
    drawLineText(index: number): void;
    /** 更新 */
    refresh(): void;
}
