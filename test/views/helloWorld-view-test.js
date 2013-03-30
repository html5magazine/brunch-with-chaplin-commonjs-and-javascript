var HelloWorldView = require('views/hello_world_view');

describe('HeaderView', function() {
    beforeEach(function() {
      return this.view = new HelloWorldView;
    });
    afterEach(function() {
      return this.view.dispose();
    });
    return it('should display 4 links', function() {
      return expect(this.view.$el.find('.hello-world')).to.have.length(1);
    });
});