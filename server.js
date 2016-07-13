const path = require('path');
const WebPackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('./webpack.config');

const port = process.env.PORT || 8080;

config.entry.unshift(`webpack-dev-server/client?http://localhost:${port}/`);
const compiler = webpack(config);

const server = new WebPackDevServer(compiler, {
  compress: true,
  contentBase: path.resolve(__dirname, 'dist'),
  historyApiFallback: true,
  hot: true,
  quiet: false,
  stats: { colors: true },
});

server.listen(port, 'localhost', err => {
  if (err) {
    // eslint-disable-next-line
    return console.log(err);
  }

  // eslint-disable-next-line
  return console.log('Listening at http://localhost:3000/');
});
