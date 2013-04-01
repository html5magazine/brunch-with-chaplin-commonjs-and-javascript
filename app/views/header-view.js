var View = require('views/base/view');
var template = require('templates/header');
module.exports = View.extend({
	// Automatically render after initialize
	autoRender : true,

	className : 'header',
	
	region: 'header',
	
	id: 'header',

	// Save the template string in a prototype property.
	// This is overwritten with the compiled template function.
	// In the end you might want to used precompiled templates.
	template : template
});