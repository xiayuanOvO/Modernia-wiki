/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import {defineNavbarConfig} from 'vuepress-theme-plume'

export default defineNavbarConfig([
    {
        text: '指南',
        items: [
            {
                text: '开始',
                link: '/guide/start.md'
            },
            {
                text: '种族',
                link: '/guide/race.md'
            }
        ]
    },
    {
        text: '更新日志',
        link: '/changelog/'
    }
    // {text: '笔记', link: '/notes/demo/'},
    // { text: '首页', link: '/' },
    // {text: '博客', link: '/blog/'},
    // { text: '标签', link: '/blog/tags/' },
    // { text: '归档', link: '/blog/archives/' },
])
