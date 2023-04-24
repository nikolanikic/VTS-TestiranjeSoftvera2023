/// <reference types="cypress" />
describe("Testing Demoblaze shopping", () => {
   it("Adding product to the cart and purchasing it", () => {
      cy.visit("https://demoblaze.com");

      //Sample data that will be written
      const sampleData = [
         "loltyler1", // Username
         "12345", // Password
         "Shane", // Name
         "US, California", // Country
         "Cupertino", // City
         "180023305751137", // Credit card number
         "05/18", // Month
         "2023", // Year
      ]

      cy.get('#login2').click()
         .wait(1000).get('#loginusername').type(sampleData[0]).wait(200)
         .get('#loginpassword').type(sampleData[1])
         .get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click(); // Confirms login

      cy.get(':nth-child(3) > .card > .card-block > .card-title > .hrefch').click().wait(1000); // Opens a product

      cy.get('.col-sm-12 > .btn').click() // Adds to cart
        .get('#cartur').click() // Opens the cart
        .wait(500)
        .get('.col-lg-1 > .btn').click() // Opens the place order page
        .wait(1000);

      // Filling the order form
      cy.get('#name').type(sampleData[2]) // Fills in the name
        .get('#country').type(sampleData[3]) // Fills in the country
        .get('#city').type(sampleData[4]) // Fills in the city
        .get('#card').type(sampleData[5]) // Fills in the card number
        .get('#month').type(sampleData[6]) // Fills in the month
        .get('#year').type(sampleData[7]) // Fills in the year
        .get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click(); // Submits form

      cy.get('.confirm').click() // Confirms the order
        .get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click() // Closes the form
        .get('#logout2').click() // Logs out;

   })
});
