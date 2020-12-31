const path = require("path");

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    title: 'heds',
    description: '个人笔记，当个备忘录用',
    base: '/notes/',
    themeConfig: {
        logo: '/logo.jpg',
        nav: [
            {text: '首页', link: '/'},
            {text: '前端', link: '/web/'},
            {text: '后端', link: '/server/'},
            {text: '杂记', link: '/myNotes/'},
            {text: 'External', link: 'https://google.com'},
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                    {text: 'Chinese', link: '/language/chinese/'},
                    {text: 'Japanese', link: '/language/japanese/'}
                ]
            }
        ],
        displayAllHeaders: true, // 默认值：false
        sidebar: {
            '/web/': [
                {
                    title: 'Bit 组件管理',   // 必要的
                    path: '',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                    collapsable: true, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        {
                            title: '介绍',
                            path: '/web/bit/',
                        },
                        {
                            title: '安装',
                            path: '/web/bit/install/',
                        },
                    ]
                },
            ],

            '/server/': [
                {
                    title: 'Group 5',   // 必要的
                    path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        '/'
                    ]
                },
                {
                    title: 'Group 2',
                    children: [ /* ... */],
                    initialOpenGroupIndex: -1 // 可选的, 默认值是 0
                }
            ],
            '/myNotes/': [
                {
                    title: '杂记',
                    path: '',
                    initialOpenGroupIndex: 0, // 可选的, 默认值是 0
                    children: [
                        {
                            title: 'git 常用命令',
                            path: '/myNotes/git/',
                        },
                    ]
                }
            ],
            // fallback
            '/': [
                '',        /* / */
                'contact', /* /contact.html */
                'about'    /* /about.html */
            ]
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                'assets': resolve('assets'),
                'public': resolve('public')
            }
        }
    },
    plugins: [['vuepress-plugin-code-copy', true]]
    // plugins: {
    //     "vuepress-plugin-auto-sidebar": {}
    // }
}


