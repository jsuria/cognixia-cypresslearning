describe('browser tabs examples', () => {

    /* before('go to the page',() => {
        cy.visit('http://the-internet.herokuapp.com/windows')
    
    }) */

    it.skip('Remove target attr', () => {
        cy.get('a[href="/windows/new"]').invoke('removeAttr', 'target')
                                        .click()
                                 
        cy.title().should('contain', 'New Window')
    })

    it.skip('Using wait()', () => {
        cy.request('GET', 'http://the-internet.herokuapp.com/windows/new')
          .as('loadedPage')

        cy.wait('@loadedPage')
        cy.title().should('contain', 'New Window')
    })

    it.skip('child custom command', () => {
        cy.get('a[href="/windows/new"]').getText().as('getText')
        cy.get('@getText').should('eq', 'Click Here')
    })

    it.skip('dual custom command', () => {
        cy.log('as Child')
        cy.get('body').getLink().as('getText')
        cy.get('@getText').should('eq', 'Click Here')
        cy.log('as Parent')
        cy.getLink().as('getText')
        cy.get('@getText').should('eq', 'Click Here')
    })

    // WARNING: Only override if you know what you are doing!
    it('override existing cypress commands', ()=>{
        cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
        cy.get('input#Email').type('admindemo')
                             .should('have.value', 'admindemo')
    })


})