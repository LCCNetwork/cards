const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const history = require('connect-history-api-fallback');
const convert = require('koa-connect');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  mode: 'development',
  serve: {
    add: (app) => app.use(convert(history({})))
  }
})
