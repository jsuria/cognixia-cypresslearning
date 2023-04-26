describe('multiple selections',() => {

    it('verify dropdown', () => {
        cy.visit('http://only-testing-blog.blogspot.com/2013/11/new-test.html')

        // force is useful for hidden/overlapping elements
        cy.get('select[name="FromLB"]').select([3,4, 'Italy'], { force: true })

    })

    it('verify dropdown dummy', () => {
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')

        // force is useful for hidden/overlapping elements
        //cy.get('select[name="FromLB"]').select([3,4, 'Italy'], { force: true })

        //cy.get('select2 select2-container')
    })

    it('verify wikipedia', ()=>{

        cy.visit('https://www.wikipedia.org/')


        let searchItem = 'Delhi'

        cy.get('input#searchInput').clear().type(searchItem)



        //validation ----- autosuggestion count

        cy.get('h3.suggestion-title').should('have.length', 6)
        cy.get('h3.suggestion-title').should('have.length.greaterThan', 4)


        //cy.get('h3.suggestion-title').contains('Delhi University')


        cy.get('h3.suggestion-title').contains('Delhi University').click();

        //validation
        cy.title()
            .should('eq', 'Delhi University - Wikipedia')
            .should('contain', 'Delhi University')
            .should('not.eq', 'India')               //negative testing


        cy.url()
            .should('eq', 'https://en.wikipedia.org/wiki/Delhi_University')
            .should('contain', 'Delhi_University')
            .should('not.eq', 'India')               //negative testing
    })

    it('verify amazon.in', ()=>{

        cy.visit('https://www.amazon.in/ref=nav_logo')

        cy.get('.a-link-normal.see-more.truncate-1line')
          .eq(16)
          .contains('See all offers')
          .click({ force: true })

        cy.title()
            .should('eq', 'Daily Essentials')

        cy.get('.image-overlay-text')
            .should('contain', 'Everyday')
            .should('contain', 'essentials')
        
    })



})