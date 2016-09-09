const path = require('path');
const Webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: [
    path.resolve(__dirname, './src/app/main.js'),
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/react-lds/',
    filename: 'docs.js',
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new Webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new CopyWebpackPlugin([
      { from: 'node_modules/@salesforce-ux/design-system/assets', to: 'assets' },
      { from: path.resolve(__dirname, './src/index.html') },
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
  resolveLoader: { root: path.join(__dirname, './../node_modules') },
  resolve: {
    extensions: ['', '.js', '.scss'],
    alias: {
      // The react-lds module will be searched in src folder, not in node_modules
      'react-lds': path.resolve(__dirname, '../src'),
    },
  },
};
