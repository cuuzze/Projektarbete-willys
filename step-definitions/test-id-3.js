const { $, $$ } = require('../helpers/element-selection.js');

let slowDown = true;

async function waitAWhile() {
  await driver.sleep(slowDown ? 5000 : 0);
}

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
    await driver.sleep(1000);
    let clickButton = await $('[class^= "ax-btn ax-product-quantity-btn ax-product-quantity-plus"]');
    await clickButton.click();
    await waitAWhile();
  });

  this.Then(/^I should get a search result$/, async function () {
    await driver.wait(until.elementsLocated(by.css('[class^= "Grid_grid"]')), 20000);
    let findList = await $('[class^= "Grid_grid"]');
    expect(findList).to.not.equal(null);
  });

  this.Then(/^the search result should contain the correct product$/, async function () {
    let findResults = await $$('[class^= "Product_product-name"]');
    let resultTexts = [];
    for (let findResult of findResults) {
      resultTexts.push(await findResult.getText());
    }
    expect(resultTexts).to.include('Ciabatta');
  });

  this.When(/^I click the shopping cart-button$/, async function () {
    await driver.sleep(1000);
    let clickButton = await $('[class^= "Buttonstyles__StyledButton"]');
    await clickButton.click();
  });

  this.Then(/^the product count should be increased$/, async function () {
    let findResults = await $$('#selenium--cart-badge-total-unit-count');
    let resultTexts = [];
    for (let findResult of findResults) {
      resultTexts.push(await findResult.getText());
    }
    expect(resultTexts).to.eql(['1']);
  });

  this.Then(/^the products count should be increased$/, async function () {
    let findResults = await $$('#selenium--cart-badge-total-unit-count');
    let resultTexts = [];
    for (let findResult of findResults) {
      resultTexts.push(await findResult.getText());
    }
    expect(resultTexts).to.eql(['2']);
  });

  this.Then(/^the product should be added to the shopping cart$/, async function () {
    let findResults = await $$('.ax-cart-mini .ax-badge.ax-badge-info');
    let resultTexts = [];
    for (let findResult of findResults) {
      resultTexts.push(await findResult.getText());
    }
    expect(resultTexts).to.eql(['1']);
  });

  this.Then(/^the products should be added to the shopping cart$/, async function () {
    let findResults = await $$('.ax-cart-mini .ax-badge.ax-badge-info');
    let resultTexts = [];
    for (let findResult of findResults) {
      resultTexts.push(await findResult.getText());
    }
    expect(resultTexts).to.eql(['2']);
  });

  this.Then(/^there should be a text displaying that my cart is empty$/, async function () {
    let findResults = await $$('.selenium--miniCart-empty-text');
    let resultTexts = [];
    for (let findResult of findResults) {
      resultTexts.push(await findResult.getText());
    }
    expect(resultTexts).to.include('Din varukorg är tom!');
  });
};





