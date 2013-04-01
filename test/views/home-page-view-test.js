var HomePageView = require('views/home-page-view');

describe('HomePageView', function() {
    beforeEach(function() {
      this.view = new HomePageView();
    });
    afterEach(function() {
      //this.view.dispose();
    });
    return it('should auto-render', function() {
      expect(this.view.$el.find('img')).to.have.length(1);
    });
});