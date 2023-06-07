/// <reference types="cypress" />
describe("Testing DemoQA", () => {
    it("Testing and sumbiting a form for demoQA", () => {
       cy.visit("https://demoqa.com");
 
       // A way of oppening the 'Form' category and the practice form
       cy.get('.category-cards > :nth-child(2)').click();
       cy.get(':nth-child(2) > .element-list > .menu-list > #item-0').click();
 
       
       const sampleData = [
          "Lazar", 
          "Savic", 
          "ls0442020@gmail.com", 
          "12341234", 
          "Kragujevac \n Skerliceva 28", 
          "1999" 
       ]
 
       cy.get('#firstName').click().type(sampleData[0]) 
          .get('#lastName').click().type(sampleData[1]) 
          .get('#userEmail').click().type(sampleData[2])
          .get('#genterWrapper > .col-md-9 > :nth-child(2)').click()
          .get('#dateOfBirthInput').click().get('.react-datepicker__month-select').select(6) 
          .get('.react-datepicker__year-select').select(sampleData[12]) 
          .get('.react-datepicker__day--017').click() 
          .get('.subjects-auto-complete__value-container').type('E').wait(200) 
          .get('#react-select-2-option-0').click() 
          .get('#hobbiesWrapper > .col-md-9 > :nth-child(3)').click() 
          .get('#uploadPicture').selectFile('profile.jpg') 
          .get('#userNumber').click().type(sampleData[3])
          .get('#currentAddress').click().type(sampleData[4]) 
          .get('#state').click().wait(200).get('#react-select-3-option-1').click() 
          .get('#city').click().wait(200).get('#react-select-4-option-2').click({ force: true }) 
          .get('#userForm').submit(); 
 
    })
 });