var Chaplin = require('chaplin');
var Layout = require('views/layout');
var routes = require('routes');

// The application object
// Choose a meaningful name for your application
var Application = Chaplin.Application.extend({

	// Set your application name here so the document title is set to
	// “Controller title – Site title” (see Layout#adjustTitle)
	title : 'mobile publish Application',

	initialize : function() {
		// Call the parent constructor.
		Chaplin.Application.prototype.initialize.apply(this, arguments);

		// Initialize core components.
		// ---------------------------

		// Dispatcher listens for routing events and initialises controllers.
		this.initDispatcher();

		// Layout listens for click events & delegates internal links to router.
		this.initLayout();

		// Composer grants the ability for views and stuff to be persisted.
		this.initComposer();

		// Mediator is a global message broker which implements pub-sub pattern.
		this.initMediator();

		// Register all routes and start routing.
		// You might pass Router/History options as the second parameter.
		// Chaplin enables pushState per default and Backbone uses / as
		// the root per default. You might change that in the options
		// if necessary:
		// this.initRouter(routes, {pushState: false, root: '/subdir/'});
		this.initRouter(routes, {
			pushState : false,
			root : '/brunch-projects/mobilePublishChaplinJs/public/'
		});

		// Freeze the application instance to prevent further changes.
		if (Object.freeze)
			Object.freeze(this);

	},
	// Override standard layout initializer
	// ------------------------------------
	initLayout : function() {
		// Use an application-specific Layout class. Currently this adds
		// no features to the standard Chaplin Layout, it’s an empty
		// placeholder.
		this.layout = new Layout(this.title);
	},

	// Create additional mediator properties
	// -------------------------------------
	initMediator : function() {
		// Add additional application-specific properties and methods
		// e.g. mediator.prop = null
		// Create a user property
		Chaplin.mediator.user = null;
		// Add additional application-specific properties and methods
		// Seal the mediator
		Chaplin.mediator.seal();
	}
});

module.exports = Application;
