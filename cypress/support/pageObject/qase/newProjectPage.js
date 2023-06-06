class NewProjectPage {

    projectNameInputField() {
        return cy.get('#project-name');
    }
    projectCodeInputField() {
        return cy.get('#project-code');
    }
    projectDescriptionInputField() {
        return cy.get('#description-area');
    }
    projectAcessRadioButton() {
        return cy.get('.Ls8mio > :nth-child(3) > :nth-child(2)');
    }
    createProjectButton() {
        return cy.get('.CCVJRT > .u0i1tV');
    }
    createNewProject(projectName, projectCode, projectDescription) {
        this.projectNameInputField().type(projectName);
        this.projectCodeInputField().type(projectCode);
        this.projectDescriptionInputField().type(projectDescription);
        this.projectAcessRadioButton().click();
        this.createProjectButton().click();


    }
}
export default NewProjectPage;