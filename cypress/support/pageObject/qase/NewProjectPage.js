class newProjectPage {

    projectNameInputField () {
        return cy.get('#project-name');
    }

    projectCodeInputField () {
       return cy.get('#project-code');
    }

    projectDescriptionInputField () {
        return cy.get('#description-area');
    }

    projectAccessRadioButton () {
        return cy.get('.Ls8mio > :nth-child(3) > :nth-child(2)');
    }

    createProjectButton () {
        return cy.get('.CCVJRT > .u0i1tV > .ZwgkIF');
    }

    createNewProject (projectName, projectCode, projectDescription) {
        this.projectNameInputField().type(projectName);
        this.projectCodeInputField().type(projectCode);
        this.projectDescriptionInputField().type(projectDescription);
        this.projectAccessRadioButton().click();
        this.createProjectButton().click();
    }
}

export default newProjectPage;
