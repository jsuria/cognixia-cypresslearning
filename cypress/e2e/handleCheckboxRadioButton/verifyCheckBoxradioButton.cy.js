



/// <reference types="cypress"/>



describe('checkBox/RadioButton Example', function () {


    it('checkbox ', function () {
        cy.visit('http://only-testing-blog.blogspot.com/2013/11/new-test.html')

        cy.get('[value="Bike"]').should('be.visible')
        
        cy.get('[value="Bike"]').check().should('be.checked')

        cy.get('[value="Bike"]').uncheck().should('not.be.checked')


        //select multiple checkbox at same time
        cy.get('[name="vehicle"]').check().should('be.checked')

    })

    it('radioButton ', function () {
        cy.visit('http://only-testing-blog.blogspot.com/2013/11/new-test.html')

        
        cy.get('[value="female"]').should('be.visible')
        cy.get('[value="female"]').check().should('be.checked')
        
        cy.get('[value="male"]').should('not.be.checked')            //positive test scenario


    })


})