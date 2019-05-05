'use strict';

const strategy = require('./strategy');

class InitCLIBuilder {
  constructor(argvs) {
    this.argv = argvs[0];
  }

  run() {
    return new CliStrategy(this.argv).execute();
  }
}

class CliStrategy {
  constructor(argv) {
    this.argv = argv;
    this.strategy = strategy[argv];
  }
  execute() {
    this.strategy(this.argv);
  }
}

module.exports = new InitCLIBuilder(process.argv.slice(2));
