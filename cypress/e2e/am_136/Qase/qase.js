import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../../support/pageObject/qase/loginPage";
import HomePage from "../../../support/pageObject/qase/homePage";
import NewProjectPage from "../../../support/pageObject/qase/newProjectPage";


const url = 'https://app.qase.io/login'
const loginPage = new LoginPage();
const homePage = new HomePage();
const newProjectPage = new NewProjectPage();

const projectName = 'TestProject am_136';
const projectCode = '136';
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
Then('A new project should be created',() =>{
    homePage.findProjectByName(projectName);
})
Then('A new project is deleted',() =>{
    homePage.deleteProjectByName();
})