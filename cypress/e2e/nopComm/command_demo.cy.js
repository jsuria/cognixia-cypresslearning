describe('Command demo', () => {

    it('Clicking link with given text', () => {
        cy.ClickLinkText({
            url: "https://demo.nopcommerce.com/",
            link_text: "MacBook Pro 13-inch"
        })

        cy.url().should('contain', 'apple-macbook-pro-13-inch')
    })

    it('Drag and Drop demo', () => {
        cy.DragDropElement({
            url: "http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html",
            drag_element: '//div[@id="dropContent"]/descendant::div[text()="Stockholm"]',
            drop_element: 'div#countries',
            force: true,
            xpath: true
        })
    })

    it('Editor', () => {

        cy.IframeEditorAuto({
            url: 'http://the-internet.herokuapp.com/iframe',
            editor_text: "Hello world!",
            iframe: '#mce_0_ifr',
            editor_button: 'button[title="Bold"]'
        })

    })
})