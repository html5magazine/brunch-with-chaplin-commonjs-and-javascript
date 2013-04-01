var template = require('templates/home');
var View = require('views/base/view');

module.exports = View.extend({
	// Automatically render after initialize
	autoRender : true,

	className : 'home-page',

	// Save the template string in a prototype property.
	// This is overwritten with the compiled template function.
	// In the end you might want to used precompiled templates.
	template : template
});
