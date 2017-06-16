# HappyFunTimes x Cocos Creator 

## 文件说明

```
-assets/scripts/lib
    |-hft.js HappyFunTimes 客户端库
    |-sample-ui.js HappyFunTimes 界面相关，需要设为插件导入
-build/web-mobile Creator 构建目标，请勿更换构建目标路径
-build-templates/web-mobile/main.js 修改了资源索引的路径
-css/ HappyFunTimes 界面 css
-node_modules/ HappyFunTimes 服务端库和其他功能性模块
-scripts/controller.js 控制界面脚本
-controller.html 控制界面
-game.html 主界面
-main.js Electron 启动入口
-project.json 模块信息，启动命令
```

## 使用流程

1. `npm start` 运行 electron 并启动主游戏界面
2. 在手机端访问 `happyfuntimes.net`

## 开发流程

1. 在 creator 中开发游戏
2. 构建到 `build/web-mobile`
3. 运行 HappyFunTimes 服务端即可显示最新的游戏版本
