
/// <reference types="cypress"/>


describe('dropdrown example', function(){

    it.skip('dropdown- select tag', ()=>{


        cy.visit('https://www.zoho.com/commerce/free-demo.html')


        cy.get('#zcf_address_country')
            .select('Canada')
            .should('have.value', 'Canada')



        //index
        cy.get('#zcf_address_country')
            .select(3)
            .should('have.value', 'Algeria')


    })


    it.skip('dropdown- select tag ---- Andorra', ()=>{


        cy.visit('https://www.zoho.com/commerce/free-demo.html')


        
        //index
        cy.get('#zcf_address_country')
            .select(5)
            .should('have.value', 'Andorra')


    })



    it.only('dropdown- without select tag / using Keyboard operation', ()=>{


        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')


        
        //index
        cy.get('#select2-billing_country-container').click()


        //enter value and perform enter keyboard operation
        cy.get('.select2-search__field').type('Italy').type('{enter}')


        //validation step
        cy.get('#select2-billing_country-container').should('have.text', 'Italy')


    })


})