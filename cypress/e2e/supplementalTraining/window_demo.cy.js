describe('cy.window examples', () => {

    beforeEach('go to the page',() => {
        cy.visit('http://the-internet.herokuapp.com/iframe')
    })

    it('cy.window()', () => {
        cy.window().then((win)=>{
            expect(win.innerHeight).to.be.gt(0)
            expect(win.isSecureContext).to.be.false  
            
            const win_loc = win.location

            expect(win_loc.host).to.eq('the-internet.herokuapp.com')
            expect(win_loc.pathname).to.eq('/iframe')
            expect(win_loc.port).to.be.empty
        })
    })

    it('cypress direct window methods', () => {
        cy.location().then((prop)=>{
            expect(prop.host).to.eq('the-internet.herokuapp.com')
            expect(prop.pathname).to.eq('/iframe')
            expect(prop.port).to.be.empty
        })
    })


})