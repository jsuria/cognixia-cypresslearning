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
require('cypress-file-upload')

import Login from '../e2e/classes/LoginPage'
import Menu from '../e2e/classes/MenuPage'
import Search from '../e2e/classes/SearchPage'

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

// Custom iframe handler command
Cypress.Commands.add('customHandleIFrame', function(locatorFrame){

    return cy.get(locatorFrame)
            .its('0.contentDocument.body')
            .then(cy.wrap)
})

// My command to load the iframe editor
Cypress.Commands.add('IframeEditor', (params) => {

    cy.visit(params.url)

    const iframe = cy.customHandleIFrame(params.iframe)

    iframe.clear()
        .type(params.editor_text + '{selectAll}')

    cy.get(params.editor_button)
        .should('be.visible')
        .click()
})

// Code for verifying the element text using promises
Cypress.Commands.add('verifyElementText', (params) => {
  cy.get(params.selector).then((elem) => {
    expect(elem.text()).to.eq(params.text)
  })

})

// Command running the login page test
Cypress.Commands.add('TestLoginPage', (params) => {
    const loginPage = new Login(params)

    //validation
    loginPage.checkLoginTitle()
    loginPage.checkButtonText()
    loginPage.login()
    loginPage.checkDashboardTitle()
})

// Command running the customer menu test
Cypress.Commands.add('TestCustomerMenu', (params) => {
    const menuPage = new Menu(params)

    // Find customer items menu and click
    menuPage.clickParentMenu()
    menuPage.clickChildMenuItem()

})
// Command running customer search
Cypress.Commands.add('TestCustomerSearch', (params) => {
    const searchPage = new Search(params) 
    searchPage.search()
})

// Command running customer search
Cypress.Commands.add('TestFileUpload', (params) => {
  
})
