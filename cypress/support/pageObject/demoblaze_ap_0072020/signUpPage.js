class SignUpPage {

    // metoda za proveru sign up teksa i provera
    signUpLabel() {
        return cy.get('#signInModalLabel');
    }

    checkSignUpLabel() {
        this.signUpLabel().should('have.text', 'Sign up');
    }


    // username, password i submit i njihova provera
    userNameField() {
        return cy.get('#sign-username');
    }

    passwordField() {
        return cy.get('#sign-password');
    }

    submitButton() {
        return cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary');
    }

    populateAndSubmitSignUpForm() {
        this.userNameField().type('apavicevic');
        this.passwordField().type('apavicevic');
        this.submitButton().click({ force: true });
    }

}

export default SignUpPage;