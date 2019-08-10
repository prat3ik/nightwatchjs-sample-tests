/**
 * Page object for github test
 */
module.exports  = {

    url: 'http://testing-ground.scraping.pro',

    elements: {

        logIn: {

            selector: 'a[href="login"]'
        },

        username: {

            selector: '#usr'
        },

        password: {

            selector: '#pwd'

        },
        loginButton: {

            selector: 'input[type="submit"]'
        },
        successMessage: {

            selector: '.success'
        }
    }
}
