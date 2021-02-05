### 基于 react-app-rewired 扩展webpack 默认配置。 

使用create-react-app 将能得到 CRA 提供的配置“保证”（比自己从头搭建，解决各个包之间的版本依赖靠谱），
但是我们仍然想要修改webpack 配置，根据项目做一些自定义修改。


### 安装

`````
yarn add react-app-rewired customize-cra --dev

yarn add less less-loader --dev // 本项目使用了less

yarn add cross-env --dev // 设置环境变量
yarn add store // 缓存处理库

`````   

### 根目录创建 config-overrides.js 文件
````
const {override, fixBabelImports, addLessLoader, addWebpackAlias} = require("customize-cra");
const path = require("path");

module.exports = override(
    // 针对antd 实现按需打包：根据import来打包 (使用babel-plugin-import)
    fixBabelImports("import", {
        libraryName: "antd",
        libraryDirectory: "es",
        style: 'css', //自动打包相关的样式 默认为 style:'css'
    }),
    // 使用less-loader对源码重的less的变量进行重新制定
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            modifyVars: {
                '@primary-color': '#ffaa22',
                '@link-color': '#ffaa22'
            }
        },
    }),
    //增加路径别名的处理
    addWebpackAlias({
        '@': path.resolve('./src')
    })
);


````



#### 修改 package.json  
````
"scripts": {
    "start": "cross-env REACT_APP_ENV=development react-app-rewired start",
    "build": "cross-env REACT_APP_ENV=production GENERATE_SOURCEMAP=false react-app-rewired build",
    "stage": "cross-env REACT_APP_ENV=stage react-app-rewired build",
}
  
````




