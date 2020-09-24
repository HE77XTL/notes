### What is Bit?

Bit is an open-source cli tool for collaborating on isolated components across projects and repositories.
Use Bit to distribute discrete components from a design library or a project into a standalone reusable package and utilize it across applications.
You can set up your own server for components collaboration, or use the bit.dev cloud hosting for private and public components sharing.

更详细的介绍可以查看[官网](https://bit.dev/)

### 实际应用场景

其实作为一个小公司小团队，大多数时候用的是常见的UI库，并没有自己的组件库。之所以查找组件管理工具，是基于实际项目中，大量的web 与 webview 相同页面需要进行管理。
公司运营的几个项目，都是一套设计稿，三套界面（安卓、IOS、H5），且原生应用中会接入大量的webview 页面。因此需要对web 和webview 两个项目中相同的功能页面进行抽象管理，避免同一个页面维护两套代码。


### Why Bit

跨项目复用前端代码的方法常见的有：复制粘贴、Git sub-module、公共库、Lerna、 NPM with / without Lerna、Bit等。
大多数对于组件的独立完整性要求较高。而Bit 的组件依赖管理以及对现有项目的影响，使用成本相对来说，更适合团队的需求。
且Bit 提供了本地服务（虽然相比线上收费功能简陋了很多，但以足够使用）



