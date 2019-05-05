'use strict';

const conductor = require('../commands');
const {
  StartCommand,
  TestCommand,
  BuildCommand,
  EjectCommand,
} = require('../commands/commands');

class strategy {
  static start(argv) {
    conductor.run(new StartCommand(argv));
  }

  static test(argv) {
    conductor.run(new TestCommand(argv));
  }

  static build(argv) {
    conductor.run(new BuildCommand(argv));
  }

  static eject(argv) {
    conductor.run(new EjectCommand(argv));
  }
}

module.exports = strategy;
