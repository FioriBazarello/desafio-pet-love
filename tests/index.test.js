import puppeteer from 'puppeteer';

describe('Search for CEP', () => {
  test('Should search for a valid CEP', async () => {
    let browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
    });
  
    let page = await browser.newPage();
    await page.goto('http://localhost:3000');

    await page.type('#search-input', '01310200');
    await page.click('#search-submit-button');

    await page.waitForSelector('#result-card');

    const html = await page.$eval('#result-card', e => e.innerHTML);
    expect(html).toContain('Avenida Paulista');
  }, 30000);
});