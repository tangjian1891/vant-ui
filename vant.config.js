module.exports = {
  name: 'vant-ui',
  build: {
    css: {
      preprocessor: 'less',
    },
    site: {
      publicPath: '/vant-ui/',
    },
  },
  site: {
    title: 'vant-ui',
    logo: 'https://img.yzcdn.cn/vant/logo.png',
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
          },
          {
            path: 'quickstart',
            title: '快速上手',
          },
          {
            path: 'ok',
            title: '完全ok的文档',
          },
        ],
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'demo-button',
            title: 'DemoButton 按钮',
          },
          {
            path: 'demo-button2',
            title: '一个简单button',
          },
          {
            path: 'empty',
            title: 'empty空状态',
          },
        ],
      },
    ],
  },
};
