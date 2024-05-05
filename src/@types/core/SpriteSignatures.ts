class Sprite implements Sprite {
    initialize: any;
}
class Sprite_Clickable implements Sprite_Clickable {}
class Sprite_Character implements Sprite_Character {
    /**
     * キャラクタースプライト/コアスクリプト更新時には注意
     * ※コンストラクタを直接呼ぶケースでは必要
     */
    constructor(character: Game_CharacterBase) {}
}
class Sprite_Battler implements Sprite_Battler {}
class Sprite_Actor implements Sprite_Actor {
    /**
     * アクタースプライト/コアスクリプト更新時には注意
     * ※コンストラクタを直接呼ぶケースでは必要
     */
    constructor(actor: Game_Actor) {}
}
class Sprite_Enemy implements Sprite_Enemy {}
class Sprite_Button implements Sprite_Button {
    /**
     * ボタンスプライト/コアスクリプト更新時には注意
     * ※コンストラクタを直接呼ぶケースでは必要
     */
    constructor(buttonType: string) {}
}
class Sprite_Damage implements Sprite_Damage {}
class Sprite_StateIcon implements Sprite_StateIcon {}
class Spriteset_Base implements Spriteset_Base {}
class Spriteset_Map implements Spriteset_Map {}
class Spriteset_Battle implements Spriteset_Battle {}
