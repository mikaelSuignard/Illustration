'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Illustration App', function() {

  describe('Phone list view', function() {

    beforeEach(function() {
      browser().navigateTo('../../app/Illustration.html');
    });
    
    it('Titre',function() {
		expect(element('h1').text()).toBe('Réalisations artistiques personnelles');
	});

/*
    it('should filter the phone list as user types into the search box', function() {
      expect(repeater('.phones li').count()).toBe(3);

      input('query').enter('nexus');
      expect(repeater('.phones li').count()).toBe(1);

      input('query').enter('motorola');
      expect(repeater('.phones li').count()).toBe(2);
    });
    */
  });
});
