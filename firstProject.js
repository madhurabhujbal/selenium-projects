var webdriver = require("selenium-webdriver");

async function openWiki() {
  var chrome = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();

  await chrome.get("http:/www.wikipedia.org");
  await chrome
    .findElement(webdriver.By.name("search"))
    .sendKeys("Pune", webdriver.Key.RETURN);
  // await chrome.close();
}

openWiki();
