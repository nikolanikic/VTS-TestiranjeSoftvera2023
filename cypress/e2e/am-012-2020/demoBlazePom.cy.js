import HomePage from "../../support/pageObject/demoblaze_mj_134/homePage";
import LogInPage from "../../support/pageObject/demoblaze_mj_134/loginPage";
import SignUpPage from "../../support/pageObject/demoblaze_mj_134/signUpPage";

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

        cy.get('#nameofuser').contains('mau');
    });

    it('Check if slide is changed after click', () => {
        cy.visit('https://www.demoblaze.com/');

        homePage.checkAdBannerFirstPage();
        homePage.clickNextBtnAdBanner();
        cy.wait(3000);
        homePage.checkAdBannerSecondPage();

    });

});