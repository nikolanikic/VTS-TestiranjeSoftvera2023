/// <reference types="cypress" />

describe("Demoblaze web shop", () => {

  it("User is able to load the Demoblaze web shop", () => {
    cy.visit('https://www.demoblaze.com');

    cy.get('#nava').contains('PRODUCT STORE');
    cy.get('.active > .nav-link').contains('Home');
    cy.get('#cat').should('have.text', 'CATEGORIES');
  });
it.skip('Alert is thrown when user already exists', () =>{
  cy.visit('https://www.demoblaze.com');

    cy.get('#signin2').click();


    cy.get('#signInModalLabel').should('have.text', 'Sign up');
    cy.get('#sign-username').type('janab', {delay:0});
    cy.get('#sign-password').type('janab', {delay:0});

    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();

    cy.on('window:alert', (t) => {
      expect(t).to.contains('This user already exists');
    });
  });

  it('Adding product to cart', () => {
    cy.visit('https://www.demoblaze.com');

    cy.get(':nth-child(3) > .card > .card-block > .card-title > .hrefch').click();

    cy.get('.name').contains('Nexus 6');

    cy.get('.col-sm-12 > .btn').click();

    cy.get('#cartur').click();
    cy.get('#totalp').should('have.text', '650');
    cy.get('.col-lg-1 > .btn').click();

    cy.get('#totalm').contains('650');

    cy.wait(3000);
  });


});
