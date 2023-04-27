

/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe('Verify NOP Comm Login',()=>{

    //hooks
    beforeEach(()=> { 
        cy.fixture('nopSelectors').then((nopValues)=> {
            cy.visit(nopValues.login.url)
        })
    })

    it('verifyLogin and Logout with valid user credenatils - Page Object Model', () => {
        // Get strings from nopSelectors.json
        cy.fixture('nopSelectors').then((nopValues)=> {
            cy.TestLoginPage(nopValues.login)     
            cy.TestCustomerMenu(nopValues.menu)
            cy.TestCustomerSearch(nopValues.search)
        })
    })


})

