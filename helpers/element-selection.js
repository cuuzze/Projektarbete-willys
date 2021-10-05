// Helpers for selecting DOM elements
// so we can write less code in the step definitions

function $(cssSelector) {
  return driver.findElement(by.css(cssSelector));
}

function $$(cssSelector) {
  return driver.findElements(by.css(cssSelector));
}

module.exports = { $, $$ };