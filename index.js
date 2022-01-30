const { chromium } = require('playwright');
const { data } = require('./data');

(async (data) => {

	const browser = await chromium.launch({ headless: false, slowMo: 50 });
	const page = await browser.newPage();

     await page.route('**/*', (route) => {
        return route.request().url().endsWith('recaptcha__pl.js') 
            ? route.abort()
            : route.continue()
    });

	await page.goto('https://www.theautomationchallenge.com/');
	// Click text=SIGN UP OR LOGIN
	await page.click('text=SIGN UP OR LOGIN');
	//await page.locator('text=By signing up, I agree to the').waitFor();
	await page.waitForSelector('text=By signing up, I agree to the');
	await page.click('button >> text=/^OR LOGIN$/');
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
	// Click button:has-text("Start")
	await page.click('button:has-text("Start")');

    const cover = page.locator('.greyout');
    cover.evaluateAll(x => x.forEach(el => el.remove()));

	for (let index = 0; index < data.length; index++) {
		const elementData = data[index];
		const btn_submit = page.locator('button:has-text("Submit"):visible');

		await btn_submit.isVisible();

        

		await page.evaluate( async (elementData) => {
            function waitFor(delay) {
                return new Promise(resolve => setTimeout(resolve, delay));
            }

			var getGroup = [ ...document.querySelectorAll('.Group') ].filter(
				(x) => x.style.display == 'block' && x.querySelector('input.bubble-element.Input')
			)[0];
			var getField = [ ...getGroup.querySelectorAll('.bubble-r-box .bubble-element .Group') ]
				.map((x) => [ x.querySelector('.content'), x.querySelector('input') ])
				.filter((x) => x[0]);

                for (const x of getField) {
                    var [ label, input ] = x;
                    var valueData = elementData[label.innerText];
                    input.value = valueData;
                    await waitFor(100);
                    input.dispatchEvent(new Event('change'));
                    await waitFor(100);
                }
			
			getGroup.querySelector('button').click();
		}, elementData);

		/*
        const elementsCount = await inputs.count();
        for (var i = 0; i < elementsCount ; i++) {
            const element = await inputs.nth(i);
            const label = await element.evaluate( x => x.parentNode.parentNode.parentNode.innerText )
            const fieldData = elementData[label];
            await element.fill(fieldData);
            
        }*/
		await btn_submit.click();
		await btn_submit.isHidden();
	}
	//await browser.close();
})(data);

//document.querySelector("body > div:nth-child(10) > div > div > div:nth-child(3) > div:nth-child(7) > div > button")
