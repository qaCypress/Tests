import '../support/commands.js';
import * as cur from '../support/data.js';

describe('AllRight', () => {
    beforeEach(() => {
      cy.visit('https://allrightcasino.com/en')
    })
  
  
    for(let j = 0; j < cur.AllRightData.currency.length - 17; j++) {
      it(cur.AllRightData.currency[j],  () => {
        cy.get(`[data-href="/en/sign-in"][class="button white_button"]`).click()
        cy.get('input[type="email"]').type(cur.AllRightData.emails[j])
        cy.get('input[type="password"]').first().type(cur.AllRightData.passwords[j])
        cy.get('#form-signin-email > .submit_button > .button').click()
        
        cy.wait(4000)
        cy.visit('https://allrightcasino.com/en#cashbox-deposit')
        cy.wait(2000)
        
        cy.findKey(`.popup`, 't.payment')
     
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
                      
                      cy.findKey(`[data-key="${i}"]`, 't.payment')
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
                  cy.findKey(`.popup`, 't.payment')
              }
          })
  
          cy.visit('https://allrightcasino.com/en#cashbox-withdraw')
          cy.wait(2000)
    
          cy.findKey(`.popup`, 't.payment')
    
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
                              
                      cy.findKey(`#${withdrawFormsIds[i]}`, 't.payment')
                      cy.findKey(`#${withdrawFormsIds[i]}`, 't.withdraw')
                      cy.CheckImage(`[data-key="${i}"]`, `.image`)                  
                    }                        
                  }
                
                });
              } else {
                  cy.log('НІЧОГО НЕМА')
                  cy.findKey(`.popup`, 't.payment')
                  cy.findKey(`.popup`, 't.withdraw')
              }
          })
    
      })
    }
  })