const { $, $$ } = require('../helpers/element-selection.js');

let slowDown = false;

async function waitAWhile() {
  await driver.sleep(slowDown ? 5000 : 0);
}


module.exports = function () {

  this.Given(/^there is a product in the shopping cart$/, async function () {
    let findResults = await $$('.ax-cart-mini .ax-badge.ax-badge-info');
    let resultTexts = [];
    for (let findResult of findResults) {
      resultTexts.push(await findResult.getText());
    }
    expect(resultTexts).to.not.eql(['0']);
  });

  this.Given(/^the shopping cart menu is open$/, async function () {
    await driver.sleep(1000);
    let clickButton = await $('[class^= "Buttonstyles__StyledButton"]');
    await clickButton.click();
  });

  this.When(/^I should get the search result$/, async function () {
    await driver.wait(until.elementsLocated(by.css('[class^= "Grid_grid"]')), 20000);
    let findList = await $('[class^= "Grid_grid"]');
    expect(findList).to.not.equal(null);
  });

  this.When(/^the search result should contain ciabatta$/, async function () {
    let findResults = await $$('[class^= "Product_product-name"]');
    let resultTexts = [];
    for (let findResult of findResults) {
      resultTexts.push(await findResult.getText());
    }
    expect(resultTexts).to.include('Ciabatta');
  });

  this.When(/^I click the buy-button$/, async function () {
    let clickButton = await $('a[href="https://www.willys.se/varukorg"]');
    await clickButton.click();
  });

  this.When(/^the product is added to the shopping cart $/, async function () {
    let findResults = await $$('.ax-cart-mini .ax-badge.ax-badge-info');
    let resultTexts = [];
    for (let findResult of findResults) {
      resultTexts.push(await findResult.getText());
    }
    expect(resultTexts).to.eql(['2']);
  });

  this.Then(/^I click on the plus button on the product in the shopping cart$/, async function () {
    let clickButton = await $$('[class^= "ax-btn ax-product-quantity-btn"]');
    let confirmButton = clickButton[1];
    await confirmButton.click();
    await driver.sleep(1000);
  });

  this.Then(/^I click on the minus button on the product in the shopping cart$/, async function () {
    let clickButton = await $$('[class^= "ax-btn ax-product-quantity-btn"]');
    let confirmButton = clickButton[0];
    await confirmButton.click();
    await driver.sleep(1000);
  });

  this.Then(/^I click on the plus-button on a product$/, async function () {
    let clickButton = await $$('[class^= "CardQuantityInputField_quantity-button"]');
    let confirmButton = clickButton[1];
    await confirmButton.click();
  });

  this.Then(/^the product count should be increased in the shopping cart$/, async function () {
    let findResults = await $$('.ax-cart-mini .ax-badge.ax-badge-info');
    let resultTexts = [];
    for (let findResult of findResults) {
      resultTexts.push(await findResult.getText());
    }
    expect(resultTexts).to.eql(['3']);
  });

  this.Then(/^the product count should be decreased in the shopping cart$/, async function () {
    let findResults = await $$('.ax-cart-mini .ax-badge.ax-badge-info');
    let resultTexts = [];
    for (let findResult of findResults) {
      resultTexts.push(await findResult.getText());
    }
    expect(resultTexts).to.eql(['1']);
  });

};