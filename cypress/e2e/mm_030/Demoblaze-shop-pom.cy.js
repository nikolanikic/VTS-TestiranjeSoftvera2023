import HomePage from "../../support/pageObject/demoblaze_mm_030/homePage.js";
import LogInPage from "../../support/pageObject/demoblaze_mm_030/loginPage";
import SignUpPage from "../../support/pageObject/demoblaze_mm_030/signUpPage.js";

describe("Demoblaze web shop", () => {

    const homePage = new HomePage();
    const signUpPage = new SignUpPage();
    const logInPage = new LogInPage();

    it("User is able to load Demoblaze web shop", () => {
        cy.visit('https://www.demoblaze.com/');

        homePage.checkLogoText();
        homePage.checkHomeBtnIsDisplayed();
        homePage.checkCatIsDisplayed();
    });

    it("Alert is thrown when User already exists", () => {
        cy.visit('https://www.demoblaze.com/');
        homePage.clickSignUpBtn();

        signUpPage.checkSignUpLabel();
        signUpPage.populateAndSubmitSignUpForm();

        cy.on('window:alert', (t) => {
            expect(t).to.contains('This user already exist.');
        });
    });

    it('User is able to login to Demoblaze web shop', () => {
        cy.visit('https://www.demoblaze.com/');
        homePage.clickLogInBtn();
        logInPage.fillAndSubmitLogInForm();

        cy.get('#nameofuser').contains('milorad5');
    });

    it('Check if slide is changed after click', () => {
        cy.visit('https://www.demoblaze.com/');

        homePage.checkAdBannerFirstPage();
        homePage.clickNextBtnAdBanner();
        cy.wait(3000);
        homePage.checkAdBannerSecondPage();

    });

});