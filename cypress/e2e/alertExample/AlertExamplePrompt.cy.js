describe('Alert', function(){


    it('Alert Example - prompt - enter value', function () {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        //generate an alert --- click on 
        //enter the value into prompt alert
        
        

        cy.window().then(  (win) => {

            cy.stub(win, 'prompt').returns('Iphone 14')   


        })


        //cy.handlePrompt();


        cy.get('button[onclick="jsConfirm()"]').click()

        //handle automatically 

        //validation step
        cy.get('#result').should('have.text', 'You clicked: Ok')




        cy.get('button[onclick="jsPrompt()"]').click()


        //validate alert text
        cy.on('window:prompt', ( alert) => {

            
            expect(alert).to.contains('I am a JS prompt')

        })


        //cypress closes alert window using cancel button
        //cy.on('window:prompt', ()=> false)   //click on cancel button

        //validation step
        cy.get('#result').should('have.text', 'You entered: Iphone 14')



    })


})