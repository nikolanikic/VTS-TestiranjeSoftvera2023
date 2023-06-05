import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../../support/pageObject/qase/loginPage";
import Homepage from "./homePage";
import NewProjectPage from "../../../support/pageObject/qase/NewProjectPage";

const url = 'https://app.qase.io/login'
const loginPage = new LoginPage();
const homePage = new Homepage();
const newProjectPage = new NewProjectPage();
const apiToken= '4bca45b089f489863553dc601f86fb5115283240b0db2c6d3b5b08cfc7f86f2b';

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

Then('a new project is deleted', () => {
    homePage.deleteProjectByName();
})

// deleting project by name

cy.deleteProjectByCode(projectCode,apiToken);
cy.reload();
homePage.verifyProjectIsDeletedByName(projectName);

Given('User opens {string} project',(projectNameFromTable) =>{
cy.contains(projectNameFromTable).click();
})