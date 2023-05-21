class SignUpPage{

    singUpLabel(){
         return cy.get('#signInModalLabel');
    }

    usernameField(){
        return cy.get('#sign-username');
    }

    passwordField(){
        return cy.get('#sign-password');
    }

    submitBtn(){
        return cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary');
    }


    checkSignUpLabel(){
        this.singUpLabel().should('have.text', 'Sign up');
    }

    populateAndSubmitSignUpForm(){
        this.usernameField().type('milorad5');
        this.passwordField().wait(200).type('milorad2');
        this.submitBtn().click({force: true});
    }
}

export default SignUpPage;