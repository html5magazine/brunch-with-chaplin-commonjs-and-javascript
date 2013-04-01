var HeaderView = require('views/header-view');
//var mediator = require('mediator');
var HeaderViewTest = HeaderView.extend({
	renderTimes: 0,
});

describe('HeaderView', function() {
    beforeEach(function() {
      this.view = new HeaderViewTest();
    });
    afterEach(function() {
      //this.view.dispose();
    });
    return it('should display 4 links', function() {
      expect(this.view.$el.find('a')).to.have.length(4);
    });
});