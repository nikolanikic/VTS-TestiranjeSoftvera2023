class HomePage {

    //Locators
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

    //Finds the ad banner (slide show)
    adBanner() {
        return cy.get('.active > .d-block');
    }

    //Finds the next button for the ad banner
    nextBtnAdBanner() {
        return cy.get('.carousel-control-next');
    }

    //Methods/checks
    //Checks if the logo is displayed
    checkLogoText() {
        this.demoblazeLogo().contains('PRODUCT STORE');
    }

    //Checks if the home button is displayed
    checkHomeBtnIsDisplayed() {
        this.homeBtn().contains('Home');
    }

    //Checks if catagories menu is displayed
    checkCatIsDisplayed() {
        this.categoriesMenu().should('have.text', 'CATEGORIES');
    }

    //Clicks on signup button
    clickSignUpBtn() {
        this.signUpBtn().click();
    }

    //Clicks on login button
    clickLogInBtn() {
        this.logInBtn().click();
    }

    //Checks if the first ad panel is first slide
    checkAdBannerFirstPage() {
        this.adBanner().invoke('attr', 'alt').should('eq', 'First slide');
    }

    //Clicks on the next button to change the current ad
    clickNextBtnAdBanner() {
        this.nextBtnAdBanner().click();
    }

    //Checks if the first ad panel is second slide
    checkAdBannerSecondPage() {
        this.adBanner().invoke('attr', 'alt').should('eq', 'Second slide');
    }
}

export default HomePage;