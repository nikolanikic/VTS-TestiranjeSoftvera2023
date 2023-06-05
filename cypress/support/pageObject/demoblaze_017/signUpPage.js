class SignUpPage{
    signUpLabel(){
        return cy.get('#signInModalLabel');
    }

    usernameField(){
        return cy.get('#sign-username');
    }
    passwordField(){
        return cy.get('#sign-password');
    }
    submitButton(){
       return cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary');
    }
    checkSignUpLabel(){
        this.signUpLabel().should('have.text', 'Sign up');
    }
    populateAndSubmitSignUpForm(){
        this.usernameField().type('aleksavlatkovic');
        this.passwordField().type('asdfgh');
        this.submitButton().click({force:true});

    }
}
export default SignUpPage;