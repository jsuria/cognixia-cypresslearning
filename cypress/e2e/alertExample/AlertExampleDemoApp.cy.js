/// <reference types="cypress" />


describe('Exercise', function () {

    before(function () {
        //cy.viewport("macbook-16")
        cy.viewport(1200, 1200)
        //visit the application url
        cy.visit('http://www.uitestpractice.com/Students/Switchto')

    })

    it('should trigger a confirmation with a message', () => {

        //press ok on alert
        cy.get('button[id=alert]').click();
        cy.get('div[id=demo]').should('have.text', 'You have clicked on ok button in alert window');


        //press cancel on prompt
        cy.get('button[id=confirm]').click()


        //click on ok button
        cy.on('window:confirm', (ele) => {

            //return false

            expect(ele).to.contain('Alert')
            

        });


        //click on cancel button
       // cy.on('window:confirm', () => false);
        
        
        
        //validate element text
        cy.get('div[id=demo]').should('have.text', 'You pressed Ok in confirm window');






        //enter name in prompt
        cy.window().then(function (p) {
            //cy.stub(p, "prompt").returns("Steve");

            cy.on('window:prompt', ( alert) => {

            
                expect(alert).to.contains('I am a JS prompt')
    
            })

            cy.get('button[id=prompt]').click()
            
            cy.on('window:prompt', ()=> false) 


            cy.get('div[id=demo]').should('have.text', 'Hello Steve! How are you today?');
        
        
        })

    })

})
