'use strict';

const webpack = require('webpack');
const webpackConfig = require('../webpack/webpack.config.prod');

class Build {
  constructor() {
    process.env.BABEL_ENV = 'production';
    process.env.NODE_ENV = 'production';
  }
  execute() {
    const options = {
      env: process.env.NODE_ENV,
    };

    process.on('SIGINT', process.exit);
    const config = webpackConfig(options);
    const compiler = webpack(config);
    compiler.run((error, stats) => {
      if (error || stats.hasErrors()) {
        process.exitCode = 1;
      }
    });
  }
}

module.exports = new Build();
