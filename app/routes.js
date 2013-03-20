// The routes for the application. This module returns a function.
// `match` is match method of the Router
module.exports = function(match) {
	match('', 'helloWorld#show', {
		name : 'home'
	});
};