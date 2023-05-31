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
const apiToken = 'befc2cfee96e4f1bab8f4d9ba10dd6e9f71b0d583ba808e5404dab907452dfc8';

Given('User is on Qase Login page', () => {
    cy.visit(url);
    loginPage.verifyUserIsOnLoginPage();
})

When('User enters his credentials and click Login', () => {
    loginPage.login();
})

When('User should see Qase home page', () => {
    homePage.verifyUserIsOnHomePage();
    // homePage.verifyUserCanSeeDemoProject();
})

When('User clicks on Create new project button', () => {
    homePage.createNewProjectClick();
})

And('User populates new project details and submits', () => {
    newProjectPage.createNewProject(projectName, projectCode, projectDescription);
})

// THIS ONE IS USING DATA TABLE
And('User creates new project details and submits', (dataTable) => {
    var data = dataTable.hashes();
    var projectNameT = data[0].projectName;
    var projectCodeT = data[0].projectCode;
    var projectDescriptionT = data[0].projectDescription;
    
    newProjectPage.createNewProject(projectNameT, projectCodeT, projectDescriptionT);
})

Then('a new project should be created', () => {
    homePage.findProjectByName(projectName);
})

Then('a new project is deleted', () => {
    // homePage.deleteProjectByName(projectName);

    cy.deleteProjectByCode(projectCode, apiToken);

    cy.reload();

    homePage.verifyProjectIsDeletedByName(projectName);
})

Given('User opens {string} project', (projectNameFromTable) => {
    cy.contains(projectNameFromTable).click();
})