/// <reference types="cypress" />

describe('Testing Demoblaze shopping', () => {

  const Data = [
  "StelthSRB", //name
  "12345", // pass
  "Serbia", //Country
  "Kragujevac", //City
  "12313534652", // CreditCard
  "03/12", //MonthForCreditCard
  "2020", //YearForCreditCards


]

  it('Adding product to the cart and purchase', () => {
    cy.visit('http://demoblaze.com');
    cy.get('#login2').click();
    cy.wait(1000).get('#loginusername').type(Data[0])
    .wait(1000).get('#loginpassword').type(Data[1])
    .get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    cy.get(':nth-child(2) > .card > .card-block > .card-title > .hrefch').click().wait(2000)
    .get('.col-sm-12 > .btn').click()
    .get('#cartur').click()
    .get('.col-lg-1 > .btn').click();
    cy.get('#name').type(Data[0])
    .get('#country').type(Data[2])
    .get('#city').type(Data[3])
    .get('#card').type(Data[4])
    .get('#month').type(Data[5])
    .get('#year').type(Data[6])
    .get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click(); // Confirming the purchase
    cy.get('.confirm').click(); // Clicking OK 
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click(); // Closing form
    cy.get('#logout2').click(); // Logout
  })
})
