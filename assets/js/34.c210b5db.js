(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{391:function(t,e,r){"use strict";r.r(e);var a=r(26),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h3",{attrs:{id:"路由"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#路由"}},[t._v("#")]),t._v(" 路由")]),t._v(" "),r("p",[t._v("使用react-router-dom")]),t._v(" "),r("h3",{attrs:{id:"安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("yarn add react-router-dom\n\n")])])]),r("h3",{attrs:{id:"使用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),r("p",[t._v("修改src目录结构：(个人习惯)")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("├─assets\n│  └─css\n├─common\n├─components\n├─locales\n├─router\n└─views\n    ├─home\n    └─login\n\n")])])]),r("h3",{attrs:{id:"修改路由文件-用法参考官方文档"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#修改路由文件-用法参考官方文档"}},[t._v("#")]),t._v(" 修改路由文件（用法参考官方文档）")]),t._v(" "),r("p",[t._v("router 文件目录组要分为 index.js 和其他功能路由文件")]),t._v(" "),r("p",[t._v("router/index.js")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('import React from "react";\nimport {\n    HashRouter as Router,\n    Switch,\n    Route,\n} from "react-router-dom";\n\n//请按目录创建相应的文件\nimport Home from \'../views/home/home\' \nimport Login from \'../views/login/login\'\n\n\n\nexport default function App() {\n    return (\n        <Router>\n            <Switch>\n                <Route path="/login" ><Login /></Route>\n                <Route path="/"><Home /></Route>\n            </Switch>\n        </Router>\n    );\n}\n\n\n')])])]),r("p",[t._v("index.js")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("import React from 'react';\nimport ReactDOM from 'react-dom';\nimport Router from './router/index'\nimport reportWebVitals from './reportWebVitals';\n\nReactDOM.render(\n  <React.StrictMode>\n    <Router />\n  </React.StrictMode>,\n  document.getElementById('root')\n);\n\n\n\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);