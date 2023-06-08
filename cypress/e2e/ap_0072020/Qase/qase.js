import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../../support/pageObject/qase/loginPage";
import Homepage from "../../../support/pageObject/qase/homePage";
import NewProjectPage from "../../../support/pageObject/qase/newProjectPage";

const url = 'https://app.qase.io/login'
const loginPage = new LoginPage();
const homePage = new Homepage();
const newProjectPage = new NewProjectPage();

const projectName = 'TestProject ap_0072020';
const projectCode = '007';
const projectDescription = 'VTS 2023 Vezbe';
const apiToken = 'd3a6df86f0e136ccc16fa4244791ec2ee6a2d79f9b3bb858d6848ddcc01fbceb';


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