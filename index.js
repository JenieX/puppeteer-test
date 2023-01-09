const puppeteer = require('puppeteer');
// const path = require('path');
// const pathToExtension = path.join(process.cwd(), 'ublock-origin');

function sleep(ms = 1500) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const defaultArgs = puppeteer
  .defaultArgs()
  .filter((flag) => flag !== '--disable-extensions');
// console.log(defaultArgs);

const browserOptions = {
  headless: false,
  userDataDir: './user_data/',
  // ignoreDefaultArgs: true,
  ignoreDefaultArgs: ['--disable-extensions'],

  args: [
    // ...defaultArgs
    '--enable-features=PostQuantumCECPQ2',
    // `--disable-extensions-except=${pathToExtension}`,
    // `--load-extension=${pathToExtension}`,
  ],
};
let browser;

async function start() {
  browser = await puppeteer.launch(browserOptions);
  await sleep();
  const page = await browser.newPage();

  await page.goto('https://example.com');

  console.log(await page.content());
}

start(); //.then(() => setTimeout(browser.close, 3000));
