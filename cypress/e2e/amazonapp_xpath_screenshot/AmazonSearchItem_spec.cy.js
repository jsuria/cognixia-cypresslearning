describe('amazon xpath screenshot', () => {


    // search
    // click on search
    // verify title or url
    // take screenshot
    // //input[@id="nav-search-submit-button"]
    // nav-search-submit-button
    it('verify search item', () => {
        cy.visit("https://www.amazon.in")
        cy.xpath('//input[@id="twotabsearchtextbox"]').type("iphone 14{enter}")

        cy.title().should('contains', 'iphone 14')
        cy.title().url('contains', 'iphone+14')

        cy.screenshot()

        cy.xpath('//input[@id="nav-search-submit-button"]').click()

    })


})