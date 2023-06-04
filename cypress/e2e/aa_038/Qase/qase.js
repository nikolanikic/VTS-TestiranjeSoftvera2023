import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../../support/pageObject/qase/loginPage";
import Homepage from "./homePage";
import NewProjectPage from "../../../support/pageObject/qase/NewProjectPage";

const url = 'https://app.qase.io/login'
const loginPage = new LoginPage();
const homePage = new Homepage();
const newProjectPage = new NewProjectPage();

const projectName = 'TestProject aa_0382020';
const projectCode = '038';
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
    homePage.createNewProject();
})

And('User populates new project details and submits', () => {
    newProjectPage.createNewProject(projectName, projectCode, projectDescription);
})

Then('a new project should be created', () => {
    homePage.findProjectByName(projectName);
})

Then('a new project is deleted', () => {
    homePage.deleteProjectByName();
})