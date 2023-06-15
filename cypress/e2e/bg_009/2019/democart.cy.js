/// <reference types="cypress" />

describe("Testing DemoCart", () => {

    it.skip("Testing Laptops section", () => {
     cy.visit('https://demo.opencart.com/');

    cy.get(':nth-child(2) > .dropdown-toggle').click();
    cy.get(':nth-child(2) > .dropdown-menu > .see-all').click();

    cy.contains('MacBook Air').click();
    cy.get('#button-cart').click();
    cy.get('.alert').should('be.visible');

    });

    it("Testing Apple Cinema", () => {
        cy.visit('https://demo.opencart.com/');
        cy.contains('Desktops').click();
        cy.get(':nth-child(1) > .dropdown-menu > .see-all').click();
        cy.contains('Apple Cinema 30"').click();

        cy.get('#input-option-value-6').click();
        cy.get('#input-option-value-11').check();
        cy.get('#input-option-208').clear().type('Some random text');
        cy.get('#input-option-217').select('4');

       });
  
  
  });