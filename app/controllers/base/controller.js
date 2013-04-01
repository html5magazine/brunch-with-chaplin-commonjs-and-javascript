var Chaplin = require('chaplin');
var SiteView = require('views/site-view');
var HeaderView = require('views/header-view');
module.exports = Chaplin.Controller.extend({
	// Place your application-specific controller features here.
	beforeAction : {
		'.*' : function() {
			this.compose('site', SiteView);
			this.compose('header', HeaderView);
		}
	}

});
