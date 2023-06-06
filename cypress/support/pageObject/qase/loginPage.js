class LoginPage {
    emailInputField() {
        return cy.get(':nth-child(1) > .NgMoob > .YDBDJ5');
    }
    passwordInputField() {
        return cy.get(':nth-child(2) > .NgMoob > .YDBDJ5');
    }
    loginButton() {
        return cy.get('.j4xaa7');
    }
    verifyUserIsOnLoginPage(){
        this.emailInputField().should('be.visible');
        this.passwordInputField().should('be.visible');
        this.loginButton().should('be.enabled');
    }
    login(){
        this.emailInputField().type('jotrucespa@gufum.com');
        this.passwordInputField().type('Kauc902e');
        this.loginButton().click();
    }

}
export default LoginPage;