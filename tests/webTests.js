module.exports = {
    'Demo test for Login' : function (browser) {
        const driver = browser.page.loginPo();
        const username = browser.globals.data.username;
        const password = browser.globals.data.password;
        driver.navigate();
        driver.waitForElementVisible('body', 3000);
        driver.click('@logIn');
        driver.setValue('@username', username);
        driver.setValue('@password', password);
        driver.click('@loginButton');
        // Static wait:
        // browser.pause(2000);
        driver.assert.containsText('@successMessage', 'WELCOME :)');
        browser.end();
    }
};