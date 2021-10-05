const { $, $$ } = require('../helpers/element-selection.js');

module.exports = function () {

  this.When(/^I enter "([^"]*)" in the search box$/, async function (searchPhrase) {
    let searchBox = await $('input[placeholder="Sök i e-handeln"]');
    await searchBox.sendKeys(searchPhrase);
  });

  this.When(/^press the enter key$/, async function () {
    let searchBox = await $('input[placeholder="Sök i e-handeln"]');
    await searchBox.sendKeys(selenium.Key.ENTER);
  });

  this.When(/^I click on the plus button on a product$/, async function () {
    let clickButton = await $$('.CardQuantityInputField_quantity-button__3ohGY');
    let confirmButton = clickButton[1];
    await confirmButton.click();
  });

  this.Then(/^I should get a search result$/, async function () {
    await driver.wait(until.elementsLocated(by.css('.Grid_grid__1YmC6')), 20000);
    let findList = await $('.Grid_grid__1YmC6');
    expect(findList).to.not.equal(null);
  });

  this.Then(/^the search result should contain the correct product$/, async function () {
    let findResults = await $$('.Product_product-name__1IyPc');
    let resultTexts = [];
    for (let findResult of findResults) {
      resultTexts.push(await findResult.getText());
    }
    expect(resultTexts).to.include('Äpple Royal Gala Klass 1');
  });

  this.Then(/^the product should be added to the shopping cart$/, async function () {
    let findResults = await $$('.MiniCartstyles__StyledCounter-sc-1wu749y-6 cQZUCU');
    let resultTexts = [];
    for (let findResult of findResults) {
      resultTexts.push(await findResult.getText());
    }
    expect(resultTexts).to.not.equal(0);
  });

  this.Then(/^the products should be added to the shopping cart$/, async function () {
    let findResults = await $$('.MiniCartstyles__StyledCounter-sc-1wu749y-6 cQZUCU');
    let resultTexts = [];
    for (let findResult of findResults) {
      resultTexts.push(await findResult.getText());
    }
    expect(resultTexts).to.not.equal(0);
  });
};








