
var SuperJS = require('superjs');
SuperJS.Cli = require('superjs-cli');

module.exports = SuperJS.Cli.Command.extend({

  _metaFile: function () {
    this._super();
    this._loadMeta(__filename);
  },

  init: function (app, options) {
    this._super.apply(this, arguments);
    this.app = app;
  },

  run: function() {
    this.log.info("Here are list of the available commands:", Object.keys(this.app.commands));
  }

});