class Window_Base implements Window_Base {
    /**
     * ウィンドウベース/コアスクリプト更新時には注意
     * ※コンストラクタを直接呼ぶケースでは必要
     */
    constructor(rect: Rectangle) {}
}

class Window_MapName extends Window_Base {}
class Window_Message implements Window_Message {}
class Window_Scrollable implements Window_Scrollable {
    /**
     * スクロール可能ウィンドウ/コアスクリプト更新時には注意
     * ※コンストラクタを直接呼ぶケースでは必要
     */
    constructor(rect: Rectangle) {}
}
class Window_Selectable implements Window_Selectable {
    /**
     * 選択可能ウィンドウ/コアスクリプト更新時には注意
     * ※コンストラクタを直接呼ぶケースでは必要
     */
    constructor(rect: Rectangle) {}
}
class Window_Help implements Window_Help {}
class Window_Gold implements Window_Gold {
    /**
     * 所持金ウィンドウ/コアスクリプト更新時には注意
     * ※コンストラクタを直接呼ぶケースでは必要
     */
    constructor(rect: Rectangle) {}
}
class Window_ShopNumber implements Window_ShopNumber {
    /**
     * 売買点数ウィンドウ/コアスクリプト更新時には注意
     * ※コンストラクタを直接呼ぶケースでは必要
     */
    constructor(rect: Rectangle) {}
}
class Window_ShopSell implements Window_ShopSell {
    /**
     * 売り物ウィンドウ/コアスクリプト更新時には注意
     * ※コンストラクタを直接呼ぶケースでは必要
     */
    constructor(rect: Rectangle) {}
}
class Window_ShopBuy implements Window_ShopBuy {
    /**
     * 買い物ウィンドウ/コアスクリプト更新時には注意
     * ※コンストラクタを直接呼ぶケースでは必要
     */
    constructor(rect: Rectangle) {}
}
class Window_Command implements Window_Command {
    /**
     * コマンドウィンドウ/コアスクリプト更新時には注意
     * ※コンストラクタを直接呼ぶケースでは必要
     */
    constructor(rect: Rectangle) {}
}
class Window_MenuCommand implements Window_MenuCommand {
    /**
     * メニューコマンドウィンドウ/コアスクリプト更新時には注意
     * ※コンストラクタを直接呼ぶケースでは必要
     */
    constructor(rect: Rectangle) {}
}
class Window_SkillType implements Window_SkillType {
    /**
     * スキルタイプウィンドウ/コアスクリプト更新時には注意
     * ※コンストラクタを直接呼ぶケースでは必要
     */
    constructor(rect: Rectangle) {}
}
class Window_HorzCommand implements Window_HorzCommand {}
class Window_ShopCommand implements Window_ShopCommand {
    /**
     * ショップコマンドウィンドウ/コアスクリプト更新時には注意
     * ※コンストラクタを直接呼ぶケースでは必要
     */
    constructor(rect: Rectangle) {}
}
class Window_ChoiceList implements Window_ChoiceList {}
class Window_SavefileList implements Window_SavefileList {}
class Window_StatusBase implements Window_StatusBase {
    /**
     * ステータスウィンドウベース/コアスクリプト更新時には注意
     * ※コンストラクタを直接呼ぶケースでは必要
     */
    constructor(rect: Rectangle) {}
}
class Window_MenuStatus implements Window_MenuStatus {
    /**
     * メニューステータスウィンドウ/コアスクリプト更新時には注意
     * ※コンストラクタを直接呼ぶケースでは必要
     */
    constructor(rect: Rectangle) {}
}
class Window_MenuActor implements Window_MenuActor {}
class Window_ShopStatus implements Window_ShopStatus {
    /**
     * ショップステータスウィンドウ/コアスクリプト更新時には注意
     * ※コンストラクタを直接呼ぶケースでは必要
     */
    constructor(rect: Rectangle) {}
}
class Window_ItemCategory implements Window_ItemCategory {
    /**
     * アイテムカテゴリウィンドウ/コアスクリプト更新時には注意
     * ※コンストラクタを直接呼ぶケースでは必要
     */
    constructor(rect: Rectangle) {}
}
class Window_ItemList implements Window_ItemList {
    /**
     * アイテムリストウィンドウ/コアスクリプト更新時には注意
     * ※コンストラクタを直接呼ぶケースでは必要
     */
    constructor(rect: Rectangle) {}
}
class Window_SkillList implements Window_SkillList {
    /**
     * スキルリストウィンドウ/コアスクリプト更新時には注意
     * ※コンストラクタを直接呼ぶケースでは必要
     */
    constructor(rect: Rectangle) {}
}
class Window_EquipCommand implements Window_EquipCommand {
    /**
     * 装備コマンドウィンドウ/コアスクリプト更新時には注意
     * ※コンストラクタを直接呼ぶケースでは必要
     */
    constructor(rect: Rectangle) {}
}
class Window_EquipStatus implements Window_EquipStatus {
    /**
     * 装備ステータスウィンドウ/コアスクリプト更新時には注意
     * ※コンストラクタを直接呼ぶケースでは必要
     */
    constructor(rect: Rectangle) {}
}
class Window_EquipItem implements Window_EquipItem {
    /**
     * 装備アイテムウィンドウ/コアスクリプト更新時には注意
     * ※コンストラクタを直接呼ぶケースでは必要
     */
    constructor(rect: Rectangle) {}
}
class Window_EquipSlot implements Window_EquipSlot {
    /**
     * 装備スロットウィンドウ/コアスクリプト更新時には注意
     * ※コンストラクタを直接呼ぶケースでは必要
     */
    constructor(rect: Rectangle) {}
}
class Window_Options implements Window_Options {
    /**
     * オプションウィンドウ/コアスクリプト更新時には注意
     * ※コンストラクタを直接呼ぶケースでは必要
     */
    constructor(rect: Rectangle) {}
}
class Window_TitleCommand implements Window_TitleCommand {
    /**
     * タイトルコマンドウィンドウ/コアスクリプト更新時には注意
     * ※コンストラクタを直接呼ぶケースでは必要
     */
    constructor(rect: Rectangle) {}
}
class Window_PartyCommand implements Window_PartyCommand {
    /**
     * 戦闘パーティーコマンドウィンドウ/コアスクリプト更新時には注意
     * ※コンストラクタを直接呼ぶケースでは必要
     */
    constructor(rect: Rectangle) {}
}
class Window_BattleStatus implements Window_BattleStatus {}
class Window_ActorCommand implements Window_ActorCommand {
    /**
     * 戦闘アクターコマンドウィンドウ/コアスクリプト更新時には注意
     * ※コンストラクタを直接呼ぶケースでは必要
     */
    constructor(rect: Rectangle) {}
}
class Window_BattleItem implements Window_BattleItem {
    /**
     * 戦闘アクターコマンドウィンドウ/コアスクリプト更新時には注意
     * ※コンストラクタを直接呼ぶケースでは必要
     */
    constructor(rect: Rectangle) {}
}
class Window_BattleActor implements Window_BattleActor {}
class Window_BattleEnemy implements Window_BattleEnemy {}
class Window_BattleLog implements Window_BattleLog {}
class Window_NameEdit implements Window_NameEdit {}
