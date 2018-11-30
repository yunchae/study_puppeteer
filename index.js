const puppeteer = require('puppeteer')

puppeteer.launch()
.then(browser => {
    return browser.newPage()
        .then(page => {
            return page.goto('https://www.designandarchi.com/doa')
                .then(() => page.screenshot({path: 'images/daam.png'}))
        })
        .then(() => browser.close())
})