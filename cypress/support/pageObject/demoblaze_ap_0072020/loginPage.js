class LoginPage {

    loginLabel () {
        return cy.get('#logInModalLabel');
    }

    usernameField () {
        return cy.get('#loginusername');
    }

    passwordField () {
        return cy.get('#loginpassword');
    }

    submitButton () {
        return cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary');
    }


    fillAndSubmitForm () {
        this.loginLabel().should('have.text', 'Log in');
        this.usernameField().clear().type('apavicevic', {delay: 100});
        this.passwordField().clear().type('apavicevic', {delay: 100});
        this.submitButton().click();
    }

}

export default LoginPage;