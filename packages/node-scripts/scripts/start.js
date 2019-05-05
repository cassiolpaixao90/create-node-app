/* eslint-disable no-unused-vars */
'use strict';

const path = require('path');
const webpack = require('webpack');
const nodemon = require('nodemon');
const { once } = require('ramda');
const webpackConfig = require('../webpack/webpack.config.dev');

class Start {
  constructor() {
    process.env.BABEL_ENV = 'development';
    process.env.NODE_ENV = 'development';
  }
  execute() {
    const options = {
      env: process.env.NODE_ENV,
    };

    process.on('SIGINT', process.exit);
    const config = webpackConfig(options);
    const compiler = webpack(config);
    const startServer = once((err, stats) => {
      if (err) {
        return;
      }
      this.start(compiler);
    });
    compiler.watch(config.watchOptions || {}, startServer);
  }

  start(compiler) {
    const serverPaths = Object.keys(compiler.options.entry).map(entry =>
      path.join(compiler.options.output.path, `${entry}.js`)
    );

    nodemon({
      script: serverPaths[0],
      watch: serverPaths,
      nodeArgs: process.argv.slice(2),
    }).on('quit', process.exit);
  }
}

module.exports = new Start();
