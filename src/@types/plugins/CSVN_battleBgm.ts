/** 戦闘BGM/BGS */
export interface BattleBgm {
    /** 敵グループID */
    troopId: number;
    /** BGM */
    bgm: BgmSetting;
    /** BGS */
    bgs: BgsSetting;
}
