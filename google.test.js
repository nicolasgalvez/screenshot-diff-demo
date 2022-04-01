const puppeteer = require('puppeteer');
const { toMatchImageSnapshot } = require('jest-image-snapshot');

  expect.extend({ toMatchImageSnapshot });

it('renders correctly', async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({width: 1920, height: 1080})
  await page.goto('https://www.google.com', { waitUntil: 'networkidle0' })
  await page.type('input[title="Search"]', 'Hello', { delay: 100 })
  const image = await page.screenshot();

  expect(image).toMatchImageSnapshot();
});