import * as ProjectsData from '../support/data.js';

const { AllRightData, LuckyBirdData, SlotticaData, SlottyWayData, SpinambaData, 
    SpinBountyData, ViksData, SuperCatData, Magic365Data, SpinadoData } = ProjectsData;

Cypress.Commands.add('loginAllright', (link, i) => { 
    cy.visit(link)
    cy.get('input[type="email"]').type(AllRightData.login[i])
    cy.get('input[type="password"]').first().type(AllRightData.login[i])
    cy.get('#form-signin-email > .submit_button > .button').click()
})

Cypress.Commands.add('loginLuckyBird', (link, i) => { 
    cy.visit(link)
    cy.get('input[type="email"]').type(LuckyBirdData.login[i])
    cy.get('input[type="password"]').first().type(LuckyBirdData.login[i])
    cy.get(`[class="submit_button"]`).first().click()
})

Cypress.Commands.add('loginSlottica', (link, i) => { 
    cy.visit(link)
    cy.get('input[type="email"]').type(SlotticaData.login[i])
    cy.get('input[type="password"]').first().type(SlotticaData.login[i])
    cy.get('#signinform_email > .form > :nth-child(4) > .button').click()
})

Cypress.Commands.add('loginSlottyWay', (link, i) => { 
    cy.visit(link)
    cy.get('input[type="email"]').type(SlottyWayData.login[i])
    cy.get('input[type="password"]').first().type(SlottyWayData.login[i])
    cy.get(':nth-child(8) > .button').click()
})

Cypress.Commands.add('loginSpinamba', (link, i) => { 
    cy.visit(link)
    cy.get('#form-signin-email > .group-name-login > .control-label').type(SpinambaData.login[i])
    cy.get('#form-signin-email > .group-name-password > .control-label').type(SpinambaData.login[i])
    cy.get('#form-signin-email > .submit_button > .button').click()
})

Cypress.Commands.add('loginSpinBounty', (link, i) => { 
    cy.visit(link)
    cy.get('input[type="email"]').type(SpinBountyData.login[i])
    cy.get('input[type="password"]').first().type(SpinBountyData.login[i])
    cy.get('#signinform > .submit').click()
})

Cypress.Commands.add('loginViks', (link, i) => { 
    cy.visit(link)
    cy.get('[data-tab="email"] > .label').click()
    cy.get('input[type="email"]').type(ViksData.login[i])
    cy.get('input[type="password"]').first().type(ViksData.login[i])
    cy.get('#signinform_email > .form > :nth-child(4) > .button').click()
})

Cypress.Commands.add('loginSuperCat', (link, i) => { 
    cy.visit(link)
    cy.get('input[type="email"]').type(SuperCatData.login[i])
    cy.get('input[type="password"]').first().type(SuperCatData.login[i])
    cy.get('.sign-in-form > .button').click()
})

Cypress.Commands.add('loginMagic365', (link, i) => {
    cy.visit(link)
    cy.get('input[type="email"]').type(Magic365Data.login[i])
    cy.get('input[type="password"]').first().type(Magic365Data.login[i])
    cy.get('#signinform > .submit').click()
});

Cypress.Commands.add('loginSpinado', (link, i) => {
    cy.visit(link)
    cy.get('input[type="email"]').type(SpinadoData.login[i])
    cy.get('input[type="password"]').first().type(SpinadoData.passwords[i])
    cy.get('#signinform_email > .form > :nth-child(4) > .button').click();
});

