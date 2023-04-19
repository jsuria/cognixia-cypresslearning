

/// <reference types="cypress"/>


describe('AmazonApp', function(){


    it('verifySearch Functionality', ()=>{


        let serachItem = 'iphone 14'

        cy.visit('https://www.amazon.in/')

        cy.get('input#twotabsearchtextbox').clear().type(serachItem)

        cy.get('input#nav-search-submit-button').click()


        //validation step
        cy.title().should('contain',serachItem)



    })


})