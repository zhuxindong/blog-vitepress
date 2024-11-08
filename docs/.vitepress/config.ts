import { defineConfig } from 'vitepress';
import mathjax3 from 'markdown-it-mathjax3';

const customElements = ['mjx-container'];

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
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css', crossorigin: '' }],

  ],

  
  markdown: {
    theme: 'github-dark-dimmed',
    headers: {
      level: [0, 0],
    },
    config: (md) => {
      md.use(mathjax3)
    },
  },

  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag)
      }
    }
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
              text: 'WEB-wife_wife',
              link: '/blog/CTF/WEB/wife_wife',
            },
            {
              text: 'WEB-very_easy_sql',
              link: '/blog/CTF/WEB/very_easy_sql',
            },
            {
              text: 'WEB-file-include之伪协议绕过',
              link: '/blog/CTF/WEB/file-include-bypass',
            },
            {
              text: 'WEB-fileinclude-2',
              link: '/blog/CTF/WEB/fileinclude-2',
            },
            {
              text: 'WEB-fileclude',
              link: '/blog/CTF/WEB/fileclude-phpfilter',
            },
            {
              text: 'WEB-攻防世界easyupload',
              link: '/blog/CTF/WEB/easyupload',
            },
            {
              text: 'WEB-phpurldecode',
              link: '/blog/CTF/WEB/php2-urldecode',
            },
            {
              text: 'WEB-BUUCTF EasySQL1',
              link: '/blog/CTF/WEB/BUUCTF EasySQL1',
            },
            {
              text: 'WEB-BUUCTF easy-sql-inj',
              link: '/blog/CTF/WEB/BUUCTF easy-sql-inj',
            },
            {
              text: 'WEB-BUUCTF php-unserialize',
              link: '/blog/CTF/WEB/BUUCTF php-unserialize',
            },
            {
              text: 'WEB-BUUCTF Ping Ping Ping',
              link: '/blog/CTF/WEB/BUUCTF Ping Ping Ping',
            },
            {
              text: 'WEB-BUUCTF warmup',
              link: '/blog/CTF/WEB/BUUCTF warmup',
            },
            {
              text: 'WEB-BUUCTF-BabySQL',
              link: '/blog/CTF/WEB/BUUCTF-BabySQL',
            },
          ] 
        },
        { text: 'CRYPTO', items: [
          {
            text: 'RSA-N可以分解为多个素数',
            link: '/blog/CTF/CRYPTO/multi-P-in-N',
          },
          {
            text: 'RSA-已知p*(q-1)和q*(p-1)',
            link: '/blog/CTF/CRYPTO/easy-to-get-phi',
          },
          {
            text: 'RSA 低指数攻击（e很小）',
            link: '/blog/CTF/CRYPTO/RSA-small-e',
          },
          {
            text: 'RSA低指数加密广播攻击(e很小;多组n,c)',
            link: '/blog/CTF/CRYPTO/RSA-multi-n-c-with-small-e',
          },
          {
            text: 'RSA公因数攻击（多组nc）',
            link: '/blog/CTF/CRYPTO/RSA-common-factor-multi-n-c',
          },
          {
            text: '当rsa遇到.enc或者.bin的密文',
            link: '/blog/CTF/CRYPTO/RSA-read-enc-or-bin',
          },
          {
            text: 'RSA中e和phi_n不互素',
            link: '/blog/CTF/CRYPTO/RSA中e和phi_n不互素',
          }
          ] 
        },
        { text: 'REVERSE', items: [
          {
            text: 'BUUCTF--reverse1',
            link: '/blog/CTF/REVERSE/BUUCTF--reverse1',
          },
          {
            text: 'BUUCTF--reverse2',
            link: '/blog/CTF/REVERSE/BUUCTF--reverse2',
          },
          {
            text: 'BUUCTF--reverse3',
            link: '/blog/CTF/REVERSE/BUUCTF--reverse3',
          },
          {
            text: 'BUUCTF-ACTF2020-easyre',
            link: '/blog/CTF/REVERSE/buuctf-ACTF2020-easyre',
          },
          ] 
        }
        ,
        { text: 'MISC', items: [
          {
            text: 'windows内存取证1',
            link: '/blog/CTF/MISC/windows内存取证1',
          },
          ] 
        }
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

