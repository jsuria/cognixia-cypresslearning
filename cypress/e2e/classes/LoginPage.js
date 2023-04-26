class Login {

    //Identification

    txtEmail = 'input#Email'
    txtPass = 'input#Email'

    //Methods
    enterEmail(emailID){
        cy.get(this.txtEmail).clear().type(emailID)
    }

    enterPassword(passwordText){
        cy.get(this.txtEmail).clear().type(passwordText)
    }

    clickLoginButton(buttonSelector){
        cy.get(buttonSelector).click()
    }
}

export default Login;