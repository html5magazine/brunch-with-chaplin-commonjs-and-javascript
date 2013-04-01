var SiteView = require('views/site-view');

describe('SiteView', function() {
	beforeEach(function() {
		this.view = new SiteView();
		//this.view.render();
	});
	afterEach(function(){
		//this.view.dispose();
	});
	return it('should have two regions', function() {
		expect(this.view.$el.find('.header-container')).to.have.length(1);
		expect(this.view.$el.find('.container')).to.have.length(1);
	});
});
