class HomePage {

    // metoda za vraćanje logoa
    demoblazeLogo () {
        return cy.get('#nava');
    }

    // metoda za vraćanje Home dugmeta
    homeButton () {
        return cy.get('.active > .nav-link');
    }

    // metoda za vraćanje menija za kategorije
    categoriesMenu () {
        return cy.get('#cat');
    }

    signUpButton () {
        return cy.get('#signin2');
    }

    loginButton () {
        return cy.get('#login2'); 
    }

    // ***** PROVERA METODA *****

    // metoda za proveru teksta logoa 
    checkLogoText () {
        this.demoblazeLogo().contains('PRODUCT STORE');
    }

    // metoda za proveru prikaza Home dugmeta
    checkHomeButtonIsDisplayed () {
        this.homeButton().contains('Home');
    }

    // metoda za proveru kategorija menija
    checkCategories () {
        this.categoriesMenu().should('have.text', 'CATEGORIES');
    }

    // metoda za proveru otvaranja sign up forme
    clickSignUpButton () {
        this.signUpButton().click();
    }

    clickLoginButton () {
        this.loginButton().click();
    }
}


export default HomePage;