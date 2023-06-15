import {
    Given,
    Then
} from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../../support/pageObject/qase/qase/loginPage";
import HomePage from "../../../support/pageObject/qase/qase/homePage";
import NewProjectPage from "../../../support/pageObject/qase/qase/newProjectPage";

const url = 'https://app.qase.io/login'
const loginPage = new LoginPage();
const homePage = new HomePage();
const newProjectPage = new NewProjectPage();

const projectName = 'TestProject bg_009';
const projectCode = '127';
const projectDescription = 'VTS 2023';

Given('User in on Qase login page', () => {
    cy.visit(url)
    loginPage.verifyUserIsOnLoginPage();
})
When('User enters his credentials and click Login button', () => {
    loginPage.login();
})
Then('User should see Qase home page', () => {
    homePage.verifyUserIsOnHomePage();
    homePage.verifyUserCanSeeDemoProject();
})
When('User clicks on Create new project button', () => {
    homePage.createNewProjectClick();
})
And('User populates new project details and submits', () => {
    newProjectPage.createNewProject(projectName, projectCode, projectDescription);
})
Then('A new project should be created', () => {
    homePage.findProjectByName(projectName);
})
When('User open project', () => {
    homePage.openProject();
})
And('User populate suite', () => {
    homePage.populateSuite();
    cy.wait(2000);
})
And('User Populate case', () => {
    homePage.populateCase();
})
And('Verify suite and case', () => {
    homePage.verifySuiteAndCase();
})


Then('A new project is deleted', () => {
    homePage.deleteProjectByName();

    cy.deleteProjectByCode(projectCode, apiToken);
    cy.reload();
    homePage.verifyProjectIsDeletedByName(projectName);
})

Given('User opens {string} project', (projectNameFromTable) => {
    cy.contains(projectNameFromTable).click();
})