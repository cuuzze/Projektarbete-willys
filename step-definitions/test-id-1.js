const { $, $$ } = require('../helpers/element-selection.js');

let slowDown1 = true;
async function waitAWhile() {
  await driver.sleep(slowDown1 ? 5000 : 0);
}


module.exports = function () {

  this.Given(/^that the side menu is open$/, async function () {
    await driver.wait(until.elementsLocated(by.css('.ax-sidemenu')), 10000);
    let sidemenu = await $('.ax-sidemenu');
    expect(sidemenu).to.not.equal(null);

  })


  this.When(/^I click on the meat, poultry and butchers' category$/, async function () {
    let meatButton = await $$('.axsidemenu-toggle');
    let clickbutton = meatButton[0];

    await clickbutton.click();
    await waitAWhile();
  });

  this.When(/^I click on the Meat subcategory$/, async function () {

    let meatButton2 = await $$('.bNkgyk');
    let clickbutton2 = meatButton2[1]
    await clickbutton2.click();
    await waitAWhile();
  });

  this.Then(/^I should see all the products with the meat tag$/, async function () {
    let findResults = await $$('.Headingstyles__StyledH2-sc-r7tfy8-1');
    let resultTexts = [];
    for (let findResult of findResults) {
      resultTexts.push(await findResult.getText());
    }
    expect(resultTexts).to.include('Kött');
    await waitAWhile();
  })


  this.Then(/^be able to find ground beef in the list$/, async function () {

    let findResults = await $$('.Product_product-name__1IyPc');
    let resultTexts = [];
    for (let findResult of findResults) {
      resultTexts.push(await findResult.getText());
    }
    expect(resultTexts).to.include('Nötfärs 12% Sverige');
  })


  // This is where we go to check for vegetables instead :)

  this.When(/^I click on the Vegetables and Greens category$/, async function () {
    let vegetableButton = await $$('.axsidemenu-toggle');
    let clickbutton = vegetableButton[1];
    await clickbutton.click();
    await waitAWhile();
  });


  this.When(/^I click on the Vegetables subcategory$/, async function () {

    let vegetableButton2 = await $$('.eusBJK');
    let clickbutton2 = vegetableButton2[2]
    await clickbutton2.click();
    await waitAWhile();
  });

  this.Then(/^I should see all the products with the vegetable tag$/, async function () {
    let findResults = await $$('.Headingstyles__StyledH2-sc-r7tfy8-1');
    let resultTexts = [];
    for (let findResult of findResults) {
      resultTexts.push(await findResult.getText());
    }
    expect(resultTexts).to.include('Grönsaker');
    await waitAWhile();
  });


  this.Then(/^be able to find avocados in the list$/, async function () {

    let findResults = await $$('.Product_product-name__1IyPc');
    let resultTexts = [];
    for (let findResult of findResults) {
      resultTexts.push(await findResult.getText());
    }
    expect(resultTexts).to.include('Avokado Klass 1');
  })
};



