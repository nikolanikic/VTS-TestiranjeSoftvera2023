/// <reference types="cypress" />

import CartPage from "../../support/pageObject/demoblaze_am_136/cartPage";
import HomePage from "../../support/pageObject/demoblaze_am_136/homePage";
import LoginPage from "../../support/pageObject/demoblaze_am_136/loginPage";
import PlaceOrder from "../../support/pageObject/demoblaze_am_136/placeOrder";
import ProductPage from "../../support/pageObject/demoblaze_am_136/productPage";
import SignUpPage from "../../support/pageObject/demoblaze_am_136/signUpPage";

describe("Demoblaze web shop", () => {

    const homePage = new HomePage();
    const signUpPage = new SignUpPage();
    const loginPage = new LoginPage();
    const productPage = new ProductPage();
    const cartPage = new CartPage();
    const placeOrder = new PlaceOrder();

    it.skip("User is able to load Demoblaze web shop", () => {
        cy.visit('https://www.demoblaze.com/');

        homePage.checkLogoText();
        homePage.checkHomeButtonIsDisplayed();
        homePage.checkCategoriesMenuIsDisplayed();
    });

    it.skip("Alert is thrown when User already exists", () => {
        cy.visit('https://www.demoblaze.com/');

        homePage.clickSignUpButton();

        signUpPage.checkSignUpLabel();
        signUpPage.populateAndSubmitSignUpForm();

        cy.on('window:alert', (t) => {
            expect(t).to.contains('This user already exist.');
        });
    });

    it.skip("User is able to login to Demoblaze web shop", () => {
        cy.visit('https://www.demoblaze.com/');
        homePage.clickLoginButton();
        loginPage.fillAndSubmitLoginForm();

        cy.get('#nameofuser').contains('adelmurselji');

    });
    it.skip("User is able to add product and fill cart to Demoblaze web shop", () => {
        cy.visit('https://www.demoblaze.com/');

        homePage.clickProduct();

        productPage.checkProductName();
        productPage.clickAddToCartButton();
        productPage.clickCartButton();

        cartPage.checkTotalP();
        cartPage.clickPlaceOrderButton();

        placeOrder.fillAndSubmitPlaceOrderForm();
    });

    it('Check if slide change after click', () => {
        cy.visit('https://www.demoblaze.com/');

        homePage.checkChange();

    });





});