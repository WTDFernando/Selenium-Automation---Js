const { Builder, By, Key, until } = require('selenium-webdriver');

(async function exampleTest() {
  let driver = await new Builder().forBrowser('chrome').build();

  try
  {
    await driver.get("https://testautomationpractice.blogspot.com/");
    // Wait for the page to load
    await driver.wait(until.titleIs("Automation Testing Practice"), 10000);
    console.log("Page title is correct");

    await driver.findElement(By.id("name")).sendKeys("Thushara");
    await driver.findElement(By.id("email")).sendKeys("thushara@gmail.com");
    await driver.findElement(By.id("phone")).sendKeys("0704042788");
    await driver.findElement(By.id("textarea")).sendKeys("No:4, Galle Road, Colombo 04");
    console.log("Form fields filled");

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
