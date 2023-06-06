class SignUpPage {

    signUpLabel() {
        return cy.get('#signInModalLabel');
    }
    usernameField() {
        return cy.get('#sign-username');
    }
    passwordField() {
        return cy.get('#sign-password');
    }
    submitButton() {
        return cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary');
    }


    checkSignUpLabel() {
        this.signUpLabel().should('have.text', 'Sign up');
    }
    populateAndSubmitSignUpForm() {
        this.usernameField().type('mihajlos');
        this.passwordField().type('123456');
        this.submitButton().click({
            force: true
        });
    }

}

export default SignUpPage;