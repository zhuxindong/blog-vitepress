import { defineConfig } from 'vitepress';

export default defineConfig({
  // lang: 'en-US',
  title: "知了 – 朝闻道，夕可眠矣。",
  description: 'share.',

  lastUpdated: true,
  cleanUrls: true,

  head: [
    [
      'meta',
      {
        name: 'theme-color',
        content: '#3c8772',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        href: '/icon.ico',
      },
    ],
  ],

  markdown: {
    theme: 'github-dark-dimmed',
    headers: {
      level: [0, 0],
    },
  },

  themeConfig: {
    nav: nav(),
    sidebar: sidebarGuide(),

    // editLink: {
    //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
    //   text: 'Edit this page on GitHub',
    // },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/zhuxindong/blog-vitepress',
      },
    ],

    // footer: {
    //   message: 'Released under the MIT License.',
    //   copyright: 'Copyright © 2019-present Evan You',
    // },

    algolia: {
      appId: 'I51P96MLQS',
      apiKey: '606d697803378cb86ab5148b03e7c97d',
      indexName: 'jinyang79io',
    },

    // carbonAds: {

    // },
  },
});

function nav() {
  return [
    {
      text: 'Home',
      link: '/',
    },
    {
      text: 'ChatGPT',
      link: 'https://chat.zhile.in',
    },
    {
      text: 'Status',
      link: 'https://status.zhile.in',
    },
  ];
}

function sidebarGuide() {
  return [
    {
      text: 'CTF',
      collapsed: false,
      items: [
        { text: 'WEB', items: [
            {
              text: 'WEB-攻防世界wife_wife',
              link: '/blog/CTF/WEB/wife_wife',
            },
            {
              text: 'WEB-攻防世界very_easy_sql',
              link: '/blog/CTF/WEB/very_easy_sql',
            },
            {
              text: '攻防世界file-include之伪协议绕过',
              link: '/blog/CTF/WEB/file-include-bypass',
            },
            {
              text: 'WEB-攻防世界fileinclude-2',
              link: '/blog/CTF/WEB/fileinclude-2',
            },
            {
              text: 'WEB-攻防世界fileclude',
              link: '/blog/CTF/WEB/fileclude-phpfilter',
            },
            {
              text: 'WEB-攻防世界easyupload',
              link: '/blog/CTF/WEB/easyupload',
            },
          ] 
        },
        { text: 'CRYPTO', items: [/*  */] }
      ],
    },
    {
      text: 'Everyday',
      collapsed: false,
      items: [
        {
          text: 'Code Style',
          link: '/blog/everyday/code-style',
        },
        {
          text: 'AntD 4.x 升级记录',
          link: '/blog/everyday/antd-upgrade-log',
        },
        {
          text: 'React 项目 Vite 迁移记录',
          link: '/blog/everyday/vite-migrate-log',
        },
        {
          text: 'React 项目中引入 CDN',
          link: '/blog/everyday/cdn-in-react',
        },
        {
          text: '前端导入导出 by SheetJs',
          link: '/blog/everyday/util-xlsx',
        },
        {
          text: 'React Hook - useRequest',
          link: '/blog/everyday/use-request',
        },
        {
          text: 'Low-code 活动页平台实践',
          link: '/blog/everyday/low-code',
        },
        {
          text: 'React 中使用 SignalR',
          link: '/blog/everyday/signalr',
        },
        {
          text: 'Redux Toolkit 使用技巧',
          link: '/blog/everyday/redux-toolkit',
        },
      ],
    },
    {
      text: 'DevTools',
      collapsed: false,
      items: [
        {
          text: 'Development Tools',
          link: '/blog/devtools/development-tools',
        },
        {
          text: 'Tampermonkey Script',
          link: '/blog/devtools/tampermonkey-script',
        },
        {
          text: '远程唤醒连接 Mac',
          link: '/blog/devtools/remote-wake-mac',
        },
      ],
    },
    {
      text: 'CodeLife',
      collapsed: false,
      items: [
        // { text: "Markdown", link: "/guide/markdown" },
      ],
    },
  ];
}

function sidebarConfig() {
  return [
    {
      text: 'Config',
      items: [
        {
          text: 'Introduction',
          link: '/config/introduction',
        },
        {
          text: 'App Configs',
          link: '/config/app-configs',
        },
        {
          text: 'Theme Configs',
          link: '/config/theme-configs',
        },
        {
          text: 'Frontmatter Configs',
          link: '/config/frontmatter-configs',
        },
      ],
    },
  ];
}
