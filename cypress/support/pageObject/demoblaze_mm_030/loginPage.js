class LogInPage{

    logInLabel(){
        return cy.get('#logInModalLabel');
    }

    usernameField(){
        return cy.get('#loginusername');
    }

    passwordField(){
        return cy.get('#loginpassword');
    }

    submitBtn(){
        return cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary');
    }


    checkLogInLabel(){
        this.logInLabel().should('have.text','Log in');
    }

    fillAndSubmitLogInForm(){
        this.checkLogInLabel();
        this.usernameField().clear().type('milorad5', {delay:1});
        this.passwordField().clear().type('milorad2', {delay:1});
        this.submitBtn().click();
    }

}

export default LogInPage;