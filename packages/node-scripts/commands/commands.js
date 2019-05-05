'use strict';

const scripts = require('../scripts');

class TestCommand {
  constructor(argv) {
    this.script = new Scripts(argv);
  }

  execute() {
    this.script.execute();
  }
}

class StartCommand {
  constructor(argv) {
    this.script = new Scripts(argv);
  }

  execute() {
    this.script.execute();
  }
}

class BuildCommand {
  constructor(argv) {
    this.script = new Scripts(argv);
  }

  execute() {
    this.script.execute();
  }
}

class EjectCommand {
  constructor(argv) {
    this.script = new Scripts(argv);
  }

  execute() {
    this.script.execute();
  }
}

class Scripts {
  constructor(script) {
    this.script = scripts[script];
  }

  execute() {
    this.script.execute();
  }
}

module.exports = { TestCommand, StartCommand, BuildCommand, EjectCommand };
