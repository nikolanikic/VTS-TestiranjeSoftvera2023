/// <reference types="cypress" />

import SlideShow from "../../support/pageObject/demoblaze_ms_127/SlideShow";
import HomePage from "../../support/pageObject/demoblaze_ms_127/homePage";
import LogInPage from "../../support/pageObject/demoblaze_ms_127/logInPage";
import SignUpPage from "../../support/pageObject/demoblaze_ms_127/signUpPage";



describe("Demoblaze web shop", () => {

    const homePage = new HomePage();
    const signUpPage = new SignUpPage();
    const logInPage = new LogInPage();
    const slideShow = new SlideShow();

    it("User is able to load Demoblaze web shop", () => {
        cy.visit('https://www.demoblaze.com/');

        homePage.checkLogoText();
        homePage.checkHomeButtonIsDisplayed();
        homePage.checkCategoriesMenuIsDisplayed();
    });

    it("Alert is thrown when User already exists", () => {
        cy.visit('https://www.demoblaze.com/');
        homePage.clickSignUpButton();

        signUpPage.checkSignUpLabel();
        signUpPage.populateAndSubmitSignUpForm();

        cy.on('window:alert', (t) => {
            expect(t).to.contains('This user already exist.');
        });
    });

    it('User is able to login to Demoblaze web shop', () => {
        cy.visit('https://www.demoblaze.com/');
        homePage.clickLogInButton();
        logInPage.fillAndSubmitLogInForm();

    });


    it.skip("Adding product to cart", () => {
        cy.visit("https://www.demoblaze.com/");

        cy.get(':nth-child(3) > .card > .card-block .card-title > .hrefch').click();
        cy.get('.name').contains('Nexus 6');
        cy.get('.col-sm-12 > .btn').click();

        cy.get('#cartur').click();
        cy.get('#totalp').should('have.text', '650');
        cy.get('.col-lg-1 > .btn').click();

        cy.get('#totalm').contains('650');
        cy.get('#name').clear().type('Bojan Grkovic');
        cy.get('#country').clear().type('Serbia');
        cy.get('#city').clear().type('Kragujevac');
        cy.get('#card').clear().type('286741958634');
        cy.get('#month').clear().type('05');
        cy.get('#year').clear().type('24');

        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        cy.get('.confirm').click();
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click();
        cy.on('window:alert', (t) => {
            expect(t).to.contains('Product added');
        });

    });
    it("Check if slide is changed after click", () => {

        cy.visit("https://www.demoblaze.com/");
        slideShow.checkFirstSlide();
        cy.wait(4000);
        slideShow.checkSecondSlide();


    });


});