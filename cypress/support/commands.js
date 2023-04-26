// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

require('cypress-xpath')
require('cypress-iframe')
require('@4tw/cypress-drag-drop')

import Login from '../e2e/classes/LoginPage'

Cypress.Commands.add('LoginToWebsite', (params) => {
    
    cy.visit(params.url)

    cy.get(params.username_selector)
      .type(params.username_value)

    cy.get(params.password_selector)
      .type(params.password_value)

    cy.get(params.button_selector)
      .click()
})

Cypress.Commands.add('ClickLinkText', (params) => {
    cy.visit(params.url)

    cy.get('a')
      .contains(params.link_text)
      .click()
})

Cypress.Commands.add('DragDropElement', (params) => {
    cy.visit(params.url)

    const elem = params.xpath ? cy.xpath(params.drag_element) : cy.get(params.drag_element)

    elem
        .should('be.visible')
        .drag(params.drop_element, { force: params.force })
})



// Rajesh
Cypress.Commands.add('customHandleIFrame', function(locatorFrame){

    return cy.get(locatorFrame)
            .its('0.contentDocument.body')
            .then(cy.wrap)
})

Cypress.Commands.add('IframeEditor', (params) => {

    cy.visit(params.url)

    const iframe = cy.customHandleIFrame(params.iframe)

    iframe.clear()
        .type(params.editor_text + '{selectAll}')

    cy.get(params.editor_button)
        .should('be.visible')
        .click()
})

Cypress.Commands.add('TestLoginPage', (params) => {
    const loginPage = new Login()

    loginPage.enterEmail(params.email)

    //validation
    cy.title().should('contain', params.title)

    loginPage.enterPassword(params.password)
    loginPage.clickLoginButton(params.button)
})