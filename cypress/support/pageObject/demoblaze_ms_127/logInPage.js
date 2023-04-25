class LogInPage {

    logInLabel() {
        return cy.get('#logInModalLabel');
    }

    usernameField() {
        return cy.get('#loginusername');
    }

    passwordField() {
        return cy.get('#loginpassword');
    }

    submitButton() {
        return cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary');
    }

    checkLogInLabel() {
        this.logInLabel().should('have.text', 'Log in');
    }

    fillAndSubmitLogInForm() {
        this.checkLogInLabel();
        this.usernameField().clear().type('mihajlos', {
            delay: 1
        });
        this.passwordField().clear().type('123456', {
            delay: 1
        });
        this.submitButton().click();
    }


}

export default LogInPage;