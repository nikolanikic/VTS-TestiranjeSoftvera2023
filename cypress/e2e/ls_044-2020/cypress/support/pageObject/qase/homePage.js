class HomePage {

    clickSuiteButton(){
        return cy.get('#create-suite-button');
    }
    suiteName(){
        return cy.get('#title');
    }
    suiteDescription(){
        return cy.get(':nth-child(3) > .AgTkYj');
    }
    suitePreconditions(){
        return cy.get(':nth-child(4) > .AgTkYj');
    }
    createSuiteButton(){
        return cy.get('.CCVJRT > .u0i1tV');
    }
    clickCaseButton(){
        return cy.get('#create-case-button');
    }
    caseTitle(){
        return cy.get('#title');
    }

    // caseStatus(){
    //     return cy.get('.mt-4 > .col-xl-4 > .Thgbhj > .ZTmUa');
    // }
   caseDescription(){
    return cy.get('.col-12 > .AgTkYj');
   }
   caseSave(){
    return cy.get('#save-case');
   }
   suiteCaseVerify(){
    return cy.get('.o0Jd8j');
   }


    openProjectLink(){
        return cy.get(':nth-child(2) > :nth-child(3) > :nth-child(1) > .defect-title');
    }

    projectLink(){
        return cy.get('.lsfuW > :nth-child(2)');
    }

    workspaceLink() {
        return cy.get('[href="/workspace"]');
    }
    dashboardLink() {
        return cy.get('[href="/report/dashboards"]');
    }
    queriesLink() {
        return cy.get('[href="/report/queries-list"]');
    }
    demoProjectTitle(){
        return cy.get('.defect-title');
    }
    createNewProjectButton(){
        return cy.get('#createButton');
    }

    dotsForProject(){
        return cy.get(':nth-child(2) > .text-end > .dropdown > .btn');
    }
    deleteButton(){
        return cy.get(':nth-child(2) > .text-end > .dropdown > .dropdown-menu > :nth-child(2) > .Wtd_FE');
    }
    deleteProjectButton(){
        return cy.get('.b_jd28');
    }

    verifyUserIsOnHomePage() {
        this.workspaceLink().should('be.visible');
        this.dashboardLink().should('be.visible');
        this.queriesLink().should('be.visible');
    }
    verifyUserCanSeeDemoProject(){
        this.demoProjectTitle().should('have.text','Demo Project');
    }
    createNewProjectClick(){
        this.createNewProjectButton().click();
    }
    findProjectByName(projectName){
        this.projectLink().click();
        cy.contains(projectName);
    }
    deleteProjectByName(){
        this.dotsForProject().click();
        this.deleteButton().click();
        this.deleteProjectButton().click();
    }
    verifyProjectIsDeletedByName(projectName){
        cy.contains(projectName).should('not.exist');
    }

    openProject(){
        this.openProjectLink().click();
    }
    populateSuite(){
        this.clickSuiteButton().click();
        this.suiteName().type('SuiteTest');
        this.suiteDescription().type('ls044');
        this.suitePreconditions().type('VTS');
        this.createSuiteButton().click();

    }
    populateCase(){
        this.clickCaseButton().click();
        this.caseTitle().type('CASE_VTS');
        // this.caseStatus().click();
        this.caseDescription().type('TestiranjeSoftvera');
        this.caseSave().click();

    }
    verifySuiteAndCase(){
        this.suiteCaseVerify().should('have.text','1 suite | 1 test');
        this.projectLink().click();
    }
}
export default HomePage;