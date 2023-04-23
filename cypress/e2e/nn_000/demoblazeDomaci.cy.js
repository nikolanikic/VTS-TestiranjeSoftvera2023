/// <reference types="cypress" />

describe('Dodavanje proizvoda u korpu', () => {
  it('Ubacivanje proizvoda u korpu', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.contains('Samsung galaxy s6').click()
    cy.contains('Add to cart').click()
    cy.contains('Cart').click()
    cy.contains('Place Order').click()
    cy.get('#name').type('Pero Perkovic')
    cy.get('#country').type('Srbija')
    cy.get('#city').type('Beograd')
    cy.get('#card').type('1234567890123456')
    cy.get('#month').type('Jan')
    cy.get('#year').type('1912')
    cy.contains('Purchase').click()
    cy.get('.sweet-alert > h2').should('have.text', 'Thank you for your purchase!')
    cy.contains('OK').click()
  });
});