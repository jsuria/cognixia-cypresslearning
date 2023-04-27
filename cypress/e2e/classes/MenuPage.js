class Menu {

    #xpath
    #parent_menu
    #child_menu_item
    #menu_text

    // initialize values in constructor
    constructor(params){
        this.#parent_menu = params.parent_item
        this.#child_menu_item = params.child_item
        this.#menu_text = params.text
        this.#xpath = params.xpath
    }

    // clicks the parent menu
    clickParentMenu(){
        this.#clickMenuItem(this.#parent_menu)
    }

    // clicks the child menu item
    clickChildMenuItem(){
        this.#clickMenuItem(this.#child_menu_item)
    }

    // private
    // base method for clicks
    #clickMenuItem(menu_selector){
        const cm = this.#xpath ? cy.xpath(menu_selector) : cy.get(menu_selector)
        cm.contains(this.#menu_text).click({force: true})
    }
}

export default Menu