module.exports = {
    "base": "/docs/",
    title: 'VuePress',
    description: 'Just playing around',
    head: [
        ['link', { rel: 'icon', href: '/assets/img/icon.webp' }]
    ],
    plugins: ['@vuepress/nprogress', '@vuepress/active-header-links', '@vuepress/back-to-top', '@vuepress/medium-zoom', ['vuepress-plugin-code-copy', true]],
    themeConfig: {
        logo: '/assets/img/logo.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' },
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                    { text: 'Chinese', link: '/language/chinese/' },
                    { text: 'Japanese', link: '/language/japanese/' },
                ]
            }
        ],
        sidebar: 'auto',
        displayAllHeaders: true, // 默认值：false
        lastUpdated: 'Last Updated', // string | boolean
    }
}