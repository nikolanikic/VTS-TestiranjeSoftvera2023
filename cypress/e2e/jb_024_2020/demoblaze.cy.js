/// <reference types="cypress" />

import HomePage from "../../support/pageObject/homePage";
import LogInPage from "../../support/pageObject/logInPage";
import SignUpPage from "../../support/pageObject/signUpPage";

//Cetvrta vezba
describe("Demoblaze web shop", () => {

  const homePage = new HomePage();
  const signUpPage = new SignUpPage();
  const logInPage = new LogInPage();

  it("User is able to load the Demoblaze web shop", () => {
    cy.visit('https://www.demoblaze.com');

    homePage.checkLogoText();
    homePage.checkHomeButtonIsDisplayed();
    homePage.checkCategoriesMenuIsDisplayed();
  });

  it("Alert is thrown when User already exists", () => {
    cy.visit('https://www.demoblaze.com/');
    homePage.clikSignUpButton();

    signUpPage.checkSignUpLabel();
    signUpPage.populateAndSubmitSignUpForm();
  
    cy.on('window:alert', (t) => {
      expect(t).to.contains('This user already exist.');
    });
  });

  it('User is able to login to Demoblaze web shop', () => {
    cy.visit('https://www.demoblaze.com/');
    homePage.clikLogInButton();
    logInPage.fillAndSubmitLogInForm();

    cy.get('#nameofuser').contains('nikolanikic');

  });

  it.skip('Check if slide is changed after click', () => {
    cy.visit('https://www.demoblaze.com/');

    cy.get('.active > .d-block').invoke('attr', 'alt').should('eq', 'First slide');

    cy.get('.carousel-control-next-icon').click();
    cy.wait(3000);

    cy.get('.active > .d-block').invoke('attr', 'alt').should('eq', 'Second slide');
  });

});