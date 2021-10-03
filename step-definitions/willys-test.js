const { $, $$ } = require('../helpers/element-selection.js');

module.exports = function () {

  this.Given(/^that I am on "([^"]*)"$/, async function (url) {
    await helpers.loadPage(url);
  });

  this.Given(/^the product is added to the shopping cart$/, async function () {
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

  this.Given(/^I click the cookies button$/, async function () {
    await helpers.loadPage('https://www.willys.se/sok?q=satsumas');
    let clickButton = await $$('#onetrust-consent-sdk #onetrust-accept-btn-handler');
    let confirmButton = clickButton[0];
    await confirmButton.click();
  });

  this.Given(/^I click the "till kassan"-button$/, async function () {
    let clickButton = await $('.cCYiYM');
    await clickButton.click();
  });

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
    expect(resultTexts).to.include('Satsumas Klass 1');
  });


  this.Then(/^the product should be added to the shopping cart$/, async function () {
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








