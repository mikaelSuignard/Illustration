'use strict';

/* jasmine specs for controllers go here */
describe('Illustration controllers', function() {

  describe('IllustrationCtrl', function(){

    it('should create "phones" model with 4 phones', function() {
      var scope = {},
          ctrl = new IllustrationCtrl(scope);

		expect(scope.phones.length).toBe(4);
    });
  });
});
