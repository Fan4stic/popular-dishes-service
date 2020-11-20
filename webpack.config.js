const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'client/dist');
const APP_DIR = path.resolve(__dirname, 'client/src');

var config = {
  entry: APP_DIR + '/index.jsx',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack']
      }
    ]
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  }
};

module.exports = config;