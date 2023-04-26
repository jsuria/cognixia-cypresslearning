
/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

// const { describe } = require('mocha')
const x = require('../../config/data.json')

describe('NOP Comm', function(){

 /*    it('verify login feature', ()=>{

        cy.visit(x.appURL_HRM)


        cy.title().should('eq', 'OrangeHRM')

        //by default -------- identiifcation ------- css
        //cy.get('').click()
        //cy.get('.button-1').click()

        //class="email valid"
        //cy.get('input[class="valid"]').clear()

        //cy.get('.valid').first().clear()

        cy.get('input[name="username"]').clear().type(x.hrm_user).should('have.value', 'Admin')
        //cy.get('input[name="password"]').clear().type(x.hrm_pass)


        cy.get('input[name="password"]').clear().type(x.hrm_pass).should('have.value', 'admin123')

        cy.get('[type="submit"]').click()
        

        cy.title().should('eq', 'OrangeHRM')
        cy.url().should('contain', 'dashboard')

        cy.xpath('//li[@class="oxd-userdropdown"]').click()
        // timeout or wait isn't advised; do a delay operation, ie verify DOM is visible

        cy.xpath('//a[contains(text(),"Logout")]').click()


    })

    it('verify login feature (xpath)', ()=> {
        cy.visit(x.appURL_HRM)

        cy.title().should('eq', 'OrangeHRM')
            cy.url().should('contain', 'auth/login')

        cy.xpath('//input[@name="username"]').type("Admin{enter}")
        cy.xpath('//input[@type="password"]').type("admin123{enter}")

        cy.xpath('//button[@type="submit"]').click()

        cy.title().should('eq', 'OrangeHRM')
        cy.url().should('contain', 'dashboard')

        // logout
        //cy.xpath('//a[@role="menuitem"]').click()

        cy.xpath('//a[contains(text(),"Logout")]').click()

    }); */

    it('xpath selectors for login', () => {

        cy.visit(x.appURL_HRM)

        cy.xpath('//input[@name="username"]').type("Admin")
        cy.xpath('//input[@type="password"]').type("admin123")

        cy.xpath('//div[@class="orangehrm-login-forgot"]').click()

        cy.title().should('eq', 'OrangeHRM')
        cy.url().should('contain', 'requestPasswordResetCode')

        // logout
        //cy.xpath('//a[@role="menuitem"]').click()
        cy.screenshot()

    })

    it('xpath selectors for login - containss', () => {

        cy.visit(x.appURL_HRM)

        cy.xpath('//input[@name="username"]')
            .should('be.visible')
            .type("Admin")
        cy.xpath('//input[@type="password"]')
            .should('be.visible')
            .type("admin123")

        cy.xpath('//div[@class="orangehrm-login-forgot"]')
            .should('be.visible')
            .contains('Forgot your password?')
            .click()

        cy.title()
            .should('eq', 'OrangeHRM')
        
        cy.url().should('contain', 'requestPasswordResetCode')

        // logout
        //cy.xpath('//a[@role="menuitem"]').click()
        cy.screenshot()

    })


})