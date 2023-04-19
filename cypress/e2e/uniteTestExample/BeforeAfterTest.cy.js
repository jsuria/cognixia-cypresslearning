

/// <reference types="cypress" />



//pre-condition
//test
//post-condition

describe('Unit Test Example', ()=>{


    

    it('testcase1', ()=>{

        console.log("test case 1 executed");
        cy.log("***********test case 1 executed*************")


    })


    before(  ()=>  {

        console.log("before part get executed");
        cy.log("***********before part get executed*************")
        cy.log("launch application")

        cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')

    })



    after(  function() {

        console.log("after part get executed");
        cy.log("***********after part get executed*************")
        cy.log("close the  application")

       

    })



})