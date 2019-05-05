'use strict';

class Test {
  constructor() {
    process.env.BABEL_ENV = 'test';
    process.env.NODE_ENV = 'test';
  }
  execute() {}
}

module.exports = new Test();
