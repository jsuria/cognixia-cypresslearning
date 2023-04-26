/// <reference types="cypress"/>
/// <reference types="cypress-xpath"/>

describe('wishlist triggers', () => {

    it('mouseover context', () => {
        cy.visit("https://www.amazon.in")
        cy.get('a#nav-link-accountList')
            .should('be.visible')
            .trigger('mouseover')      

        // If we need to test    
        // cy.get('#nav-cover')
        //    .should('be.visible')

        cy.xpath("//span[text()='Create a Wish List']")
            .should('exist')
            .click()
    })

    it('mouseover context - demo99', () => {
        cy.visit("https://demo.guru99.com/test/simple_context_menu.html")
        cy.xpath("//span[contains(text(), 'right click')]")
            .rightclick()

        cy.get('body').click()

        cy.xpath("//button[contains(text(), 'Alert')]").trigger('dblclick')

        cy.on("window:alert", (alert) => {
            expect(alert).to.contain("clicked")
        })
    })
})