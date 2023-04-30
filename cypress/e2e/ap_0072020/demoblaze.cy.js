/// <reference types="cypress" />

import HomePage from "../../support/pageObject/demoblaze_ap_0072020/homePage";
import ImageSlide from "../../support/pageObject/demoblaze_ap_0072020/imageSlide";
import LoginPage from "../../support/pageObject/demoblaze_ap_0072020/loginPage";
import SignUpPage from "../../support/pageObject/demoblaze_ap_0072020/signUpPage";

describe("Testing Demoblaze", () => {

  // instanciranje klasa
  const homePage = new HomePage();
  const signUpPage = new SignUpPage();
  const loginPage = new LoginPage();
  const imageSlide = new ImageSlide();

  it.skip("User is able to load Demoblaze web shop", () => {
    cy.visit("https://www.demoblaze.com/");

    homePage.checkLogoText();
    homePage.checkHomeButtonIsDisplayed();
    homePage.checkCategories();

  });

  it.skip("Alert is thrown when User already exists", () => {

    cy.visit("https://www.demoblaze.com/");
    homePage.clickSignUpButton();

    cy.wait(3000);

    signUpPage.checkSignUpLabel();
    signUpPage.populateAndSubmitSignUpForm();

    // alert
    cy.on('window:alert', (t) => {
      expect(t).to.contains('This user already exist.');
    });
  });


  it.skip("User is able to log in on Demoblaze web shop", () => {
    // komanda za otvaranje sajta
    cy.visit("https://www.demoblaze.com/");

    // hvatanje Login forme
    homePage.clickLoginButton();

    loginPage.fillAndSubmitForm();
  });


  it('Check if slide is change after click', () => {
    cy.visit("https://www.demoblaze.com");

    imageSlide.checkCarousel();
  });
});
