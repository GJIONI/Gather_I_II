const {assert} = require('chai');

describe('User visits root', () => {
  describe('without existing items', () => {
    it('starts blank', () => {
      browser.url('/items/create');
      assert.equal(browser.getText('#items-container'), '');
    });
  });
  describe('and can navigate', () => {
	it('to /create', () => {
		//setup
		browser.url('')/items/create;
		
		//exercise
		browser.click('a[href="/items/create"]');
		
		//verification
		assert.include(browser.getText('body'), 'Create');
	});
  });
});
