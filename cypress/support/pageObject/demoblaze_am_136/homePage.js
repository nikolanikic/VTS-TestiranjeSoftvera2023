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

    loginButton() {
        return cy.get('#login2');
    }

    product() {
        return cy.get(':nth-child(3) > .card > .card-block > .card-title > .hrefch');
    }



    firstSlide() {
        return cy.get('.active > .d-block');
    }
    carouser() {
        return cy.get('.carousel-control-next-icon');
    }
    secondSlide() {
        return cy.get('.active > .d-block');
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
    clickLoginButton() {
        this.loginButton().click();
    }

    clickProduct() {
        this.product().click();
    }




    checkFirstSlide() {
        this.firstSlide().invoke('attr', 'alt').should('eq', 'First slide');
    }
    clickCarouser() {
        this.carouser().click();
    }
    checkSecondSlide() {
        this.secondSlide().invoke('attr', 'alt').should('eq', 'Second slide');
    }
    checkChange() {
        this.checkFirstSlide();
        this.clickCarouser();
        this.checkSecondSlide();
    }

}
export default HomePage;