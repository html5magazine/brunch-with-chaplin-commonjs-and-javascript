var View = require('views/base/view');
var template = require('templates/hello_world');
module.exports = View.extend({
	// Automatically render after initialize
	autoRender : true,

	className : 'hello-world',

	// Automatically append to the DOM on render
	container : '#page-container',

	// Save the template string in a prototype property.
	// This is overwritten with the compiled template function.
	// In the end you might want to used precompiled templates.
	template : template
});
