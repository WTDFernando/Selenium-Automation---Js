const { Builder, By, Key, until } = require('selenium-webdriver');

(async function exampleTest() {
  let driver = await new Builder().forBrowser('chrome').build();
})();
