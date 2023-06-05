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