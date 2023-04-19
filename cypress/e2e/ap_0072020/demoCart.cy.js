/// <reference types="cypress" />

describe("Testing DemoCart", () => {

    it.skip("Testing Laptops section", () => {

        // poseta sajtu
        cy.visit('https://demo.opencart.com/');

        // provera dropdown menija
        cy.get(':nth-child(2) > .dropdown-toggle').click();
        cy.get(':nth-child(2) > .dropdown-menu > .see-all').click();

        // provera po sadržaju
        cy.contains('MacBook Air').click();

        // klik na dugme
        cy.get('#button-cart').click();

        // popup poruka
        cy.get('.alert').should('be.visible');

        // Dodavanje u korpu na ovoj web stranici nije u funkciji
    });

    it("Testing Apple Cinema", () => {

        // Otvaranje sajta
        cy.visit('https://demo.opencart.com/');

        // Hvatanje dropdown menija Desktop i opcije Show all Desktops
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').click();
        cy.get(':nth-child(1) > .dropdown-menu > .see-all').click();

        // Provera po sadržaju
        cy.contains('Apple Cinema 30"').click();

        // Biranje opcija za Apple Cinema
        cy.get('#input-option-value-5').click();
        cy.get('#input-option-value-11').check();
        cy.get('#input-option-208').clear().type('Random text');
        cy.get('#input-option-217').select('1');
    });
});