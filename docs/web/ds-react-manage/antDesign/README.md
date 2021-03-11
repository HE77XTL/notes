### Ant Design

参看官网就行，语言切换留到redux, 如果不打算使用redux; 
可用events进行事件传递。

### 主题配置

参考官网，[在create-react-app 中修改主题](https://ant.design/docs/react/use-with-create-react-app-cn)
官网文档使用的是carco(试了一下确实更简单)，也可以使用 react-app-rewired 和 customize-cra 来自定义 create-react-app 的 webpack 配置。
[参考链接](https://juejin.cn/post/6844904016581754888)   

 #### 主要配置
 ````
 // 针对antd 实现按需打包：根据import来打包 (使用babel-plugin-import)
    fixBabelImports("import", {
        libraryName: "antd",
        libraryDirectory: "es",
        style: true,
    }),
    // 使用less-loader对源码重的less的变量进行重新制定
    // 如果报错请检查less 以及less-loader 版本； 项目使用版本为： less@4.0.0 less-load@7.2.1
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            modifyVars: {
                'primary-color': '#1DA57A',
                'btn-danger-color': '#1DA57A',
                '@menu-dark-bg': '#1DA57A'
            }
        },
    }),

```` 
                              

   

