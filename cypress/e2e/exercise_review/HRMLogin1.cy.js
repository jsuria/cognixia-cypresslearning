

/// <reference types="cypress"/>


const data = require('../../config/data.json')

describe('Launch NPO ECommerce Page', () => {

  it('ECommerce Page', () => {

    cy.visit(data.appURL)


    cy.url().should('eq',data.appURL)


    cy.title().should('contain','Your store')

    //cy.title().should('not.contain','Welcome')

    //Email Field
    cy.get('input[type=email]').clear().type('admin@yourstore.com').should('have.value','admin@yourstore.com')

    //Password Field
    cy.get('input[id*=Pass]').clear().type('admin')

    //cy.get('input[id^=Rem]').click()

    cy.get('input[id^=Rem]').should('not.be.checked')

    cy.get('input[id^=Rem]').check().should('be.checked')

    cy.get('input[id^=Rem]').uncheck().should('not.be.checked')

    cy.get('.button-1').click()


    cy.get('a[href*="logout"]').click()

    
    


  })
})
