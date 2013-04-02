exports.config =
  # See http://brunch.readthedocs.org/en/latest/config.html for documentation.
  files:
    javascripts:
      joinTo:
        'javascripts/app.js': /^app/
        'javascripts/vendor.js': /^vendor/
        'test/javascripts/test.js': /^test(\/|\\)(?!vendor)/
        'test/javascripts/test-vendor.js': /^test(\/|\\)(?=vendor)/
      order:
	      before: [
	        'vendor/scripts/modernizr-2.6.2.min.js',
	        'vendor/scripts/console-polyfill.js',
	        'vendor/scripts/jquery-1.9.1.js',
	        'vendor/scripts/underscore-1.4.4.js',
	        'vendor/scripts/backbone-1.0.0.js'
	      ]
 
    stylesheets:
      joinTo:
        'stylesheets/app.css': /^(app|vendor)/
        'test/stylesheets/test.css': /^test/
      order:
        before: [
        	'vendor/stylesheets/normalize-2.0.1.css',
        	'vendor/stylesheets/helper.css',
        	'vendor/stylesheets/main.css'
        ]
        after: []

    templates:
      joinTo: 'javascripts/app.js'
