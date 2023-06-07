/// <reference types="cypress" />

describe('Dodavanje proizvoda u korpu', () => {
  it('Ubacivanje proizvoda u korpu', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.contains('Samsung galaxy s6').click()
    cy.contains('Add to cart').click()
    cy.contains('Cart').click()
    cy.contains('Place Order').click()
    cy.get('#name').type('Pero Nikolic')
    cy.get('#country').type('Srbija')
    cy.get('#city').type('Krusevac')
    cy.get('#card').type('1232142151251')
    cy.get('#month').type('Dec')
    cy.get('#year').type('1945')
    cy.contains('Purchase').click()
    cy.get('.sweet-alert > h2').should('have.text', 'Thank you for your purchase!')
    cy.contains('OK').click()
  });
});