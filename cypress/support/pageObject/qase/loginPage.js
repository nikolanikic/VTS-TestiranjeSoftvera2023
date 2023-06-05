class LoginPage {

    emailInputField() {
        return cy.get(':nth-child(1) > .NgMoob > .YDBDJ5');
    }

    passwordInputField () {
        return cy.get(':nth-child(2) > .NgMoob > .YDBDJ5');
    }

    loginButton () {
        return cy.get('.j4xaa7');
    }

    verifyUserIsOnLoginPage () {
        this.emailInputField().should('be.visible');
        this.passwordInputField().should('be.visible');
        this.loginButton().should('be.enabled');
    }

    login() {
        this.emailInputField().type('tohiy46020@pyadu.com');
        this.passwordInputField().type('qase1234');
        this.loginButton().click();
    }
}

export default LoginPage;