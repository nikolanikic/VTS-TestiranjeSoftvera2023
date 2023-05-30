class HomePage {

    projectsLink() {
        return cy.get('.lsfuW_ > :nth-child(2)');
    }

    workspaceLink() {
        return cy.get('[href="/workspace"]');
    }

    dashboardsLink() {
        return cy.get('[href="/report/dashboards"]');
    }

    queriesLink() {
        return cy.get('[href="/report/queries-list"]');
    }

    demoProjectTitle() {
        return cy.get('.defect-title');
    }

    createNewProjectButton() {
        return cy.get('#createButton');
    }

    dotsForProject(projectName) {
        cy.get('.project-row').contains(projectName);
    }

    verifyUserIsOnHomePage() {
        this.workspaceLink().should('be.visible');
        this.dashboardsLink().should('be.visible');
        this.queriesLink().should('be.visible');
    }

    verifyUserCanSeeDemoProject() {
        this.demoProjectTitle().should('have.text', 'Demo Project')
    }

    createNewProjectClick() {
        this.createNewProjectButton().click();
    }

    findProjectByName(projectName) {
        this.projectsLink().click();
        cy.contains(projectName);
    }

    deleteProjectByName(projectName) {
        this.dotsForProject(projectName).click();
        cy.contains('Delete').click();
    }
}

export default HomePage;