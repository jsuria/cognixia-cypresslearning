
const data = require('../testData/apiResponse.json')






describe('verify Amazon App', ()=> {


    it('verify app title', ()=>{


       // console.log("Application title of Amazon App");

        cy.visit(data.appURL)
       


    })



})