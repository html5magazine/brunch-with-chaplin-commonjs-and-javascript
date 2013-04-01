var View = require('views/base/view');
var template = require('templates/site');

// Site view is a top-level view which is bound to body.
module.exports = View.extend({
	autoRender: true,
	container : 'body',
	id : 'site-container',
	regions : {
		'#header-container' : 'header',
		'#page-container' : 'main'
	},
	template : template
});
