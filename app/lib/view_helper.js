var mediator, __slice = [].slice;

mediator = require('chaplin/mediator');

Handlebars.registerHelper('with', function(context, options) {
	if (!context || Handlebars.Utils.isEmpty(context)) {
		return options.inverse(this);
	} else {
		return options.fn(context);
	}
});

Handlebars.registerHelper('without', function(context, options) {
	var inverse;
	inverse = options.inverse;
	options.inverse = options.fn;
	options.fn = inverse;
	return Handlebars.helpers["with"].call(this, context, options);
});

Handlebars.registerHelper('url', function() {
	var params, routeName, url;
	routeName = arguments[0], params = 2 <= arguments.length ? __slice.call(
			arguments, 1) : [];
	url = null;
	mediator.publish('!router:reverse', routeName, params, function(result) {
		return url = result;
	});
	return "/" + url;
});