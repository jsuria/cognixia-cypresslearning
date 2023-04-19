

/// <reference types="cypress" />


const x = require('../config/data.json')


// console.log(x.appURL_QA);

describe('Suite' , function(){


    it('TC_01', function(){

        //launch application
        cy.visit(x.appURL_QA);
        
        //validation Step  ---- URL
        cy.url().should('eq',x.appURL_QA)



        //Validation step ---- Title
        cy.title().should('eq', 'Your store. Login')

        cy.title().should('not.eq', 'Dashboard / nopCommerce administration')   //negative testing

        cy.title().should('contain', 'Login')
        cy.title().should('not.contain', 'Admin')                               //negative testing




        cy.title().should('include', 'Login')
            .and('eq', 'Your store. Login')
            .and('contain','Login')
            .and('not.contain', 'google')



    })

})