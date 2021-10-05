const { $, $$ } = require('../helpers/element-selection.js');




module.exports = function () {


  this.Given(/^that I am on "([^"]*)"$/, async function (url) {
    await helpers.loadPage(url);
  });

  /*
  
  this.When(/^I click the meny button$/, async function () {


    let menuButton = await $$('.ax-toolbar-btn');
    let clickButton = menuButton[0];
    await clickButton.click();



  }); */

  this.When(/^I should get the sortiment menu$/, async function () {
    // Wait for a .findList element to show (max 20 seconds)
    await driver.wait(until.elementsLocated(by.css('.ax-sidemenu')), 10000);
    let sidemenu = await $('.ax-sidemenu');
    expect(sidemenu).to.not.equal(null);

  });

  this.When(/^I click the Kött, chark & fågel navigation-title$/, async function () {
    let meatButton = await $$('.ax-sidemenu-item');
    let clickbutton2 = meatButton[7];

    await clickbutton2.click();

  });


  this.When(/^I click the Kött link$/, async function () {
    let meatButton = await $$('.bNkgyk');
    let clickbutton2 = meatButton[1];

    await clickbutton2.click();

  });

};




