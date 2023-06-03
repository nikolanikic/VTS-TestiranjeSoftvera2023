/// <reference types="cypress" />

describe("Testing DemoQA", () => {

    it.skip("Elements - testing text box", () => {
      cy.visit("https://demoqa.com/");
  
      cy.get(':nth-child(1) > :nth-child(1) > .card-up').click();
      cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click();
  
      cy.get('.main-header').should('have.text', 'Text Box');
  
      cy.wait(2000);
      cy.get('#userName-label').should('have.text', 'Full Name');
      cy.get('#userEmail-label').should('have.text', 'Email');
  
      cy.get('#userName').type('Nikola Nikic');
      cy.get('#userEmail').type('nikola@email.com');
       cy.get('#currentAddress').type('Srete Mladenovica bb');
       cy.get('#permanentAffress').type('Srete Karabatica 88');
    });
  
    it("Elements - testing radio button", () => {
      cy.visit("https://demoqa.com/");
  
      cy.get(':nth-child(1) > :nth-child(1) > .card-up').click();
      cy.contains('Radio Button').click();
      
      cy.get('.main-header').should('have.text', 'Radio Button');
  
      cy.get('.col-md-6 > :nth-child(2) > :nth-child(2)').click();
      cy.get('.text-success').should('have.text', 'Yes');
  
      cy.get('.col-md-6 > :nth-child(2) > :nth-child(3)').click();
      cy.get('.text-success').should('have.text', 'Impressive');

      cy.get('.custom-control.disabled').should('be.disabled');
    });
  
  });
  