describe('xpath - Click Shop Now', () => {

    it('homepage', () => {
        cy.visit("https://www.amazon.in")

        cy.xpath('//h2[contains(text(),"Bluetooth Calling")]/parent::div/following-sibling::div/following-sibling::div/child::a')
          .click()

    })

})