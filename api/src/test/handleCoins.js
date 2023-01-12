const puppeteer = require('puppeteer');
var ncp = require("copy-paste");
const fs = require('fs').promises; //for working with files
const { minimal_args } = require('./minimal_args')

//load cookie function
const loadCookie = async (page) => {
    const cookieJson = await fs.readFile('cookies.json');
    const cookies = JSON.parse(cookieJson);
    await page.setCookie(...cookies);
}

//save cookie function
const saveCookie = async (page) => {
    const cookies = await page.cookies();
    const cookieJson = JSON.stringify(cookies, null, 2);
    await fs.writeFile('cookies.json', cookieJson);
}

// //history
// const newReport = (report) => {
//     fs.writeFile('history.txt', report,  {'flag':'a'},  function(err) {
//         if (err) {
//             return console.error(err);
//         }
//     });
// }


// const successMessage = `FICHAS CARGADAS!!
// GRACIAS POR CONFIAR🫶🏻🥳🥳🥳
// `

// main function
const handleCoins = async (name, quantity) => {

    // Login
    const browser = await puppeteer.launch({ headless: true, args: minimal_args });
    const page = await browser.newPage()
    try { await loadCookie(page) } catch (error) { console.log(error) }

    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36');

    await page.goto("https://admin.jugalo.net/dashboard.php");

    const button = await page.$("#dologin");

    if (button) {
        try { await page.type('#user', "dialoco9") } catch (error) { console.log(error) }

        try { await page.type('#passwd', "casino1") } catch (error) { console.log(error) }

        try {
            console.log('Logueando...')
            await button.evaluate(b => b.click());
            await page.waitForNavigation()
        } catch (error) {
            console.log('\033[2J');
            console.log(error)
        }

        await saveCookie(page)
    }

    // Actions

    try {

        await page.waitForSelector('#UserSearch')

        await page.type("#UserSearch", name)

        await page.click("#UserSearchDiv > div > div.col-2.offset-1.mt-3 > button")

        await page.waitForTimeout(1000)

        await page.waitForSelector('#ModalCreditAmount')

        await page.click("#ModalCreditContent > div.row.mb-4.px-0 > div.input-group.col-8.col-xl-8.pr-1")

        await page.evaluate(() => document.getElementById("ModalCreditAmount").value = "")

        await page.type("#ModalCreditAmount", quantity)

        await page.click("#ModalCreditSubmit")

        // let report = `${new Date().toLocaleString()} // SUCCESS // ${quantity} fichas cargadas a ${name} \n`
        // newReport(report)

        // ncp.copy(successMessage, function () {
        //     console.log(`${new Date().toLocaleString()} // ${quantity} fichas cargadas a ${name}`)
        // })

        await browser.close()
        return name
        // return successMessage


    } catch (error) {
        console.log(error.message)        
        // let report = `${new Date().toLocaleString()} // ERROR // ${error.message} \n`
        // newReport(report)
        await browser.close()
        return 'ERROR: Verifica usuario y cantidad de fichas'
    }





}


module.exports = { handleCoins }
