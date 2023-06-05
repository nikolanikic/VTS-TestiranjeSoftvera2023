class LoginPage {

    emailInputField() {
        return cy.get('[name="email"]');
    }

    passwordInputField(){
        return cy.get('[name="password"]');
    }

    loginButton(){
        return cy.get('[type="submit"]');
    }

    verifyUserIsOnLoginPage(){
        this.emailInputField().should('be.visible');
        this.passwordInputField().should('be.visible');
        this.loginButton().should('be.enabled');
    }

    login(){
        this.emailInputField().type('nikolanikic11@gmail.com');
        this.passwordInputField().type('VTS2023Test');
        this.loginButton().click();
    }



}

export default LoginPage;