import '../support/commands.js';

Cypress.Commands.add('withdrawAllright', (keys) => { 
  let withdrawFormsIds = [];

  cy.get('.content')
  .then((body) => {
      if(body.find('form').length > 0) {
        cy.get('div.payment_forms')  
        .find('form')              
        .each((form) => {           
          const formId = form.attr('id');  
          withdrawFormsIds.push(formId);            
        })
        .then(() => {
          cy.log(withdrawFormsIds.length);  
        
          if (withdrawFormsIds.length > 0) {
  
            for(let i = 0; i < withdrawFormsIds.length; i++) {
                      
              cy.findKey(`#${withdrawFormsIds[i]}`, keys)
              cy.CheckImage(`[data-key="${i}"]`, `.image`)                  
            }                        
          }
        
        });
      } else {
          cy.log('НІЧОГО НЕМА')
          cy.findKey(`.popup`, keys)
      }
  })
})

Cypress.Commands.add('withdrawLuckyBird', (keys) => { 
  let withdrawFormsIds = [];

  cy.get('.cashbox_content')
  .then((body) => {
      if(body.find('form').length > 0) {
        cy.get('div.payment__item')  
        .find('form')              
        .each((form) => {           
          const formId = form.attr('id');  
          withdrawFormsIds.push(formId);            
        })
        .then(() => {
          cy.log(withdrawFormsIds.length);  
        
          if (withdrawFormsIds.length > 0) {
  
            for(let i = 0; i < withdrawFormsIds.length; i++) {              
              cy.findKey(`#${withdrawFormsIds[i]}`, keys)   
              cy.CheckImage(`[data-key="${i}"]`, `.image`)
            }
          }       
        });
      } else {
          cy.log('НІЧОГО НЕМА')
          cy.findKey(`.cashbox_content > .payment__gallery`, keys)  
      }
  })
})

Cypress.Commands.add('withdrawSlottica', (keys) => { 
  let withdrawFormsIds = [];

  cy.get('.payments_gallery_wrap')
  .then((body) => {
      if(body.find('form').length > 0) {
        cy.get('div.item')  
        .find('form')              
        .each((form) => {           
          const formId = form.attr('id');  
          withdrawFormsIds.push(formId);            
        })
        .then(() => {
          cy.log(withdrawFormsIds.length);  
        
          if (withdrawFormsIds.length > 0) {
  
            for(let i = 0; i < withdrawFormsIds.length; i++) {
              cy.CheckImage(`[data-key="${i}"]`, `img`)

              cy.findKey(`#${withdrawFormsIds[i]}`, keys)  
            }
          }       
        });
      } else {
          cy.log('НІЧОГО НЕМА')
          cy.findKey(`.popup_content`, keys) 
      }
  })
})

Cypress.Commands.add('withdrawSlottyWay', (keys) => { 
  let withdrawFormsIds = [];

  cy.get('.payment__gallery')
  .then((body) => {
      if(body.find('form').length > 0) {
        cy.get('div.payment__item')  
        .find('form')              
        .each((form) => {           
          const formId = form.attr('id');  
          withdrawFormsIds.push(formId);            
        })
        .then(() => {
          cy.log(withdrawFormsIds.length);  
        
          if (withdrawFormsIds.length > 0) {
  
            for(let i = 0; i < withdrawFormsIds.length; i++) {        
              cy.CheckImage(`[data-key="${i}"]`, `.image`)    
              cy.findKey(`#${withdrawFormsIds[i]}`, keys)
            }
          }       
        });
      } else {
          cy.log('НІЧОГО НЕМА')
          cy.findKey(`.popup > .content > .modal_profile_content > .cashbox_content > .payment__gallery`, keys)
      }
  })
})

Cypress.Commands.add('withdrawSpinamba', (keys) => { 
  let withdrawFormsIds = [];

  cy.get('.modal_profile_content')
  .then((body) => {
      if(body.find('form').length > 0) {
        cy.get('div.payment__item')  
        .find('form')              
        .each((form) => {           
          const formId = form.attr('id');  
          withdrawFormsIds.push(formId);            
        })
        .then(() => {
          cy.log(withdrawFormsIds.length);       
          if (withdrawFormsIds.length > 0) {
  
            for(let i = 0; i < withdrawFormsIds.length; i++) {        
              cy.findKey(`#${withdrawFormsIds[i]}`, keys)
              cy.CheckImage(`[data-key="${i}"]`, `.image`)
            }
          }       
        });
      } else {
          cy.log('НІЧОГО НЕМА')
          cy.findKey(`.popup`, keys)
      }
  })
})

Cypress.Commands.add('withdrawSpinBounty', (keys) => { 
  let withdrawFormsIds = [];

  cy.get('.payments_gallery_wrap')
  .then((body) => {
      if(body.find('form').length > 0) {
        cy.get('div.item')  
        .find('form')              
        .each((form) => {           
          const formId = form.attr('id');  
          withdrawFormsIds.push(formId);            
        })
        .then(() => {
          cy.log(withdrawFormsIds.length);  
        
          if (withdrawFormsIds.length > 0) {
  
            for(let i = 0; i < withdrawFormsIds.length; i++) {
              cy.findKey(`#${withdrawFormsIds[i]}`, keys)
              cy.CheckImage(`[data-key="${i}"]`, `img`)
            }
          }       
        });
      } else {
          cy.log('НІЧОГО НЕМА')
          cy.findKey(`#profile-modal > .content > .payments_gallery_wrap`, keys)
      }
  })
})

Cypress.Commands.add('withdrawViks', (keys) => { 
  let withdrawFormsIds = [];

  cy.get('.payments_gallery')
  .then((body) => {
      if(body.find('item').length > 0) {
        cy.get('.payments_gallery')  
        .find('.payment_item')              
        .each((form) => {           
          const formId = form.attr('data-target-id');  
          withdrawFormsIds.push(formId);            
        })
        .then(() => {
          cy.log(withdrawFormsIds.length);  
        
          if (withdrawFormsIds.length > 0) {
  
            for(let i = 0; i < withdrawFormsIds.length; i++) {
              cy.CheckImage(`:nth-child(${i + 1}) > .payment_item `, `img`)   
              cy.get(`.payments_gallery > data-target-id="${withdrawFormsIds[i]}"`).first()
              .click({force: true})         
              cy.findKey(`[class="popup_card"]`, keys)              
              cy.get(`[data-trigger="cashbox.close"]`).first().click({force: true})
             
            }
          }       
        });
      } else {
          cy.log('НІЧОГО НЕМА')
          cy.findKey('.popup_content', keys)
      }
  })
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
    cy.get('.modal_container')
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
          cy.findKey('.modal_container', keys)
        }
      })
})



