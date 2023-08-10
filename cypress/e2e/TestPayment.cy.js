import '../support/commands.js';
import * as cur from '../support/data.js';

describe('SuperCat', () => {
  beforeEach(() => {
    cy.visit('https://supercatcasino67.com/en')
  })


  for(let i = 0; i < cur.SuperCatData.currency.length - 11; i++) {
    it(cur.SuperCatData.currency[i],  () => {
      cy.visit('https://supercatcasino67.com/en/sign-in')
      cy.get('input[type="email"]').type(cur.SuperCatData.emails[i])
      cy.get('input[type="password"]').first().type(cur.SuperCatData.passwords[i])
      cy.get('.sign-in-form > .button').click()
  
      cy.wait(5000)
      cy.visit('https://supercatcasino67.com/en/player/cashbox/deposit')
      cy.wait(5000)
      cy.findKey('.cashbox-content', 't.payment')

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
                      cy.findKey('.player-modal__content', 't.payment')
                      cy.CheckImage(`#cash-item-${depositFormsIds[i].replace(/\s/g, '\\\ ')}`, `img`)
                      cy.CheckLimits(deposidMethod, depositForm, radiobutton, true)
                    } 
                    
                    else if(depositFormsIds[i] == `bank transfer voucher`) {
                      depositFormsIds[i] = 'bank transfer voucher';
                      deposidMethod = `#cash-item-${depositFormsIds[i].replace(/\s/g, '\\\ ')} > .cash-item > .cash-item__limits`;

                      cy.get(`#cash-item-${depositFormsIds[i].replace(/\s/g, '\\\ ')} > .cash-item`).click();
                      cy.findKey('.player-modal__content', 't.payment')
                      cy.CheckImage(`#cash-item-${depositFormsIds[i].replace(/\s/g, '\\\ ')}`, `img`)
                      cy.CheckLimits(deposidMethod, depositForm, radiobutton, true)
                    }
                    
                    else{

                      cy.get(`#cash-item-${depositFormsIds[i]} > .cash-item`).click()       
                      cy.findKey('.player-modal__content', 't.payment')     
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
                cy.findKey('.cashbox-content', 't.payment')
            }
        })

        cy.visit('https://supercatcasino67.com/en/player/cashbox/withdraw')
  
        cy.wait(7000)
  
        cy.findKey('.cashbox-content', 't.payment')
  
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
                      cy.findKey('.player-modal__content', 't.payment')
                      cy.findKey('.player-modal__content', 't.withdraw')
                  }
                }
              });
            } else {
                cy.log('НІЧОГО НЕМА')
                cy.findKey('.cashbox-content', 't.payment')
                cy.findKey('.cashbox-content', 't.withdraw')
            }
        })
  
    })
  }
})