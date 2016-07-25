const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack/hot/only-dev-server',
    './src/app/main.js',
  ],
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: 'demo.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      { from: 'node_modules/@salesforce-ux/design-system/assets/icons', to: 'assets/icons' },
    ]),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
      },
      {
        test: /\.json$/,
        loaders: ['json'],
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/i,
        loader: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.scss'],
    alias: {
      // The react-lds module will be searched in src folder, not in node_modules
      'react-lds': path.resolve(__dirname, '../src'),
    },
  },
};
