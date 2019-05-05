'use strict';

class Build {
  constructor() {
    process.env.BABEL_ENV = 'production';
    process.env.NODE_ENV = 'production';
  }
  execute() {}
}

module.exports = new Build();
