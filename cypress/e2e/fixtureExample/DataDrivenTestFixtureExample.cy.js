
/// <reference types="cypress" />

describe('Fixture Example', function(){


    // it('nop comm app - DDT', ()=>{



    //     cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')


    //     cy.fixture('nopCommLogin.json').then(  (x)=> {

    //             cy.log(`enter email id: ${x.email}`)
    //             cy.get('#Email').clear().type(x.email)

    //             cy.log(`enter pass id: ${x.pass}`)
    //             cy.get('.password').clear().type(x.pass)

    //             // cy.get('.button-1').click()
    //             //.login-button
    //             cy.get('.login-button').click()




    //     }  )


    //fixture example --- using hooks

    var userData;

        before(function(){


            cy.fixture('nopCommLogin').then(function(data){

                userData = data;  

            })

        })



        it('Fixture Test Example', function(){


                cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')


                cy.log(`enter email id: ${userData.email}`)
                cy.get('#Email').clear().type(userData.email)


        })







    })



//})