const { Builder, By, Key, until } = require('selenium-webdriver');

(async function exampleTest() {
  let driver = await new Builder().forBrowser('chrome').build();

  try
  {
    await driver.get("https://testautomationpractice.blogspot.com/");
    // Wait for the page to load
    await driver.wait(until.titleIs("Automation Testing Practice"), 10000);
    console.log("Page title is correct");
  }
  catch(err)
  {
    console.error("Test failed:", err);
  }
  finally
  {
    await driver.quit();
  }
})();
