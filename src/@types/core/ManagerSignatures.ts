/** データマネージャ */
class DataManager implements DataManager {
    /** グローバルデータ(オプション等)のセーブ */
    static saveGlobalInfo: () => void;
    /** セーブファイル情報の生成 */
    static makeSavefileInfo: () => SavefileInfo;
    /** セーブファイル名の作成 */
    static makeSavename: (savefileId: number) => string;
    /** 無効なグローバルデータ: (オプション等)の除去 */
    static removeInvalidGlobalInfo: () => void;
    /** グローバルデータ: (オプション等)のロード */
    static loadGlobalInfo: () => Promise<void>;
    /** 最新セーブファイルのID */
    static latestSavefileId: () => number;
    /** データベースのロード */
    static loadDatabase: () => void;
    /** 指定したセーブファイルをロードして内容をゲームオブジェクトにセットする */
    static loadGame: (arg0: any) => Promise<void>;
    /** セーブファイルがひとつでも存在するか */
    static isAnySavefileExists: () => boolean;
    /** セーブデータの抽出 */
    static extractSaveContents: (contents: SaveContents) => void;
    /** ニューゲーム用の準備 */
    static setupNewGame: () => void;
    /** 戦闘テストか */
    static isBattleTest: () => boolean;
    /** 指定オブジェクトのが防具か */
    static isArmor: (item: any) => boolean;
    /** 指定オブジェクトのが武器か */
    static isWeapon: (item: any) => boolean;
    /** 指定オブジェクトがアイテムか */
    static isItem: (item: any) => boolean;
    /** 指定したセーブファイルが存在するか */
    static savefileExists: (savefileId: number) => Promise<boolean>;
    /** 指定オブジェクトがスキルか */
    static isSkill: (skill: any) => boolean;
}

/** 画像マネージャ */
class ImageManager implements ImageManager {
    /** キャッシュ(key(url)-value(Bitmap)) */
    static _cache: any;
    /** 顔グラのロード */
    static loadFace: (filename: string) => Bitmap;
    /** ビットマップのロード */
    static loadBitmap: (folder: string, filename: string) => Bitmap;
    /** システム画像のロード */
    static loadSystem: (filename: string) => Bitmap;
    /** ピクチャのロード */
    static loadPicture: (path: string) => Bitmap;
    /** 敵画像のロード(FV) */
    static loadEnemy: (filename: string) => Bitmap;
    /** 敵画像のロード(SV) */
    static loadSvEnemy: (filename: string) => Bitmap;
    /** アイコン幅 */
    static iconWidth: number;
    /** アイコン高さ */
    static iconHeight: number;
    /** 顔グラ幅 */
    static faceWidth: number;
    /** 顔グラ高さ */
    static faceHeight: number;
}

/** コンフィグマネージャ */
class ConfigManager implements ConfigManager {
    /** ロード済みか */
    static _isLoaded: boolean;
    /** コマンド記憶するか */
    static commandRemember: any;
    /** ロード */
    static load: () => Promise<void>;
    /** 指定した設定を適用する */
    static applyData: (config: any) => any;
}

/** サウンドマネージャ */
class SoundManager implements SoundManager {
    /** ブザーを鳴らす */
    static playBuzzer: () => void;
    /** 敵にダメージを与えたときのSEを鳴らす */
    static playEnemyDamage: () => void;
    /** 装備脱着時SEを鳴らす */
    static playEquip: () => void;
    /** カーソル音を鳴らす */
    static playCursor: () => void;
    /** 決定SEを鳴らす */
    static playOk: () => void;
}

/** オーディオマネージャ */
class AudioManager implements AudioManager {
    /** 現在鳴っているBGM */
    static _currentBgm: BgmSetting;
    /** 現在鳴っているBGS */
    static _currentBgs: BgsSetting;
    /** 引数が現在演奏中のBGMか */
    static isCurrentBgm: (bgm: BgmSetting) => boolean;
    /** 引数が現在演奏中のBGSか */
    static isCurrentBgs: (bgs: BgsSetting) => boolean;
    /** SE再生 */
    static playStaticSe: (se: SeSetting) => void;
    /** BGM再生 */
    static playBgm: (bgm: BgmSetting, arg1: number) => void;
    /** BGMを続きから再生 */
    static replayBgm: (bgm: BgmSetting) => void;
    /** BGM停止 */
    static stopBgm: () => void;
    /** BGM保存 */
    static saveBgm: () => BgmSetting;
    /** BGS再生 */
    static playBgs: (bgs: BgsSetting, arg1: number) => void;
    /** BGSを続きから再生 */
    static replayBgs: (bgs: BgsSetting) => void;
    /** BGS停止 */
    static stopBgs: () => void;
    /** BGS保存 */
    static saveBgs: () => BgmSetting;
    /** ME再生 */
    static playMe: (arg0: MeSetting, arg1: number) => void;
}

/** プラグインマネージャ拡張 */
class PluginManagerEx {
    /** プラグインコマンドを登録する */
    static registerCommand: (
        currentScript: HTMLOrSVGScriptElement,
        arg1: string,
        arg2: (args: any) => void
    ) => void;
    /** 設定したプラグインパラメータを読み込む */
    static createParameter: (currentScript: HTMLOrSVGScriptElement) => any;
}

/** テキストマネージャ */
class TextManager {
    /** 合計経験値 */
    static expTotal: string;
    /** 経験値 */
    static exp: string;
    /** 次のレベルまでの経験値 */
    static expNext: string;
    /** レベル */
    static level: string;
    /** レベル(短縮) */
    static levelA: string;
    /** 経験値(短縮) */
    static expA: string;
    /** アイテム */
    static item: string;
    /** スキル */
    static skill: string;
    /** 通貨単位 */
    static currencyUnit: string;
    /** 痛恨の一撃 */
    static criticalToActor: string;
    /** 会心の一撃 */
    static criticalToEnemy: string;
    /** 大事なもの */
    static keyItem: string;
    /** 武器 */
    static weapon: string;
    /** 防具 */
    static armor: string;
    /** 装備変更 */
    static equip2: string;
    /** 最強装備 */
    static optimize: string;
    /** すべてはずす */
    static clear: string;
    /** セーブ */
    static save: string;
    /** オプション */
    static option: string;
    /** ゲーム終了 */
    static gameEnd: string;
    /** 常時ダッシュ */
    static alwaysDash: string;
    /** タッチUI */
    static touchUI: string;
    /** ニューゲーム */
    static newGame: string;
    /** コンティニュー */
    static continue_: string;
    /** オプション */
    static options: string;
    /** 先制 */
    static preemptive: string;
    /** 奇襲 */
    static surprise: string;
    /** 勝利 */
    static victory: string;
    /** 持っている数 */
    static possession: string;
    /** 売る */
    static sell: string;
}

/** シーンマネージャ */
class SceneManager {
    /** 取り扱い中のシーン */
    static _scene: Scene_Base;
    /** 直前のシーン */
    static _previousScene: Scene_Base;
    /** 直前のシーンのクラス */
    static _previousClass: Function;
    /** シーンスタック */
    static _stack: Function[];
    /** 指定したシーンに遷移する */
    static goto: (className: any) => void;
    /** 指定したシーンに遷移してスタックに追加する */
    static push: (className: any) => void;
    /** シーンスタックからpopしたシーンに戻る */
    static pop: () => void;
    /** いま指定シーンにいるか */
    static isCurrentScene: (sceneClass: any) => boolean;
    /** シーン変更中か */
    static isSceneChanging: () => boolean;
    /** シーンの準備 */
    static prepareNextScene: (param1: any, param2: any) => void;
    /** 主たる更新処理 */
    static updateMain: () => void;
    /** シーン終了時の処理 */
    static onSceneTerminate: () => void;
}

/** ストレージマネージャ */
class StorageIOManager {
    /** (ブラウザではなく)ローカルモード中か */
    static isLocalMode: () => boolean;
    /** ファイル名で指定したデータをロードして再生成したオブジェクトを返す */
    static loadObject: (savefileName: string) => Promise<any>;
    /** ファイル名で指定したZIPファイルをロードする */
    static loadZip: (savefileName: string) => Promise<any>;
    /** ZIPを解凍してJSONを取得する */
    static zipToJson: (zip: any) => Promise<any>;
    /** 型情報を含むJSONからオブジェクトを再生成する */
    static jsonToObject: (json: string) => any;
    /** JSONをZip圧縮する */
    static jsonToZip: (json: string) => void;
    /** ファイル名で指定したデータを保存する */
    static saveObject: (savefileName: string, data: any) => void;
    /** ローカルファイルシステムにセーブする */
    static saveToLocalFile: (savefileName: string, zip: any) => Promise<any>;
    /** ローカルファイルシステムからロードする */
    static loadFromLocalFile: (savefileName: string) => Promise<any>;
    /** ローカルストレージからロードする */
    static loadFromForage: (savefileName: string) => Promise<any>;
    /** 指定したファイルが存在するか */
    static exists: (savefileName: string) => Promise<boolean>;
    /** ローカルファイルシステムに指定のセーブファイルが存在するか */
    static localFileExists: (savefileName: string) => Promise<boolean>;
    /** ローカルストレージに指定のセーブファイルが存在するか */
    static forageExists: (savefileName: string) => Promise<boolean>;
    /** ローカルファイルシステムから指定のセーブファイルを削除する */
    static removeLocalFile: (savefileName: string) => void;
    /** ローカルファイルシステムにフォルダを作成する */
    static mkdir: (path: string) => void;
    /** ローカルファイルシステムにフォルダを作成する */
    static fsMkdir: (path: string) => void;
    /** ローカルファイルシステムの指定ファイルをリネームする */
    static mv: (oldPath: string, newPath: string) => void;
    /** ローカルファイルシステムの指定ファイルをリネームする */
    static fsRename: (oldPath: string, newPath: string) => void;
    /** ローカルファイルシステムの指定ファイルを削除する */
    static rm: (path: string) => void;
    /** ローカルファイルシステムの指定ファイルを削除する */
    static fsUnlink: (path: string) => void;
    /** ローカルファイルシステムの指定ファイルを読み込んで内容を返す */
    static readFile: (path: string) => Promise<string>;
    /** ローカルファイルシステムの指定ファイルを読み込んで内容を返す */
    static fsReadFile: (path: string) => Promise<string>;
    /** ローカルファイルシステムの指定ファイルに書き込む */
    static writeFile: (path: string, data: any) => void;
    /** ローカルファイルシステムの指定ファイルに書き込む */
    static fsWriteFile: (path: string, data: any) => void;
    /** ローカルファイルシステム上のセーブファイル用ディレクトリパス */
    static saveDir: () => Promise<any>;
    /** ローカルファイルシステム上のセーブファイルのパス */
    static savefilePath: (savefileName: string) => Promise<string>;
    /** セーブファイルのパス */
    static filePath: (saveName: string) => string;
    /** セーブファイルのディレクトリパス */
    static fileDirectoryPath: () => string;
    /** ローカルストレージのデータキー */
    static forageKey: (savefileName: string) => string;
    /** ローカルストレージのテストキー */
    static forageTestKey: () => string;
    /** ローカルストレージのキーの更新 */
    static updateForageKeys: () => any;
    /** ファイル削除 */
    static remove: (savename: string) => void;
    /** ローカルファイルシステム上のデータディレクトリパス */
    static dataDir: () => Promise<string>;
    /** ローカルファイルシステム上のデータファイルパス */
    static dataFilePath: (src: string) => Promise<string>;
    /** $dataXXXの保存 */
    static saveData: (data: any, src: string) => void;
    /** ZIP圧縮せずにローカルファイルに保存 */
    static saveToLocalFileNoZip: (data: any, src: string) => Promise<any>;
    /** ZIP圧縮せずにローカルストレージに保存 */
    static saveToForageNoZip: (data: any, src: string) => void;
    /** データファイル用ストレージキー */
    static forageKeyForData: (src: string) => string;
}

/** カラーマネージャ */
class ColorManager {
    /** システム色 */
    static systemColor: () => any;
    /** ダメージ表示色 */
    static damageColor: (type: DamageColorTypeValue) => string;
    /** ピンチ時表示色 */
    static crisisColor: () => any;
    /** パワーアップ表示色 */
    static powerUpColor: () => any;
    /** HP表示色 */
    static hpColor: (actor: Game_Actor) => any;
    /** MP消費色 */
    static mpCostColor: () => any;
    /** TP消費色 */
    static tpCostColor: () => any;
    /** 能力値変化色 */
    static paramchangeTextColor: (diffvalue: number) => any;
    /** ウィンドウを暗くする用カラー1 */
    static dimColor1: () => string;
    /** ウィンドウを暗くする用カラー2 */
    static dimColor2: () => string;
}

/** バトルマネージャ */
class BattleManager {
    /** 戦闘処理の種別 */
    static _phase: string;
    /** 行動主体 */
    static _subject: Game_Battler;
    /** 行動内容 */
    static _action: Game_Action;
    /** 行動の標的 */
    static _targets: Game_Battler[];
    /** ログウインドウ */
    static _logWindow: Window_BattleLog | null;
    /** 撤退したか */
    static _escaped: boolean;
    /** 入力中か */
    static _inputting: boolean;
    /** 勝利処理が開始しているか */
    static _victoryStart: boolean;
    /** 戦利品 */
    static _rewards: Reward;
    /** 保存済みのマップで鳴っていたBGM */
    static _mapBgm: BgmSetting;
    /** 保存済みのマップで鳴っていたBGS */
    static _mapBgs: BgsSetting;
    /** プロパティの初期化 */
    static initMembers: () => void;
    /** セットアップ */
    static setup: (
        troopId: number,
        canEscape: boolean,
        canLose: boolean
    ) => void;
    /** 操作中アクター */
    static actor: () => Game_Actor;
    /** エンカ前処理 */
    static onEncounter: () => void;
    /** 開始時メッセージ */
    static displayStartMessages: () => void;
    /** 勝利時メッセージ */
    static displayVictoryMessage: () => void;
    /** 撤退成功率 */
    static makeEscapeRatio: () => void;
    /** 入力中か */
    static isInputting: () => boolean;
    /** 入力中の行動 */
    static inputtingAction: () => Game_Action;
    /** 行動開始 */
    static startAction: () => void;
    /** 行動更新 */
    static updateAction: () => void;
    /** 行動終了 */
    static endAction: () => void;
    /** 行動呼び出し */
    static invokeAction: (subject: Game_Battler, target: Game_Battler) => void;
    /** 行動呼び出し(通常) */
    static invokeNormalAction: (
        subject: Game_Battler,
        target: Game_Battler
    ) => void;
    /** 戦闘終了 */
    static endBattle: (result: BattleResultValue) => void;
    /** 勝利時処理 */
    static processVictory: () => void;
    /** 撤退時処理 */
    static processEscape: () => void;
    /** 撤退成功時の処理 */
    static onEscapeSuccess: () => void;
    /** 戦闘BGMを鳴らす */
    static playBattleBgm: () => void;
    /** 撤退可能か */
    static canEscape: () => boolean;
    /** 撤退成功メッセージ */
    static displayEscapeSuccessMessage: () => void;
    /** ターン処理 */
    static processTurn: () => void;
    /** 戦闘中止 */
    static processAbort: () => void;
    /** 戦利品の獲得 */
    static gainRewards: () => void;
    /** 戦利品の表示 */
    static displayRewards: () => void;
    /** 経験値の表示 */
    static displayExp: () => void;
    /** 獲得金額の表示 */
    static displayGold: () => void;
    /** ドロップアイテムの表示 */
    static displayDropItems: () => void;
    /** BGM/BGS再開 */
    static replayBgmAndBgs: () => void;
}
