import * as cur from '../support/data.js';

Cypress.Commands.add('loginAllright', (link, i) => { 

})

Cypress.Commands.add('loginLuckyBird', (link, i) => { 

})

Cypress.Commands.add('loginSlottica', (link, i) => { 

})

Cypress.Commands.add('loginSlottyWay', (link, i) => { 

})

Cypress.Commands.add('loginSpinamba', (link, i) => { 

})

Cypress.Commands.add('loginSpinBounty', (link, i) => { 

})

Cypress.Commands.add('loginViks', (link, i) => { 

})

Cypress.Commands.add('loginSuperCat', (link, i) => { 
    cy.visit(link)
    cy.get('input[type="email"]').type(cur.SuperCatData.login[i])
    cy.get('input[type="password"]').first().type(cur.SuperCatData.login[i])
    cy.get('.sign-in-form > .button').click()
})

Cypress.Commands.add('loginMagic365', (link, i) => {
    cy.visit(link)
    cy.get('input[type="email"]').type(cur.Magic365Data.login[i])
    cy.get('input[type="password"]').first().type(cur.Magic365Data.login[i])
    cy.get('#signinform > .submit').click()
});

Cypress.Commands.add('loginSpinado', (link, i) => {
    cy.visit(link)
    cy.get('input[type="email"]').type(cur.SpinadoData.login[i])
    cy.get('input[type="password"]').first().type(cur.SpinadoData.passwords[i])
    cy.get('#signinform_email > .form > :nth-child(4) > .button').click();
});

