import { expect } from "chai";

Cypress.Commands.add('addPet', (petId, petName, photoURL) => {
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

Cypress.Commands.add('findPet', (petId) => {
    cy.request('GET', 'https://petstore.swagger.io/v2/pet/' + petId).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', petId);
    })
});

Cypress.Commands.add('updatePet', (petId, petNewName, photoURL) => {
    cy.request('PUT', 'https://petstore.swagger.io/v2/pet', {
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

Cypress.Commands.add('deletePet', (petId) => {
    cy.request('DELETE', 'https://petstore.swagger.io/v2/pet/' + petId).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('message', "111");
    })
});

Cypress.Commands.add('deleteFakePet', (petId) => {
    cy.request('DELETE', 'https://petstore.swagger.io/v2/pet/' + petId).then((response) => {
        expect(response.status).to.eq(404);
    })
});

Cypress.Commands.add('findPetAndSaveToFile', (petId) => {
    cy.request('GET', 'https://petstore.swagger.io/v2/pet/' + petId).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', petId);
        cy.writeFile('cypress/fixtures/pet.json', response.body)
    })
});

Cypress.Commands.add('deleteProjectByCode', (projectCode, token) => {
    cy.request({
        method: "DELETE",
        url: "https://api.qase.io/v1/project/TN" + projectCode,
        headers: {
            Token: token
        }
    }).then((response) => {
        expect(response.status).to.eq(200);
     })
})