class HomePage {

    //Lokatori
    demoblazeLogo() {
        return cy.get('#nava');
    }

    homeBtn() {
        return cy.get('.active > .nav-link');
    }

    categoriesMenu() {
        return cy.get('#cat');
    }

    signUpBtn() {
        return cy.get('#signin2');
    }

    logInBtn() {
        return cy.get('#login2');
    }

    adBanner() {
        return cy.get('.active > .d-block');
    }

    nextBtnAdBanner() {
        return cy.get('.carousel-control-next');
    }

    checkLogoText() {
        this.demoblazeLogo().contains('PRODUCT STORE');
    }

    checkHomeBtnIsDisplayed() {
        this.homeBtn().contains('Home');
    }

    checkCatIsDisplayed() {
        this.categoriesMenu().should('have.text', 'CATEGORIES');
    }

    clickSignUpBtn() {
        this.signUpBtn().click();
    }

    clickLogInBtn() {
        this.logInBtn().click();
    }

    checkAdBannerFirstPage() {
        this.adBanner().invoke('attr', 'alt').should('eq', 'First slide');
    }

    clickNextBtnAdBanner() {
        this.nextBtnAdBanner().click();
    }

    checkAdBannerSecondPage() {
        this.adBanner().invoke('attr', 'alt').should('eq', 'Second slide');
    }
}

export default HomePage;