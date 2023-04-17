/// <reference types="cypress" />
describe("Testing DemoQA", () => {
   it("Testing and sumbiting a form", () => {
      cy.visit("https://demoqa.com");

      // An attempt to find a tab with the text 'Form', but it makes mistakes, because it can not be interrupted after it successfully finds it
      // cy.get('.category-cards .card-body').each(($el) => {
      //    cy.wrap($el)
      //       .find('h5')
      //       .then(($h5) => {
      //          const text = $h5.text().trim();
      //          if (text === 'Forms') {
      //             cy.wrap($h5).click();
      //          }
      //       })
      // });

      // A straight forward way of oppening the 'Form' category and opening the practice form
      cy.get('.category-cards > :nth-child(2)').click();
      cy.get(':nth-child(2) > .element-list > .menu-list > #item-0').click();

      //Sample data that will be written
      const sampleData = [
         "Shane", // Name
         "Upton", // Surname
         "shane.upton.91@fakemail.com", // Email
         "2025550148", // Phone number
         "100 South Rd\nEagle\nWest Virginia\n53119", // Adress
         "1992" // Year
      ]

      cy.get('#firstName').click().type(sampleData[0]) // Types first name
         .get('#lastName').click().type(sampleData[1]) // Types last name
         .get('#userEmail').click().type(sampleData[2]) // Types email
         .get('#genterWrapper > .col-md-9 > :nth-child(1)').click() // Choses gender ('male')
         .get('#dateOfBirthInput').click().get('.react-datepicker__month-select').select(9) // Selects month ('October')
         .get('.react-datepicker__year-select').select(sampleData[5]) // Selects year ('1992')
         .get('.react-datepicker__day--017').click() // Clicks on 17
         .get('.subjects-auto-complete__value-container').type('E').wait(200) // Types just 'E' to make the dropdown menu show
         .get('#react-select-2-option-0').click() // Clicks on 'English'
         .get('#hobbiesWrapper > .col-md-9 > :nth-child(3)').click() // Choses a hobbie ('Music')
         .get('#uploadPicture').selectFile('profile.jpg') // Uploads the profile.jpg image
         .get('#userNumber').click().type(sampleData[3]) // Types in the phone number
         .get('#currentAddress').click().type(sampleData[4]) // Types in the adress
         .get('#state').click().wait(200).get('#react-select-3-option-1').click() // Choses a state ('Uttar Pradesh')
         .get('#city').click().wait(200).get('#react-select-4-option-2').click({ force: true }) // Choses a city ('Merrut')
         .get('#userForm').submit(); // Submits the form


   })
});
