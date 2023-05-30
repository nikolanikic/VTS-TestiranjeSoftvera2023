import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../../support/pageObject/qase/loginPage";
import HomePage from "../../../support/pageObject/qase/homePage";
import NewProjectPage from "../../../support/pageObject/qase/newProjectPage";

const url = 'https://app.qase.io/login'
const loginPage = new LoginPage();
const homePage = new HomePage();
const newProjectPage = new NewProjectPage();

const projectName = 'TestProject nn_000';
const projectCode = '000';
const projectDescription = 'VTS 2023 Vezbe';

Given('User is on Qase Login page', () => {
    cy.visit(url);
    loginPage.verifyUserIsOnLoginPage();
})

When('User enters his credentials and click Login', () => {
    loginPage.login();
})

When('User should see Qase home page', () => {
    homePage.verifyUserIsOnHomePage();
    homePage.verifyUserCanSeeDemoProject();
})

When('User clicks on Create new project button', () => {
    homePage.createNewProjectClick();
})

And('User populates new project details and submits', () => {
    newProjectPage.createNewProject(projectName, projectCode, projectDescription);
})

Then('a new project should be created', () => {
    homePage.findProjectByName(projectName);
})

Then('a new project is deleted', () => {
    homePage.deleteProjectByName(projectName);
})