const { $, $$ } = require('../helpers/element-selection.js');

let slowDown = true;

async function waitAWhile() {
  await driver.sleep(slowDown ? 5000 : 0);
}
module.exports = function () {

  this.When(/^that I have placed items in my shopping cart$/, async function () {

    await driver.sleep(1000);
    let plusButton = await $('[class^= "ax-btn ax-product-quantity-btn ax-product-quantity-plus"]');
    await plusButton.click();
    await waitAWhile();
  });

  this.When(/^I click the trash bin icon$/, async function () {
    let clickShoppingCart = await $('[class^= "ax-icon-lg ax-icon cart-icon"]');
    await clickShoppingCart.click();

    await driver.sleep(1000);

    let clickButton = await $('[arialabel="cart.page.clear.all"]');
    await clickButton.click();
    await waitAWhile();
  });

  this.When(/^click the confirmation button$/, async function () {

    let clickButton = await $('[class^= "ax-btn-primary md-button md-ink-ripple"]');
    await clickButton.click();
    await waitAWhile();
  });

  this.Then(/^an empty shopping cart will be shown$/, async function () {

    let checkEmptyCart = await $('h1').getText();

    expect(checkEmptyCart).to.include('Din varukorg är tom!');
    await waitAWhile();
  });

}