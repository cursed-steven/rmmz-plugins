interface Window {
    electron: electron;
}

interface electron {
    ipcRenderer: Electron.IpcRenderer;
}

declare interface Scene_Boot {
    /** タイトル画面の省略 */
    cutSceneTitle(): void;
    /** ニューゲーム開始に直行 */
    goToNewGame(): void;
    /** 最新セーブデータによるゲーム開始に直行 */
    goToLatestContinue(): Promise<boolean>;
}

/** スイッチのコンソール表示用の型 */
declare interface consoleSObj {
    /** 管理用スイッチ表示名 */
    name: string;
    /** 値 */
    value: boolean;
}

/** 変数のコンソール表示用の型 */
declare interface consoleVObj {
    /** 管理用変数表示名 */
    name: string;
    /** 値 */
    value: any | null;
}
