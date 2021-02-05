### 多语言

如果能确定项目不需要多语言（公司业务没有该场景，而不是产品经理说现在不需要），可以不用。
常见的react 多语言库有： react-intl, react-i18next; 本项目主要使用react-i18next（个人爱好）

### 安装

````
yarn add i18next react-i18next

````


### 使用
具体api 可参考官网  
创建文件：i18n.js 、en_us.js 、zh_cn.js   
  
```
├─common
├─components
├─locales
│  └─en_us.js
│  └─zh_cn.js
├─router
├─views
├─i18n.js    
├─index.js    

```
 
i18n.js     

````
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import PageZh from './locales/zh_cn'
import PageEn from './locales/en_us'
import store from "store";

// the translations
// (tip move them in a JSON file and import them)

// 多语言，会默认先读取 缓存，如没有，默认英文
const languageType = store.get('languageType') || 'zh';


const resources = {
    en: {
        translation: PageEn
    },
    zh: {
        translation: PageZh
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: languageType,

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;



````

en_us.js    

```
const en_us = {
    helloWorld: 'Hello World',
}

export default en_us;


```

zh_cn.js    

```
const zh_cn = {
    helloWorld: '你好',
}

export default zh_cn;




```

根目录 index.js 文件引入
```
import './i18n';

```


### 页面使用

```
<h3>{t('helloWorld')}</h3>

```





