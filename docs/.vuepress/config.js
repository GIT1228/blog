module.exports = {
    title: '热心市民的博客',
    description: '努力成为一名优秀的前端开发工程师',
    themeConfig: {
        nav: [
            { text: "主页", link: "/" },
            {
                text: "前端基础",
                items: [
                    {
                        text: 'js',
                        link: '/web/js/'
                    },
                    {
                        text: 'css',
                        link: '/web/css/'
                    },
                    {
                        text: '浏览器',
                        link: '/web/chrome/'
                    }
                ]
            },
            {
                text: "前端框架",
                items: [
                    {
                        text: 'vue',
                        link: '/framework/vue/'
                    },
                    {
                        text: 'react',
                        link: '/framework/react/'
                    },
                    {
                        text: 'qiankun',
                        link: '/framework/qiankun/'
                    }
                ]
            },
            { text: "关于我", link: "/about/" },
            { text: "github", link: "https://github.com/GIT1228" },
        ],
        sidebar: 'auto'
    }
}
