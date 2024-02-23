import '../support/commands.js';


Cypress.Commands.add('depAllright', (keys) => { 
  let depositFormsIds = [];
  cy.get('.content')
  .then((body) => {
      if(body.find('form').length > 0) {
        cy.log('Кіно буде')
        cy.get('.payment_forms')
        .find('form')            
        .each((form) => {           
          const formId = form.attr('id');  
          depositFormsIds.push(formId);            
        })
        .then(() => { 
          cy.log(depositFormsIds.length);  
        
          if (depositFormsIds.length > 0) {
  
            for(let i = 0; i < depositFormsIds.length; i++) {
              
              cy.findKey(`[data-key="${i}"]`, keys)
              cy.CheckImage(`[data-key="${i}"]`, `.image`)

              let deposidMethod = `[data-key="${i}"] > .form_row > .limit`;
              let depositForm = `#${depositFormsIds[i]}`;
              let radiobutton = '.form-group.radio input[name="predefinedValue"]';

              cy.CheckLimits(deposidMethod, depositForm, radiobutton)
             
            }
                  
          } else {
            cy.log('sho')
          }
        
        })  
      } else {
          cy.log('НІЧОГО НЕМА')
          cy.findKey(`.popup`, keys)
      }
  })
})

Cypress.Commands.add('depLuckyBird', (keys) => { 
  let depositFormsIds = [];


  cy.get('.cashbox_content')
  .then((body) => {
      if(body.find('form').length > 0) {
        cy.log('Кіно буде')
        cy.get('.payment__item')  
        .find('form')              
        .each((form) => {           
          const formId = form.attr('id');  
          depositFormsIds.push(formId);            
        })
        .then(() => {
          cy.log(depositFormsIds.length);  
        
          if (depositFormsIds.length > 0) {
  
            for(let i = 0; i < depositFormsIds.length; i++) {  
              cy.findKey(`#${depositFormsIds[i]}`, keys)     
              cy.CheckImage(`[data-key="${i}"]`, `.image`)
              
              let deposidMethod = `[data-key="${i}"] > .footer > .text`;
              let depositForm = `#${depositFormsIds[i]}`;
              let radiobutton = '.form-row-amount-variants input[type="radio"][name="predefinedValue"]';

              cy.CheckLimits(deposidMethod, depositForm, radiobutton)

            }
                  
          } else {
            cy.log('sho')
          }
        
        })  
      } else {
          cy.log('НІЧОГО НЕМА')
          cy.findKey(`.cashbox_content > .payment__gallery`, keys)  
      }
  })
})

Cypress.Commands.add('depSlottica', (keys) => { 
  let depositFormsIds = [];


  cy.get('.payments_gallery_wrap')
  .then((body) => {
      if(body.find('form').length > 0) {
        cy.log('Кіно буде')
        cy.get('.item')  
        .find('form')              
        .each((form) => {           
          const formId = form.attr('id');  
          depositFormsIds.push(formId);            
        })
        .then(() => {
          cy.log(depositFormsIds.length);  
        
          if (depositFormsIds.length > 0) {
  
            for(let i = 0; i < depositFormsIds.length; i++) {
             
              cy.findKey(`#${depositFormsIds[i]}`, keys)  
              cy.CheckImage(`[data-key="${i}"]`, `img`)

              let deposidMethod = `[data-key="${i}"] > .payment_card `;
              let depositForm = `#${depositFormsIds[i]}`;
              let radiobutton = '[class="form-group checkbox variant"] input[type="radio"][name="predefinedValue"]';

              cy.CheckLimits(deposidMethod, depositForm, radiobutton)    
 
            }
                  
          } else {
            cy.log('sho')
          }
        
        })  
      } else {
          cy.log('НІЧОГО НЕМА')
          cy.findKey(`.popup_content`, keys)  
          
      }
  })
})

Cypress.Commands.add('depSlottyWay', (keys) => { 
  let depositFormsIds = [];
  cy.get('.payment__gallery')
  .then((body) => {
      if(body.find('form').length > 0) {
        cy.log('Кіно буде')
        cy.get('.item')  
        .find('form')              
        .each((form) => {           
          const formId = form.attr('id');  
          depositFormsIds.push(formId);            
        })
        .then(() => {
          cy.log(depositFormsIds.length);  
        
          if (depositFormsIds.length > 0) {
  
            for(let i = 0; i < depositFormsIds.length; i++) {     
              cy.CheckImage(`[data-key="${i}"]`, `.image`)
              cy.findKey(`#${depositFormsIds[i]}`, keys) 

             let deposidMethod = `[data-key="${i}"] > .footer `;
             let depositForm = `#${depositFormsIds[i]}`;
             let radiobutton = '[class="row form-row-amount"] input[type="radio"][name="predefinedValue"]';

             cy.CheckLimits(deposidMethod, depositForm, radiobutton)   
    
            }
                  
          } else {
            cy.log('sho')
          }
        
        })  
      } else {
          cy.log('НІЧОГО НЕМА')
          cy.findKey(`.popup > .content > .modal_profile_content > .cashbox_content > .payment__gallery`, keys)
      }
  })
})

Cypress.Commands.add('depSpinamba', (keys) => { 
  let depositFormsIds = [];


  cy.get('.modal_profile_content')
  .then((body) => {
      if(body.find('form').length > 0) {
        cy.log('Кіно буде')
        cy.get('.item')  
        .find('form')              
        .each((form) => {           
          const formId = form.attr('id');  
          depositFormsIds.push(formId);            
        })
        .then(() => {
          cy.log(depositFormsIds.length);  
        
          if (depositFormsIds.length > 0) {
  
            for(let i = 0; i < depositFormsIds.length; i++) {      
              cy.findKey(`#${depositFormsIds[i]}`, keys)             
              cy.CheckImage(`[data-key="${i}"]`, `.image`)

             let deposidMethod = `[data-key="${i}"] > .footer `;
             let depositForm = `#${depositFormsIds[i]}`;
             let radiobutton = '[class="row form-row-amount"] input[type="radio"][name="predefinedValue"]';

             cy.CheckLimits(deposidMethod, depositForm, radiobutton)    
             
    
            }
                  
          } else {
            cy.log('sho')
          }
        
        })  
      } else {
          cy.log('НІЧОГО НЕМА')
          cy.findKey(`.popup`, keys)   
      }
  })
})

Cypress.Commands.add('depSpinBounty', (keys) => { 
 
  let depositFormsIds = [];


  cy.get('#profile-modal')
  .then((body) => {
      if(body.find('form').length > 0) {
        cy.log('Кіно буде')
        cy.get('.item')  
        .find('form')              
        .each((form) => {           
          const formId = form.attr('id');  
          depositFormsIds.push(formId);            
        })
        .then(() => {
          cy.log(depositFormsIds.length);  
        
          if (depositFormsIds.length > 0) {
  
            for(let i = 0; i < depositFormsIds.length; i++) { 
              cy.findKey(`#${depositFormsIds[i]}`, keys)             
              cy.CheckImage(`[data-key="${i}"]`, `img`)

             let deposidMethod = `#${depositFormsIds[i]} > .form_header > .info_wrap > .payment_limits`;
             let depositForm = `#${depositFormsIds[i]}`;
             let radiobutton = '[class="checkbox"] input[type="radio"][name="PaymentForm[predefinedValue]"]';

             cy.CheckLimits(deposidMethod, depositForm, radiobutton) 
    
            }
                  
          } else {
            cy.log('sho')
          }
        
        })  
      } else {
          cy.log('НІЧОГО НЕМА')
          cy.findKey(`#profile-modal`, keys)
      }
  })
})

Cypress.Commands.add('depViks', (keys) => { 
  let depositFormsIds = [];
  cy.get('.payments_gallery')
  .then((body) => {
      if(body.find('form').length > 0) {
        cy.log('Кіно буде')
        cy.get('.item')  
        .find('form')              
        .each((form) => {           
          const formId = form.attr('id');  
          depositFormsIds.push(formId);            
        })
        .then(() => {
          cy.log(depositFormsIds.length);  
        
          if (depositFormsIds.length > 0) {
  
            for(let i = 0; i < depositFormsIds.length; i++) {
              cy.CheckImage(`:nth-child(${i + 1}) > .payment_item `, `img`)              
              cy.findKey(`#${depositFormsIds[i]}`, keys)
               

              let deposidMethod = `:nth-child(${i + 1}) > .payment_item > .payment_limits`;
              let depositForm = `#modal-${depositFormsIds[i].substring(depositFormsIds[i].indexOf("-") + 1)}`;
              let radiobutton = 'input[type="radio"][name="predefinedValue"]';
              

              cy.CheckLimits(deposidMethod, depositForm, radiobutton)
             
    
            }
                  
          } else {
            cy.log('sho')
          }
        
        })  
      } else {
          cy.log('НІЧОГО НЕМА')
          cy.findKey('.popup_content', keys)
      }
  })
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
    cy.get('#profile-modal')
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
          cy.findKey('#profile-modal', keys)
        }
      })
});

Cypress.Commands.add('depSpinado', (keys) => {
    let depositFormsIds = [];
    cy.get('.modal_container').then((body) => {
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



