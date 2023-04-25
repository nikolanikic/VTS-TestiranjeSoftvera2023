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

    signUpButton() {
        return cy.get('#signin2');
    }

    logInButton() {
        return cy.get('#login2');
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

    clickSignUpButton() {
        this.signUpButton().click();
    }

    clickLogInButton() {
        this.logInButton().click();
    }

}

export default HomePage;