var path = require('path');
var port = process.env.PORT || 8080

module.exports = {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://localhost:${port}`,
    'webpack/hot/only-dev-server',
    './misc/demo/app/main.js',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "demo.js"
  },
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
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.scss'],
    alias: { 'react-lds': path.resolve(__dirname, 'src')},
  }
}
