const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractStyles = new ExtractTextPlugin({
  filename: '[name].css'
})

module.exports = {
  entry: {
    app: './src/app/app.jsx'
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
    new HtmlWebpackPlugin({
      template: './src/app/app.html',
      filename: 'index.html'
    }),
    extractStyles
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": [
              "env",
              "react"
            ],
            "plugins": [
              "syntax-dynamic-import"
            ]
          }
        }
      },
      {
        test: /\.scss$/,
        use: extractStyles.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader', 'postcss-loader']
        })
      },
      {
        test: /\.css$/,
        use: extractStyles.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
    ]
  },
}
