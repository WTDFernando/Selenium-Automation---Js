const { Builder, By, Key, until } = require('selenium-webdriver');

(async function exampleTest() {
  // Create a new Chrome browser instance
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Navigate to Google
    await driver.get('https://www.google.com');

    // Search for 'Selenium'
    await driver.findElement(By.name('q')).sendKeys('Selenium', Key.RETURN);

    // Wait for results to load
    await driver.wait(until.titleContains('Selenium'), 10000);

    console.log("Test passed - Page title contains 'Selenium'");

  } catch (error) {
    console.error("Test failed:", error);
  } finally {
    // Quit the browser
    await driver.quit();
  }
})();
