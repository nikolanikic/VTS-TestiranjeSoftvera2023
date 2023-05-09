import { Given, Then } from "cypress-cucumber-preprocessor/steps";

const url = 'https://google.com'

Given('I open Google page', () => {
    cy.visit(url)
})

Then('I can see Gmail link', () => {
    cy.get(':nth-child(1) > .gb_t').should('have.text', 'Gmail');
})

Given('I serch for rsd to eur', () => {
    cy.get('#APjFqb').clear().type('rsd to eur{enter}')
})
Given('I enter {int} for original currency', (original) => {
    cy.get("[type='number']").eq(0).clear().type(original);
})
Given('I should get 1,71 in new currency', () => {
    cy.get("[type='number']").eq(1).should('be.visible')
})
Given('', () => {

})