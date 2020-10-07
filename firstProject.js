var webdriver = require("selenium-webdriver");

var browser_name = new webdriver.Builder()
  .withCapabilities(webdriver.Capabilities.chrome())
  .build();

browser_name.get("http:/www.google.com");
