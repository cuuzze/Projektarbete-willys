const { $, $$ } = require('../helpers/element-selection.js');

let slowDown = true;

async function waitAWhile() {
  await driver.sleep(slowDown ? 5000 : 0);
}

module.exports = function () {

  this.When(/^I am on "([^"]*)"$/, async function (url) {
    await helpers.loadPage(url);
  });

  this.Given(/^that I have a product in the shopping cart$/, async function () {
    let findResults = await $$('.MiniCartstyles__StyledCounter-sc-1wu749y-6 cQZUCU');
    let resultTexts = [];
    for (let findResult of findResults) {
      resultTexts.push(await findResult.getText());
    }
    expect(resultTexts).to.not.equal(0);
  });

  this.When(/^I click the shopping cart button$/, async function () {
    await helpers.loadPage('https://www.willys.se/sok?q=delicatoboll+1-pack');
    let clickButton = await $('.fyXSDX');
    await clickButton.click();
  });

  this.Then(/^I should be able to click the buy button$/, async function () {
    let clickButton = await $('.cCYiYM');
    await clickButton.click();
  });

  this.Then(/^arrive at "([^"]*)"$/, async function (url) {
    await helpers.loadPage(url);
    await waitAWhile();
  });

















};