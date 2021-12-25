const { merge } = require('webpack-merge');
const common = require('./webpack.config.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: '../dist',
    host: 'localhost',
    port: 8080,
    open: true,
    historyApiFallback: true,
    // proxy: {
    //   '/api/': {
    //     target: 'http://localhost:4040/api',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': '',
    //     },
    //   },
    // },
  },
});
