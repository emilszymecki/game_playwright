const { chromium } = require('playwright');
const { data } = require('./data');

(async (data) => {
	const dataLabel = [ 'EIN', 'Company Name', 'Sector', 'Address', 'Automation Tool', 'Annual Saving', 'Date' ];

	const browser = await chromium.launch({ headless: false, slowMo: 30});
	const page = await browser.newPage();

	await page.goto('https://www.theautomationchallenge.com/');
	// Click text=SIGN UP OR LOGIN
	
	await page.click('text=SIGN UP OR LOGIN');
	//await page.locator('text=By signing up, I agree to the').waitFor();
	await page.waitForSelector('text=By signing up, I agree to the');
	await page.waitForTimeout(1000);
	await page.click('xpath=/html/body/div[7]/div/div/div[3]/div[7]/div/button')
	await page.waitForTimeout(1000);
	//await page.click('button >> text=/^OR LOGIN$/');
	// Click [placeholder="Email"]
	await page.click('[placeholder="Email"]');
	// Fill [placeholder="Email"]
	await page.fill('[placeholder="Email"]', 'emilszymecki@gmail.com');
	// Click [placeholder="Password"]
	await page.click('[placeholder="Password"]');
	// Fill [placeholder="Password"]
	await page.fill('[placeholder="Password"]', 'RELU2rXya9RwQQ7');
	// Click button:has-text("LOG IN")
	await page.click('button:has-text("LOG IN")');
	await page.waitForTimeout(1000);
	// Click button:has-text("Start")
	const cover = await page.locator('.greyout');
	const popup = await page.locator('.Popup');
	cover.evaluateAll((x) => x.forEach((el) => el.remove()));
	popup.evaluateAll((x) => x.forEach((el) => el.remove()));
	await page.click('button:has-text("Start")');

	

	for (let index = 0; index < data.length; index++) {
		const elementData = data[index];

		const groupElement = await page.locator(
			'body > div.main-page.bubble-element.Page > div:nth-child(2) > div > .Group:visible >> nth=0'
		);
		const btn_submit = await groupElement.locator('button:has-text("Submit"):visible');

		await groupElement.locator(`.Group:visible`).evaluateAll((x,elementData) => x.forEach(el => {
			var input = el.querySelector('input');
			var event = new Event('change');
			if(input != null){
				var label = el.querySelector('.content').innerText;
				//input.value = 'valueInput';
				input.value = elementData[label];
				input.dispatchEvent(event);
			}
		}),elementData);


		await btn_submit.click();
		await groupElement.isHidden();

		const groupElementNext = await page.locator(
			'body > div.main-page.bubble-element.Page > div:nth-child(2) > div > .Group:visible >> nth=0'
		);
		//await groupElementNext.isVisible();
	}
	//await browser.close();
})(data);

//document.querySelector("body > div:nth-child(10) > div > div > div:nth-child(3) > div:nth-child(7) > div > button")
