

/// <reference types="cypress"/>



describe('checkBox/RadioButton Example', function () {


    it('checkbox ', function () {
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')

        cy.get('#wednesday').should('be.visible')
        
        cy.get('#wednesday').check().should('be.checked')

        cy.get('#wednesday').uncheck().should('not.be.checked')


        //select multiple checkbox at same time
        cy.get('.form-check-input[type="checkbox"]').check().should('be.checked')

    })

    it.skip('radioButton ', function () {
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')

        
        cy.get('#female').should('be.visible')
        cy.get('#male').should('be.visible')

        cy.get('#female').check().should('be.checked')
        
        cy.get('#male').should('not.be.checked')            //positive test scenario


    })


})