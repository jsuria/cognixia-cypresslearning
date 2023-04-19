
/// <reference types="cypress"/>



describe('Alert Example', function(){


    // it('handle alert', function(){


    //     cy.visit('http://only-testing-blog.blogspot.com/2013/11/new-test.html')


    //     cy.get('[value="Show Me Alert"]').click()


    //     //handle alert

    //     //cypress - automatically handle an alert ------ perform ok button on alert



    // })



    it('handle alert - confirm', function(){


        cy.visit('http://only-testing-blog.blogspot.com/2013/11/new-test.html')


        cy.get('button[onclick="myFunction()"]').click()


        //handle alert

        //cypress - automatically handle an alert ------ perform ok button on alert



        
        //First Name text field
        cy.get('input[name=fname]')
        .should('not.have.value')
        .should('be.enabled')
        .type('Steven')
        .should('have.value','Steven');



    })


})