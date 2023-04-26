

/// <reference types="cypress"/>
/// <reference types="cypress-xpath"/>


describe('AmazonApp', function(){

    it('verifySearch Functionality', ()=>{

        let searchItem = 'iphone 14'

        cy.visit('https://www.amazon.in/')

        cy.get('input#twotabsearchtextbox').clear().type(searchItem)

        cy.get('input#nav-search-submit-button').click()

        //validation step
        cy.title().should('contain',searchItem)
    })

    it('xpath', ()=> {

        cy.visit("https://www.amazon.in")
        cy.xpath('//input[@id="twotabsearchtextbox"]').type("Miko Lightyear{enter}")

    })



})