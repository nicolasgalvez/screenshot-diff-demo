const puppeteer = require('puppeteer');
const { toMatchImageSnapshot } = require('jest-image-snapshot');

  expect.extend({ toMatchImageSnapshot });

/**
 * This test should fail. The screenshot in the test folder uses "Hello" as a test string in the search bar
 */
it('renders correctly', async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({width: 1920, height: 1080})
  await page.goto('https://www.google.com', { waitUntil: 'networkidle0' })
  await page.type('input[title="Search"]', 'Goodbye', { delay: 100 })
  const image = await page.screenshot();

  expect(image).toMatchImageSnapshot();
});