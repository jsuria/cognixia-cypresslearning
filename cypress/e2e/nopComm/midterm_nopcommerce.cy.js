/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe('midterm - nopcommerce login validation', () => {

    beforeEach(() => {
        cy.viewport(1600, 900)
        cy.visit('https://admin-demo.nopcommerce.com/login')

        cy.xpath("//input[@id='Email']")
        .should('be.visible')
        .clear()
        .type('admin@yourstore.com')

        cy.xpath("//input[@id='Password']")
            .should('be.visible')
            .clear()
            .type('admin')

        // Ensure Remember Me checkbox is unchecked
        cy.xpath("//input[@id='RememberMe']")
            .should('be.visible')
            .should('not.be.checked')
            .check()

        cy.xpath("//button")
            .should('be.visible')
            .click()
    })

    it('login and validation', () => {

        
        // Validate window/tab title
        cy.title()
            .should('contain', 'Dashboard / nopCommerce administration')

        // Validate the page title header
        cy.xpath("//div[@class='content-header']")
            .should('be.visible')
            .should('contain','Dashboard')
        cy.screenshot()
    })

    it('customer search', () => {
        // Optional: Customer Menu and searching user
        cy.xpath('p[contains(text(),"Customers")]/parent::a[@href="#"]')
            //.should('exist')
            .contains('Customers')
            .click({ force: true })
        
        cy.xpath("//a[@href='/Admin/Customer/List']")
            //.should('exist')
            .contains('Customers')
            .click({ force: true })

        cy.xpath("//input[@id='SearchEmail']")
            .should('exist')
            .clear()
            .type('victoria_victoria@nopCommerce.com')

        cy.xpath("//button[@id='search-customers']")
            .should('be.visible')
            .click()

        cy.screenshot()
    })
        


})