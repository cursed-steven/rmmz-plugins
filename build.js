/*=============================================================================
 build.js
----------------------------------------------------------------------------
 Doc : https://www.electron.build/configuration/configuration
----------------------------------------------------------------------------
 Version
 1.0.0 2023/04/27 based on build-win.js (by triacontane)
 1.1.0 2024/05/04 asar無効化、除外ファイル設定
----------------------------------------------------------------------------
 [Twitter]: https://twitter.com/cursed_steven/
=============================================================================*/

const builder = require("electron-builder");
const outputPath = process.argv[2] || __dirname + "/dist";

builder.build({
    config: {
        productName: "cursed-electron-sample",
        appId: "com.electron.${name}",
        copyright:
            "© 2024 cursed_steven, © 2020 Gotcha Gotcha Games Inc./YOJI OJIMA",
        mac: {
            target: {
                target: "dir",
                arch: ["x64", "arm64"],
            },
            category: "public.app-category.games",
        },
        asar: false,
        directories: {
            output: outputPath,
        },
        files: [
            "!node_modules/",
            "!src/",
            "!zips/",
            "!*.js",
            "!*.sh",
            "!*.yaml",
            "!tsconfig.json",
            "!project/game.rmmzproject",
            "!project/package.json",
            "!project/save",
        ],
    },
});
