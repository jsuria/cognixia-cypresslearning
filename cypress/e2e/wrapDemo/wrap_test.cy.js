
describe('wrap basics', ()=>{

    it.skip('wrap 1', () => {
        const e_name="Mikosaurus Rex"
        cy.wrap(e_name).should('equal',"Mikosaurus Rex")
    })

    it.skip('wrap 2', () => {
        const e_name= { name: "Mikosaurus Rex" }
        cy.wrap(e_name).should('have.property', 'name', "Mikosaurus Rex")
    })


    it.skip('wrap 3: DOM', () => {
        cy.visit('http://localhost/apps/orangehrm/web/index.php/auth/login')

        cy.get('[name="username"]').should('be.visible')
                                   .then((obj)=>{

                    cy.wrap(obj).type("Mamaisnoisy")
                                .should('have.value',"Mamaisnoisy")
                                .should('have.attr',"placeholder")
                    cy.wrap(obj).invoke('val').should('equal', "Mamaisnoisy")
                                    
        })

    })

    it.skip('wrap 4: Promises', () => {
      
        const my_fake_request = (fake_request, ms_time = 3000) => {
            return new Promise(resolve=>{
                setTimeout(()=>{
                    console.log(`Promises finished. ${fake_request} is returned.`)
                    resolve({ 
                        name: fake_request,
                        ms: ms_time,
                        foo: 'ice-cream-api'
                    })
                }, ms_time)
            })
        }

        my_fake_request('/api/get-ice-cream', 5000).then((response)=>{
            console.log(response)

            cy.wrap(response).should('have.property','name', '/api/get-ice-cream')
            cy.wrap(response).should('have.property','ms', 5000)
            cy.wrap(response).should('have.property','foo', 'ice-cream-api')
        })
    })

    it('wrap 5: Validate', () => {
        cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')

        cy.get('form').should('be.visible').then((obj)=>{
                    cy.wrap(obj).find('input#Email').clear()
                                                    .type("Mamaisnoisy")
                                                    .should('have.value',"Mamaisnoisy")
                                                    .invoke('val').should('equal', "Mamaisnoisy")

                    cy.wrap(obj).find('input#Password').clear()
                                                    .type("Secretsssssh")
                                                    .should('have.value',"Secretsssssh")
                                                    .invoke('val').should('equal', "Secretsssssh")

                    cy.wrap(obj).find('input#RememberMe').check()
                                                    .should('be.checked')

                    cy.wrap(obj).find('button').should('be.visible')
                                               .should('have.text','Log in')
                                               .should('not.be.disabled')          
        })
    })

    it('Iframe using plugin', () => {
        cy.visit('http://the-internet.herokuapp.com/iframe').then((response)=>{
            cy.frameLoaded('#mce_0_ifr')
            cy.iframe().find('p').should('be.visible')
                             .should('have.text','Your content goes here.')
        })
    })

    it('Iframe without plugin', () => {
        cy.IframeEditor({
            url: 'http://the-internet.herokuapp.com/iframe',
            editor_text: "Hello world!",
            iframe: '#mce_0_ifr',
            editor_button: 'button[title="Bold"]'
        })
    })

    it('cy.window()', () => {
        cy.visit('http://the-internet.herokuapp.com/iframe').then((response)=>{
            cy.window().then((win)=>{
                expect(win.innerHeight).to.be.gt(0)
                expect(win.isSecureContext).to.be.false  
                
                const win_loc = win.location

                expect(win_loc.host).to.eq('the-internet.herokuapp.com')
                expect(win_loc.pathname).to.eq('/iframe')
                expect(win_loc.port).to.be.empty
            })
        })    
    })

    it('cypress direct window methods', () => {
        cy.visit('http://the-internet.herokuapp.com/iframe').then((response)=>{
            cy.location().then((prop)=>{
                expect(prop.host).to.eq('the-internet.herokuapp.com')
                expect(prop.pathname).to.eq('/iframe')
                expect(prop.port).to.be.empty
            })
        })    
    })
    
})