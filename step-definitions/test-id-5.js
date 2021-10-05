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
    await helpers.loadPage('https://www.willys.se/sok?q=%C3%A4pple');
    let clickButton = await $$('.CartQuantityInputField_quantity-button__RMmnb');
    let confirmButton = clickButton[0];
    await confirmButton.click();
  });

  this.When(/^I click on the minus button on the product in the shopping cart$/, async function () {
    await helpers.loadPage('https://www.willys.se/sok?q=%C3%A4pple');
    let clickButton = await $$('.CartQuantityInputField_quantity-button__RMmnb');
    let confirmButton = clickButton[1];
    await confirmButton.click();
  });

  this.When(/^I should get the search result$/, async function () {
    await driver.wait(until.elementsLocated(by.css('.Grid_grid__1YmC6')), 20000);
    let findList = await $('.Grid_grid__1YmC6');
    expect(findList).to.not.equal(null);
  });

  this.When(/^the search result should contain apples$/, async function () {
    let findResults = await $$('.Product_product-name__1IyPc');
    let resultTexts = [];
    for (let findResult of findResults) {
      resultTexts.push(await findResult.getText());
    }
    expect(resultTexts).to.include('Äpple Royal Gala Klass 1');
  });

  this.Then(/^the product count in the shopping cart should be changed$/, async function () {
    let findResults = await $$('.MiniCartstyles__StyledCounter-sc-1wu749y-6 cQZUCU');
    let resultTexts = [];
    for (let findResult of findResults) {
      resultTexts.push(await findResult.getText());
    }
    expect(resultTexts).to.not.equal(0);
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