class HomePage {

    demoblazeLogo() {
        return cy.get('#nava');
    }

    homeButton() {
        return cy.get('.active > .nav-link');
    }

    categoriesMenu() {
        return cy.get('#cat');
    }

    signUpButton(){
        return cy.get('#signin2');
    }

    loginButton(){
       return cy.get('#login2');
    }

    product(){
        return cy.get(':nth-child(3) > .card > .card-block > .card-title > .hrefch');
    }







    checkLogoText() {
        this.demoblazeLogo().contains('PRODUCT STORE');
    }

    checkHomeButtonIsDisplayed() {
        this.homeButton().contains('Home');
    }

    checkCategoriesMenuIsDisplayed() {
        this.categoriesMenu().should('have.text', 'CATEGORIES');
    }
    clickSignUpButton(){
        this.signUpButton().click();
    }
    clickLoginButton(){
        this.loginButton().click();
    }

    clickProduct(){
        this.product().click();
    }


}
export default HomePage;