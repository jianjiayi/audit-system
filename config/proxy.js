/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
// const domain = 'http://10.50.162.153:8180';
const domain = 'http://172.30.4.55:8180'; //gxp
// const domain = 'http://172.30.4.88:8180'; //zb

export default {
  dev: {
    '/audit/': {
      target: domain,
      changeOrigin: true,
      pathRewrite: {
        '^': '',
      },
    },
    '/api/': {
      target: domain,
      changeOrigin: true,
      pathRewrite: {
        '^': '',
      },
    },
  },
  test: {
    '/api/': {
      target: domain,
      changeOrigin: true,
      pathRewrite: {
        '^': '',
      },
    },
  },
  pre: {
    '/audit/': {
      target: domain,
      changeOrigin: true,
      pathRewrite: {
        '^': '',
      },
    },
  },
};
