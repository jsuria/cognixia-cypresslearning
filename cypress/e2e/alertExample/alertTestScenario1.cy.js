
/// <reference types="cypress"/>



describe('Alert Example', function(){


    // it('handle alert', function(){


    //     cy.visit('http://only-testing-blog.blogspot.com/2013/11/new-test.html')


    //     cy.get('[value="Show Me Alert"]').click()


    //     //handle alert

    //     //cypress - automatically handle an alert ------ perform ok button on alert



    // })



    it('handle alert - confirm', function(){


        cy.visit('http://www.uitestpractice.com/Students/Switchto')


        cy.viewport(1200, 1200)

        cy.viewport('iphone-xr')

        cy.get('button#alert').click()


        //handle alert

        //cypress - automatically handle an alert ------ perform ok button on alert



        
        


    })


})