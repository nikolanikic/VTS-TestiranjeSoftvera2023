class LoginPage {

    emailInputField() {
        return cy.get('#inputEmail');
    }

    passwordInputField () {
        return cy.get('#inputPassword');
    }

    loginButton () {
        return cy.get('#btnLogin');
    }

    verifyUserIsOnLoginPage () {
        this.emailInputField().should('be.visible');
        this.passwordInputField().should('be.visible');
        this.loginButton().should('be.enabled');
    }

    login() {
        this.emailInputField().type('apavicevic.vtskg@gmail.com');
        this.passwordInputField().type('borkopavicdorijan');
        this.loginButton().click();
    }
}

export default LoginPage;