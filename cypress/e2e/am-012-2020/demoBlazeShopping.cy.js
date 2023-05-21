/// <reference types="cypress" />
describe("Testing Demoblaze shopping", () => {
    it("Adding product to the cart and purchasing it", () => {
       cy.visit("https://demoblaze.com");
 
       
       const sampleData = [
          "anica", // Username
          "98765", // Password
          "Anica", // Name
          "SRB", // Country
          "Kragujevac", // City
          "1679453385168942", // Credit card number
          "08/01", // Month
          "2023", // Year
       ]
 
       cy.get('#login2').click()
          .wait(1000).get('#loginusername').type(sampleData[0]).wait(200)
          .get('#loginpassword').type(sampleData[1])
          .get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click(); 
 
       cy.get(':nth-child(3) > .card > .card-block > .card-title > .hrefch').click().wait(1000);
 
       cy.get('.col-sm-12 > .btn').click() 
         .get('#cartur').click() 
         .wait(500)
         .get('.col-lg-1 > .btn').click() 
         .wait(1000);
 
       
       cy.get('#name').type(sampleData[2]) 
         .get('#country').type(sampleData[3]) 
         .get('#city').type(sampleData[4]) 
         .get('#card').type(sampleData[5]) 
         .get('#month').type(sampleData[6]) 
         .get('#year').type(sampleData[7]) 
         .get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
 
       cy.get('.confirm').click() 
         .get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click()
         .get('#logout2').click() 
 
    })
 });