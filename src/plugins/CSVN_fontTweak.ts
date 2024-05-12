/*:ja
 * @target MZ
 * @plugindesc 数字以外のフォントにも数字用フォントを適用
 * @author cursed_steven
 * @base PluginCommonBase
 * @orderAfter PluginCommonBase
 * @preserve
 *
 * @help
 * RPG Maker MZ - CSVN_fontTweak.ts (transpiled)
 * ----------------------------------------------------------------------------
 * (C)2023 cursed_steven
 * This software is released under the MIT License.
 * http://opensource.org/licenses/mit-license.php
 * ----------------------------------------------------------------------------
 * Version
 * 1.0.0  2023/07/09 初版 (based on CSVN_setMoreNumberFontFace.js)
 * 1.1.0  2024/05/12 公開用に一部修正
 * ----------------------------------------------------------------------------
 * [Twitter]: https://twitter.com/cursed_steven
 *
 * 戦闘中のダメージ表示だけでなく、戦闘以外のシーンの各ウィンドウ中の文字描画
 * 箇所のうち、英数字にすべて数字フォントを適用します。
 *
 * @param outlineWidth
 * @text アウトライン幅
 * @type number
 * @default 3
 */

const CSVN_fontTweak: PluginConsts = {
    params: PluginManagerEx.createParameter(document.currentScript),
    ipcRenderer: null,
};

//-----------------------------------------------------------------------------
// Bitmap

const _Bitmap_initialize_ftw = Bitmap.prototype.initialize;
Bitmap.prototype.initialize = function (
    this: Bitmap,
    width: number,
    height: number
): void {
    _Bitmap_initialize_ftw.call(this, width, height);
    this.outlineColor = "rgba(0, 0, 0, 1)";
    this.outlineWidth = CSVN_fontTweak.params.outlineWidth;
};

//-----------------------------------------------------------------------------
// Window_Base

const _Window_Base_drawText_ftw = Window_Base.prototype.drawText;
Window_Base.prototype.drawText = function (
    this: Window_Base,
    text: string,
    x: number,
    y: number,
    maxWidth: number,
    align: AlignValue
): void {
    this.contents.fontFace = $gameSystem.numberFontFace();
    _Window_Base_drawText_ftw.call(this, text, x, y, maxWidth, align);
};

const _Window_Base_flushTextState_ftw = Window_Base.prototype.flushTextState;
Window_Base.prototype.flushTextState = function (
    this: Window_Base,
    textState: TextState
): void {
    if (
        this.contents.fontFace !== $gameSystem.mainFontFace() &&
        this.contents.fontFace !== $gameSystem.numberFontFace()
    ) {
        // FontLoad.js 対策
        // どちらでもないフォントが指定されている場合は何もしない
    } else {
        this.contents.fontFace = $gameSystem.numberFontFace();
    }

    _Window_Base_flushTextState_ftw.call(this, textState);
};
