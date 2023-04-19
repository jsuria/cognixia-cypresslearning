
/// <reference types="cypress" />


// const { describe } = require('mocha')
const x = require('../../config/data.json')



describe('NOP Comm', function(){

    it('verify login feature', ()=>{

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

    })


})