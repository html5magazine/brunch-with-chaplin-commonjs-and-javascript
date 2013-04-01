var Controller = require('controllers/base/controller');
//var HelloWorld = require('models/hello_world');
var HomePageView = require('views/home-page-view');

var HomeController = Controller.extend({
	index : function(params, route, options) {
		//this.model = new HelloWorld();
		this.view = new HomePageView({
			//model : this.model
			region: 'main'
		});
	}
});

module.exports = HomeController;
