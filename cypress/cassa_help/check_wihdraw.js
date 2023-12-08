import '../support/commands.js';

Cypress.Commands.add('withdrawAllright', (keys) => { 

})

Cypress.Commands.add('withdrawLuckyBird', (keys) => { 

})

Cypress.Commands.add('withdrawSlottica', (keys) => { 

})

Cypress.Commands.add('withdrawSlottyWay', (keys) => { 

})

Cypress.Commands.add('withdrawSpinamba', (keys) => { 

})

Cypress.Commands.add('withdrawSpinBounty', (keys) => { 

})

Cypress.Commands.add('withdrawViks', (keys) => { 

})

Cypress.Commands.add('withdrawSuperCat', (keys) => { 
    let withdrawFormsIds = [];

    cy.get('.cashbox-content')
    .then((body) => {
        if(body.find('.cash-item').length > 0) {
          cy.get('.cash-item')  
          .find('.cash-item__logo')              
          .each((form) => {           
            const formId = form.attr('alt');  
            withdrawFormsIds.push(formId);            
          })
          .then(() => {
            cy.log(withdrawFormsIds.length);  
          
            if (withdrawFormsIds.length > 0) {
    
              for(let i = 0; i < withdrawFormsIds.length; i++) {
                cy.get(`#cash-item-${withdrawFormsIds[i]} > .cash-item`)
                  .click()       
                  cy.findKey('.player-modal__content', keys)
              }
            }
          });
        } else {
            cy.log('НІЧОГО НЕМА')
            cy.findKey('.cashbox-content', keys)
        }
    })
})

Cypress.Commands.add('withdrawMagic365', (keys) => { 
    const withdrawFormsIds = []

    cy.get('.payments_gallery_wrap')
      .then((body) => {
        if (body.find('form').length > 0) {
          cy.get('div.item')
            .find('form')
            .each((form) => {
              const formId = form.attr('id')
              withdrawFormsIds.push(formId)
            })
            .then(() => {
              cy.log(withdrawFormsIds.length)
    
              if (withdrawFormsIds.length > 0) {
                for (let i = 0; i < withdrawFormsIds.length; i++) {
                  cy.findKey(`#${withdrawFormsIds[i]}`, keys)
                  cy.CheckImage(`[data-key="${i}"]`, 'img')
                }
              }
            })
        } else {
          cy.log('НІЧОГО НЕМА')
          cy.findKey('#profile-modal > .content > .payments_gallery_wrap', keys)
        }
      })
})


Cypress.Commands.add('withdrawSpinado', (keys) => { 
    const withdrawFormsIds = []
    cy.get('.payments_gallery_wrap')
      .then((body) => {
        if (body.find('form').length > 0) {
          cy.get('div.item')
            .find('form')
            .each((form) => {
              const formId = form.attr('id')
              withdrawFormsIds.push(formId)
            })
            .then(() => {
              cy.log(withdrawFormsIds.length)

              if (withdrawFormsIds.length > 0) {
                for (let i = 0; i < withdrawFormsIds.length; i++) {
                  cy.findKey(`#${withdrawFormsIds[i]}`, keys)
                  cy.CheckImage(`[data-key="${i}"]`, 'img')
                }
              }
            })
        } else {
          cy.log('НІЧОГО НЕМА')
          cy.findKey('#profile-modal > .content > .payments_gallery_wrap', keys)
        }
      })
})



