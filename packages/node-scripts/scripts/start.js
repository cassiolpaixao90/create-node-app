'use strict';

class Start {
  constructor() {
    process.env.BABEL_ENV = 'development';
    process.env.NODE_ENV = 'development';
  }
  execute() {
    console.log('start');
    console.log('env', `${process.env.BABEL_ENV}`);
  }
}

module.exports = new Start();
