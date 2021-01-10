const puppeteer = require('puppeteer');
const data = require("./config.json");

(async function() {

  const browser = await puppeteer.launch({headless:false});


  const page  = await browser.newPage();
  await page.goto('https://www.instagram.com/', {waitUntil:"networkidle2"} );

  await page.type("input[name = 'username']", data.user, {delay:100});
  await page.type("input [name = 'password']", data.pwd, {delay:100});
  await page.type("button[type = 'submit']");
  await browser.close();

})();