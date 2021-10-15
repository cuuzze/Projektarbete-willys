const { $, $$ } = require('../helpers/element-selection.js');

let slowDown = true;

async function waitAWhile() {
  await driver.sleep(slowDown ? 5000 : 0);
}
module.exports = function () {


  this.When(/^I click the shopping cart icon$/, async function () {
    let clickShoppingCart = await $('[class^= "ax-btn ax-btn-fab ax-toolbar-btn"]');
    await clickShoppingCart.click();

    await waitAWhile();
  });

  this.Then(/^the correct total for the items in the shopping cart should be displayed$/, async function () {

    //let miniCartTotal
    let totalPerItemTypes = +(await await $$('[class^= "col-total-price text-accent"]')).getText().split(' ')[0].split(',').join(['.']);
    let miniCartTotal = await $$('[.selenium--miniCart-total-amount]').getText().split(' ')[0].split(',').join(['.']);

    expect(totalPerItemTypes).to.equal(miniCartTotal);

  });



  
}