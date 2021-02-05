### 路由

使用react-router-dom

### 安装
````
yarn add react-router-dom

````


### 使用

修改src目录结构：(个人习惯)
````
├─assets
│  └─css
├─common
├─components
├─locales
├─router
└─views
    ├─home
    └─login

````

### 修改路由文件（用法参考官方文档）
router 文件目录组要分为 index.js 和其他功能路由文件

router/index.js
`````
import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

//请按目录创建相应的文件
import Home from '../views/home/home' 
import Login from '../views/login/login'



export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/login" ><Login /></Route>
                <Route path="/"><Home /></Route>
            </Switch>
        </Router>
    );
}


`````

index.js

````
import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router/index'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);



````





