

/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe('Verify NOP Comm Login',()=>{

    //hooks
    beforeEach(()=> { 
        cy.log(`Executing the Before each`)
        cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
    })

    it.skip('verifyLogin and Logout with valid user credenatils', () => {

        cy.get('input#Email').clear().type('admin@yourstore.com')
        cy.get('#Password').clear().type('admin')
        cy.get('#RememberMe').check().should('be.checked')
        cy.get('button').contains('Log in').click()

        //validation
        cy.title().should('eq', 'Dashboard / nopCommerce administration')

    })

    it('verifyLogin and Logout with valid user credenatils - Page Object Model', () => {

        //cy.fixture('data').as('nopCommerce')

        cy.fixture('data').then((nopCommerce)=> {

            cy.log(`username: ${nopCommerce.username}`)
            cy.log(`password: ${nopCommerce.password}`)
            
            cy.TestLoginPage({
                email: nopCommerce.username,
                password: nopCommerce.password,
                title: "Login",
                button: "button.button-1"
            })

            // //validation
            //cy.title().should('eq', 'Dashboard / nopCommerce administration')
        })


    })


})

