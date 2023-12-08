import '../support/commands.js';


Cypress.Commands.add('depAllright', (keys) => { 

})

Cypress.Commands.add('depLuckyBird', (keys) => { 

})

Cypress.Commands.add('depSlottica', (keys) => { 

})

Cypress.Commands.add('depSlottyWay', (keys) => { 

})

Cypress.Commands.add('depSpinamba', (keys) => { 

})

Cypress.Commands.add('depSpinBounty', (keys) => { 

})

Cypress.Commands.add('depViks', (keys) => { 

})

Cypress.Commands.add('depSuperCat', (keys) => { 
    let depositFormsIds = [];

    cy.get('.cashbox-content')
    .then((body) => {
        if(body.find('.cash-item').length > 0) {
          cy.log('Кіно буде')
          cy.get('.cash-item')  
          .find('.cash-item__logo')              
          .each((form) => {           
            const formId = form.attr('alt');  
            depositFormsIds.push(formId);            
          })
          .then(() => {
            cy.log(depositFormsIds.length);  
          
            if (depositFormsIds.length > 0) {
    
              for(let i = 0; i < depositFormsIds.length; i++) {

                cy.log(depositFormsIds[i])

                let deposidMethod = `#cash-item-${depositFormsIds[i]} > .cash-item > .cash-item__limits`;
                let depositForm = `.col-auto`;
                let radiobutton = 'input[type="radio"]';
                
                //Два костиля, оскільки деякі платіжні методи пишуться якось унікально, постараюсь виправити
                if(depositFormsIds[i] == `bank transfer token`) {
                  depositFormsIds[i] = 'bank transfer token';
                  deposidMethod = `#cash-item-${depositFormsIds[i].replace(/\s/g, '\\\ ')} > .cash-item > .cash-item__limits`;

                  cy.get(`#cash-item-${depositFormsIds[i].replace(/\s/g, '\\\ ')} > .cash-item`).click();
                  cy.findKey('.player-modal__content', keys)
                  cy.CheckImage(`#cash-item-${depositFormsIds[i].replace(/\s/g, '\\\ ')}`, `img`)
                  cy.CheckLimits(deposidMethod, depositForm, radiobutton, true)
                } 
                
                else if(depositFormsIds[i] == `bank transfer voucher`) {
                  depositFormsIds[i] = 'bank transfer voucher';
                  deposidMethod = `#cash-item-${depositFormsIds[i].replace(/\s/g, '\\\ ')} > .cash-item > .cash-item__limits`;

                  cy.get(`#cash-item-${depositFormsIds[i].replace(/\s/g, '\\\ ')} > .cash-item`).click();
                  cy.findKey('.player-modal__content', keys)
                  cy.CheckImage(`#cash-item-${depositFormsIds[i].replace(/\s/g, '\\\ ')}`, `img`)
                  cy.CheckLimits(deposidMethod, depositForm, radiobutton, true)
                }
                
                else{

                  cy.get(`#cash-item-${depositFormsIds[i]} > .cash-item`).click()       
                  cy.findKey('.player-modal__content', keys)     
                  cy.CheckImage(`#cash-item-${depositFormsIds[i]}`, `img`)
                  cy.CheckLimits(deposidMethod, depositForm, radiobutton, true)
                }
              }
                    
            } else {
              cy.log('sho')
            }
          
          })  
        } else {
            cy.log('НІЧОГО НЕМА')
            cy.findKey('.cashbox-content', keys)
        }
    })
})

Cypress.Commands.add('depMagic365', (keys) => {
    const depositFormsIds = []
    cy.get('.payments_gallery_wrap')
      .then((body) => {
        if (body.find('form').length > 0) {
          cy.get('.item')
            .find('form')
            .each((form) => {
              const formId = form.attr('id')
              depositFormsIds.push(formId)
            })
            .then(() => {
              cy.log(depositFormsIds.length)
    
              if (depositFormsIds.length > 0) {
                for (let i = 0; i < depositFormsIds.length; i++) {
                  cy.findKey(`#${depositFormsIds[i]}`, keys)
                  cy.CheckImage(`[data-key="${i}"]`, 'img')
    
                  const deposidMethod = `#${depositFormsIds[i]} > .form_header > .info_wrap > .payment_limits`
                  const depositForm = `#${depositFormsIds[i]}`
                  const radiobutton = '[class="checkbox"] input[type="radio"][name="PaymentForm[predefinedValue]"]'
    
                  cy.CheckLimits(deposidMethod, depositForm, radiobutton)
                }
              } else {
                cy.log('sho')
              }
            })
        } else {
          cy.log('НІЧОГО НЕМА')
          cy.findKey('#profile-modal > .content > .payments_gallery_wrap', keys)
        }
      })
});

Cypress.Commands.add('depSpinado', (keys) => {
    let depositFormsIds = [];
    cy.get('.payments_gallery').then((body) => {
      if(body.find('form').length > 0) {
        cy.get('.item')  
        .find('form')              
        .each((form) => {           
          const formId = form.attr('id');  
          depositFormsIds.push(formId);            
        })
        .then(() => {
          if (depositFormsIds.length > 0) {
            for (let i = 0; i < depositFormsIds.length; i++) {
              cy.findKey(`#${depositFormsIds[i]}`, keys)
              cy.CheckImage(`[data-key="${i}"]`, 'img')

              const deposidMethod = `[data-key="${i}"] > .payment_card`
              const depositForm = `#${depositFormsIds[i]}`
              const radiobutton = '[class="form-group checkbox variant"] input[type="radio"][name="predefinedValue"]'

              cy.CheckLimits(deposidMethod, depositForm, radiobutton)
            }
          } else {
            cy.log('sho')
          }
        })
      } else {
        cy.log('НІЧОГО НЕМА')
        cy.findKey('#profile-modal > .popup', keys)
      }
    })
});



