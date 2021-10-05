const { $, $$ } = require('../helpers/element-selection.js');

module.exports = function () {

  this.Given(/^there is a product in the shopping cart$/, async function () {
    let findResults = await $$('.MiniCartstyles__StyledCounter-sc-1wu749y-6 cQZUCU');
    let resultTexts = [];
    for (let findResult of findResults) {
      resultTexts.push(await findResult.getText());
    }
    expect(resultTexts).to.not.equal(0);
  });

  this.Given(/^the shopping cart menu is open$/, async function () {
    let clickButton = await $('.egACAL');
    await clickButton.click();
  });

  this.When(/^I click on the plus button on the product in the shopping cart$/, async function () {
    await helpers.loadPage('https://www.willys.se/sok?q=satsumas');
    let clickButton = await $$('.CartQuantityInputField_quantity-button__RMmnb');
    let confirmButton = clickButton[0];
    await confirmButton.click();
  });

  this.When(/^I click on the minus button on the product in the shopping cart$/, async function () {
    await helpers.loadPage('https://www.willys.se/sok?q=satsumas');
    let clickButton = await $$('.CartQuantityInputField_quantity-button__RMmnb');
    let confirmButton = clickButton[1];
    await confirmButton.click();
  });

  this.Then(/^the product count should be increased in the shopping cart$/, async function () {
    let findResults = await $$('.MiniCartstyles__StyledCounter-sc-1wu749y-6 cQZUCU');
    let resultTexts = [];
    for (let findResult of findResults) {
      resultTexts.push(await findResult.getText());
    }
    expect(resultTexts).to.not.equal(1);
  });

  this.Then(/^the product count should be decreased in the shopping cart$/, async function () {
    let findResults = await $$('.MiniCartstyles__StyledCounter-sc-1wu749y-6 cQZUCU');
    let resultTexts = [];
    for (let findResult of findResults) {
      resultTexts.push(await findResult.getText());
    }
    expect(resultTexts).to.not.equal(1);
  });

};