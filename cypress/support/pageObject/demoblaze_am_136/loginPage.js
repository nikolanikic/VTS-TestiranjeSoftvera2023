class LoginPage{

    loginLabel(){
        return cy.get('#logInModalLabel');
    }
    usernameField(){
        return cy.get('#loginusername');
    }
    passwordField(){
        return cy.get('#loginpassword');
    }
    submitButton(){
        return  cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary');
    }




    checkLoginLabel(){
        this.loginLabel().should('have.text', 'Log in');
    }
    fillAndSubmitLoginForm(){
        this.checkLoginLabel();
        this.usernameField().clear().type('adelmurselji', { delay: 1 });
        this.passwordField().clear().type('adelmurselji', { delay: 1 });
        this.submitButton().click();
    }


}
export default LoginPage;