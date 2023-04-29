/// <reference types="cypress" />

import HomePage from "../../support/pageObject/demoblaze_am_136/homePage";
import LoginPage from "../../support/pageObject/demoblaze_am_136/loginPage";
import SignUpPage from "../../support/pageObject/demoblaze_am_136/signUpPage";

describe("Demoblaze web shop", () => {

    const homePage = new HomePage();
    const signUpPage= new SignUpPage();
    const loginPage= new LoginPage();

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
        // cy.get('#signInModalLabel').should('have.text','Sign up');
        // cy.get('#sign-username').type('adelmurselji');
        // cy.get('#sign-password').type('adelmurselji');
        // cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
       
       
        //hvatamo alert koji se ne vidi na stranici(a izvrsava se)
        cy.on('window:alert', (t) => {
            expect(t).to.contains('This user already exist.');
        });
    });

    it("User is able to login to Demoblaze web shop", () => {
        cy.visit('https://www.demoblaze.com/');
        homePage.clickLoginButton();
        loginPage.fillAndSubmitLoginForm();

        // cy.get('#logInModalLabel').should('have.text', 'Log in');
        // cy.get('#loginusername').clear().type('adelmurselji', { delay: 1 });
        // cy.get('#loginpassword').clear().type('adelmurselji', { delay: 1 });
        // cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();

        cy.get('#nameofuser').contains('adelmurselji');

    });
    it.skip("User is able to login to Demoblaze web shop", () => {
        cy.visit('https://www.demoblaze.com/');
        cy.get(':nth-child(3) > .card > .card-block > .card-title > .hrefch').click();
        cy.get('.name').contains('Nexus 6');
        cy.get('.col-sm-12 > .btn').click();
        /*
            cy.on('window:alert', (t) => {
                expect(t).to.contains('Product added');
            });
        */
        cy.get('#cartur').click();
        cy.get('#totalp').should('have.not.text', '0');
        cy.get('.col-lg-1 > .btn').click();
        cy.get('#totalm').contains('650');


        cy.get('#name').type('Adel');
        cy.get('#country').type('Serbia');
        cy.get('#city').type('Kragujevac');
        cy.get('#city').type('visa');
        cy.get('#month').type('June');
        cy.get('#year').type('2025');
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();

    });

    it.skip('Check if slide change after click', () => {
        cy.visit('https://www.demoblaze.com/');

        cy.get('.active > .d-block').invoke('attr', 'alt').should('eq', 'First slide');
        cy.get('.carousel-control-next-icon').click();
        cy.get('.active > .d-block').invoke('attr', 'alt').should('eq', 'Second slide');

    });





});