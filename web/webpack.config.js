const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const {EnvironmentPlugin} = require('webpack');

const HtmlConfig = {
  template: path.resolve('src/index.html'),
  filename: 'index.html',
  inject: 'body'
}
const HtmlPlugin = new HtmlWebpackPlugin(HtmlConfig)

// const EnvironmentVariables = new EnvironmentPlugin(['API_URI', 'NODE_ENV'])
module.exports = {

  entry: path.resolve('src/app.js'),
  output: {
    path: path.resolve('build'),
    filename: 'app.bundle.js'
  },
  mode: 'production',
  module: {
    rules: [
      { test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }, {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },
  // devServer : {
  //   port: process.env.WEB_PORT,
  //   host: "0.0.0.0"
  // },
  plugins: [
    HtmlPlugin, 
    // EnvironmentVariables
  ]
}