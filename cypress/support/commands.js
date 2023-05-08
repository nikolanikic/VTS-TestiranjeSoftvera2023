Cypress.Commands.add('addPet', (petId, petName) => {

    cy.request('POST', 'https://petstore.swagger.io/v2/pet', {
        "id": petId,
        "category": {
            "id": 0,
            "name": "Dog"
        },
        "name": petName,
        "photoUrls": [
            "string"
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

})

Cypress.Commands.add('findPet', (petId) => {

    cy.request('GET', 'https://petstore.swagger.io/v2/pet/' + petId).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id', petId);

    });

})