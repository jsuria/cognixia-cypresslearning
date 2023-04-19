

/// <reference types="cypress" />


describe('FixtureDemo', ()=>{


    before(function(){

        cy.fixture('config.json').then(  function(nopComm) {

            this.nopComm =  nopComm;


        } )

    })


    it('verify NOP comm app login feature', function(){

        cy.visit(this.nopComm.appURL)
        cy.log(this.nopComm.email)
        cy.log(this.nopComm.pass)


        cy.get('#Email').clear().type(this.nopComm.email).should('have.value', this.nopComm.email)
        cy.get('.password').clear().type(this.nopComm.pass).should('have.value', this.nopComm.pass)


    })


})