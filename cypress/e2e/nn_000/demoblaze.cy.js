/// <reference types="cypress" />

describe("Demoblaze web shop", () => {

  it.skip("User is able to load Demoblaze web shop", () => {
    cy.visit('https://www.demoblaze.com/');

    cy.get('#nava').contains('PRODUCT STORE');

    cy.get('.active > .nav-link').contains('Home');
    cy.get('#cat').should('have.text', 'CATEGORIES');
  });

  it.skip("Alert is thrown when User already exists", () => {
    cy.visit('https://www.demoblaze.com/');
    cy.get('#signin2').click();

    cy.get('#signInModalLabel').should('have.text', 'Sign up');
    cy.get('#sign-username').type('nikolanikic');
    cy.get('#sign-password').type('nikolanikic');

    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click({ force: true });

    cy.on('window:alert', (t) => {
      expect(t).to.contains('This user already exist.');
    });
  });

  it.skip('User is able to login to Demoblaze web shop', () => {
    cy.visit('https://www.demoblaze.com/');
    cy.get('#login2').click();

    cy.get('#logInModalLabel').should('have.text', 'Log in');
    cy.get('#loginusername').clear().type('nikolanikic', { delay: 1 });
    cy.get('#loginpassword').clear().type('nikolanikic', { delay: 1 });
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();

    cy.get('#nameofuser').contains('nikolanikic');

  });

  it('Check if slide is changed after click', () => {
    cy.visit('https://www.demoblaze.com/');

    cy.get('.active > .d-block').invoke('attr', 'alt').should('eq', 'First slide');

    cy.get('.carousel-control-next-icon').click();
    cy.wait(3000);

    cy.get('.active > .d-block').invoke('attr', 'alt').should('eq', 'Second slide');
  });

});
