import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "临床检验高质量发展工作平台",
  description: "帮助中心",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '省EQA', link: '/eqa' },
      { text: '临床检验结果互认质量评价平台', link: '/cqb' },
      { text: '质控品订购系统', link: '/sps' },
      { text: '更新日志', link: '/changelog.md' },
     
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      
    ]
  }
})
