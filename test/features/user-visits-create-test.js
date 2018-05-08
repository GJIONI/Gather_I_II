const {assert} = require('chai');
const {buildItemObject} = require('../test-utils');

// Add your tests below:
describe('User visits root', () => {
  describe('posting a quote', () => {
  
    it('saves quote and metadata submitted by user', () => {
  
       //setup
       const itemToCreate = buildItemObject();
       browser.url('/items/create');
  
      //exercise
      browser.setValue('#title-input', itemToCreate.title);
      browser.setValue('#description-input', itemToCreate.description);
      browser.setValue('#imageUrl-input', itemToCreate.imageUrl);
      browser.click('#submit-button');
  
      //verify
      assert.include(browser.getText('body'), itemToCreate.title);
      assert.include(browser.getAttribute('body img', 'src'), itemToCreate.imageUrl);
  
    }); 
  });
  
});