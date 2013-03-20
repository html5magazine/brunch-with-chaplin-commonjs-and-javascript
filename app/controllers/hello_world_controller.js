var Controller = require('controllers/base/controller');
var HelloWorld = require('models/hello_world');
var HelloWorldView = require('views/hello_world_view');

var HelloWorldController = Controller.extend({
	show : function(params) {
		this.model = new HelloWorld();
		this.view = new HelloWorldView({
			model : this.model
		});
	}
});

module.exports = HelloWorldController;
