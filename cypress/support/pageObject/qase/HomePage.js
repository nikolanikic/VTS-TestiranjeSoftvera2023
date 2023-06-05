class Homepage {


    projectsLink() {
        return cy.get('.lsfuW_ > :nth-child(2)');
    }

    workspaceLink() {
        return cy.get('[href="/workspace"]');
    }

    dashboardsLink() {
        return cy.get('[href="/report/dashboards"]');
    }

    demoProjectTitle(){
        return cy.get('.defect-title');
    }

    createNewProjectButton() {
        return cy.get('#createButton');
    }

    dotsForProject() {
        return cy.get(':nth-child(2) > .text-end > .dropdown > .btn');
    }

    deleteButton() {
        return cy.get(':nth-child(2) > .text-end > .dropdown > .dropdown-menu > :nth-child(2) > .Wtd_FE');
    }

    deleteProjectButton () {
        return cy.get('.b_jd28 > .ZwgkIF');
    }

    verifyUserIsOnHomePage() {
        this.workspaceLink().should('be.visible');
        this.dashboardsLink().should('be.visible');
    }

    verifyUserCanSeeDemoProject(){
        this.demoProjectTitle().should('have.text','Demo Project');
    }

    createNewProject() {
        this.createNewProjectButton().click();
    }

    findProjectByName(projectName) {
        this.projectsLink().click();
        cy.contains(projectName);
    }

    deleteProjectByName() {
        this.dotsForProject().click();
        this.deleteButton().click();
        this.deleteProjectButton().click();
    }
}

export default Homepage;
