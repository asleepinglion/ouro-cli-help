
var Ouro = require('ouro');
Ouro.Cli = require('ouro-cli');

module.exports = Ouro.Cli.Command.extend({

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