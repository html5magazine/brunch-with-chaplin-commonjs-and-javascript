var Chaplin = require('chaplin');
var Model = require('models/base/model');
module.exports = Model.extend({
	defaults : {
		message : 'Hello World!'
	}

// ,initialize: function(attributes, options) {
// Model.prototype.initialize.apply(this, arguments);
// console.debug('HelloWorld#initialize');
// }
});