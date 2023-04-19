
/// <reference types="cypress" />


// const { describe } = require('mocha')
const x = require('../../config/data.json')



describe('NOP Comm', function(){

    it('verify login feature', ()=>{

        cy.visit(x.appURL_QA)


        cy.title().should('eq', 'Your store. Login')

        //by default -------- identiifcation ------- css
        //cy.get('').click()
        //cy.get('.button-1').click()

        //class="email valid"
        //cy.get('input[class="valid"]').clear()

        //cy.get('.valid').first().clear()

        cy.get('input[data-val-required="Please enter your email"]').clear().type('edward@edward.com')

        //cy.title().should('eq', 'Dashboard / nopCommerce administration')

    })


})