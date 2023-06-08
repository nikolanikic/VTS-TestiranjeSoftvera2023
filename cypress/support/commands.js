// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const { expect } = require("chai");

// Command for adding
// Example: petstoreapi.cy.js file, adding pet do database
Cypress.Commands.add('addPet', (petId, petName, photoURL) => {

        // komanda za slanje zahteva i url
        // {} zagrade se koriste zbog json fajla
        cy.request('POST', 'https://petstore.swagger.io/v2/pet', {
            "id": petId,
            "category": {
              "id": 0,
              "name": "string"
            },
            "name": petName,
            "photoUrls": [
              photoURL
            ],
            "tags": [
              {
                "id": 0,
                "name": "string"
              }
            ],
            "status": "available"
          }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('id', petId);
            expect(response.body).to.have.property('name', petName);
        });
});

// Command for finding
// Example: petstoreapi.cy.js file, finding pet by ID

 // komanda za slanje zahteva i url
 // {} zagrade se koriste zbog json fajla
 Cypress.Commands.add('findPet', (petId) => {
    cy.request('GET', 'https://petstore.swagger.io/v2/pet/' + petId).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id', petId);
    });
 });

// Command for updating
// Example: petstoreapi.cy.js file, updating a name of existing pet
Cypress.Commands.add('updatePet', (petId, petNewName, photoURL) => {
  cy.request('PUT', 'https://petstore.swagger.io/v2/pet/', {
      "id": petId, 
      "category": {
        "id": 0,
        "name": "string"
      },

      "name": petNewName,
      "photoUrls": [
        photoURL
      ],

      "tags": [
        {
          "id": 0,
          "name": "string"
        }
      ],
      "status": "available"
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.have.property('id', petId);
    expect(response.body).to.have.property('name', petNewName);
  });
});

// Command for deleting
// Example: petstoreapi.cy.js file, finding pet by ID
Cypress.Commands.add('deletePet', (petId) => {
  cy.request('DELETE', 'https://petstore.swagger.io/v2/pet/' + petId).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('message', "111");
  });
});

// Command for deleting version 2
// Example: petstoreapi.cy.js file, deleting pet by fake , which is not exist
Cypress.Commands.add('deleteFakePet', (fakePetId) => {
  cy.request('DELETE', 'https://petstore.swagger.io/v2/pet/' + fakePetId).then((response) => {
    expect(response.status).to.eq(404); 
  });
});

// Command for writting into file
//Example: petstoreapi.cy.js file, findin pet and saving to file
Cypress.Commands.add('findPetAndSaveToFile', (petId) => {
  cy.request('GET', 'https://petstore.swagger.io/v2/pet/' + petId).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.have.property('id', petId);
    cy.writeFile('cypress/fixtures/pet.json', response.body); 
  });
});

import { expect } from "chai";

Cypress.Commands.add('deleteProjectByCode',(projectCode,token) =>{
    cy.request({
        method: "DELETE",
        url: 'https://api.qase.io/v1/project/TA' + projectCode,
        headers:{
            Token: token
        }
    }).then((response)=>{
        expect(response.status).to.eq(200);
    })
})