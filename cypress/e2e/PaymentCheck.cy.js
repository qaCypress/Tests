import '../support/commands.js';

function queryFailed() {
    cy.get('.content')
        .then((body) => {
            if(body.find('form').length > 0) {
                cy.log('ВСЕ ЄЄЄЄЄ')
                cy.log(body.find('form').length)
                cy.wrap(true)
            } else {
                cy.log('НІЧОГО НЕМА')
                 cy.wrap(false)
            }
        })
  }


const AllRightCurrinces = ['USD', 'PLN', 'UAH', 'UZS', 'USD', 'RUB', 'ARS', 'MXN', 'PEN', 'CLP', 'ZAR', 'NOK', 'BRL', 'CAD', 'AUD', 'CHF', 'CZK', 'NZD', 'INR', 'JPY', 'AZN', 'KZT', 'GEL']

const AllRightEmails = 
['v.pupkinn.usd@gmail.com', 'v.pupkin.pln@gmail.com', 'v.pupkin.uah@gmail.com', 
'v.pupkin.uzs@gmail.com', 'v.pupkinn.usd@gmail.com', 'v.pupkin.rub@outlook.com', 
'v.pupkin.ars@outlook.com', 'v.pupkin.mxn@outlook.com', 'v.pupkin.pen@outlook.com', 
'v.pupkin.clp@outlook.com', 'v.pupkin.zar@outlook.com', 'v.pupkin.nok@outlook.com', 
'v.pupkin.brl@outlook.com', 'v.pupkin.cad@outlook.com', 'v.pupkin.aud@outlook.com', 
'v.pupkin.chf@outlook.com', 'v.pupkin.czk@gmail.com', 'v.pupkin.nzd@gmail.com', 
'v.pupkin.inr@gmail.com', 'v.pupkin.jpy@gmail.com', 'v.pupkin.azn@gmail.com', 
'v.pupkin.kzt@gmail.com', 'v.pupkin.gel@gmail.com']

const AllRightPasswords = 
['Vrp8VKMaiG', 'ePXzdyIeZH', 'P6QMU1BdQF', 
'MLlXgF3SN6', 'Vrp8VKMaiG', 'Ycr9HyqSgp', 
'cCX4W6opNh', 'ktFTixdjC2', 'AUQjkseWfb', 
'Xw7olloTWC', 'FEcG0t0TGJ', 'jdQ4ifwurz', 
'MrQ14AGSJ5', 'gP9VPACbeM', 'xvMOxpzTgf', 
'jr2mlttDhP', 'mjO2smEJT9', 'f9E99Jz9bP', 
'pekZiFuf5N', 'GSFzx8Oxo5', 'FotPkD2grg', 
'pekZiFuf5N', '$ncUy@cwFuF3.yT']

describe('AllRight', () => {
  beforeEach(() => {
    cy.visit('https://allrightcasino.com/en')
  })

// sgo


  for(let i = 0; i < AllRightCurrinces.length; i++) {
    it(AllRightCurrinces[i],  () => {
      cy.get('.header_bar > .actions > .white_button').click()
      cy.get('input[type="email"]').type(AllRightEmails[i])
      cy.get('input[type="password"]').first().type(AllRightPasswords[i])
      cy.get('#form-signin-email > .submit_button > .button').click()
  
      cy.wait(5000)
      cy.get('.close > .icon-close').click()
      cy.get('.header_bar > .actions > .orange').click();
  
      cy.get('.popup > :nth-child(2)')
        .invoke('text').should('not.include', 't.payment')
  
  
        let depositFormsIds = [];


        cy.get('.content')
        .then((body) => {
            if(body.find('form').length > 0) {
              cy.log('ВСЕ ЄЄЄЄЄ')
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
                    cy.get(`[data-key="${i}"] > .payment_item > .footer`)
                    .click()
                 
                    
                    cy.get(`#${depositFormsIds[i]}`).invoke('text').should('not.include', 't.payment')
                    
          
                    cy.get(`#${depositFormsIds[i]} > .header > .close > .icon`).click()
          
                    // Тут костиль, в процесі виправлення
                    //cy.visit('https://allrightcasino.com/en')
                    //cy.get('.header_bar > .actions > .orange').click();       
                  }
                        
                } else {
                  cy.log('sho')
                }
              
              })  
            } else {
                cy.log('НІЧОГО НЕМА')
                cy.get(`.content`).invoke('text').should('not.include', 't.payment')
            }
        })






   
      
  
        cy.visit('https://allrightcasino.com/en#cashbox-withdraw')
  
        cy.wait(4000)
  
        cy.get('.popup > :nth-child(2)')
        .invoke('text').should('not.include', 't.payment')
  
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
                    cy.get(`[data-key="${i}"] > .payment_item > .footer`)
                    .click()
                 
                    
                    cy.get(`#${withdrawFormsIds[i]}`).invoke('text').should('not.include', 't.payment')
                    
          
                    cy.get(`#${withdrawFormsIds[i]} > .header > .close > .icon`).click()
          
                    // Тут костиль, в процесі виправлення
                    //cy.visit('https://allrightcasino.com/en')
                    //cy.get('.header_bar > .actions > .orange').click();
                    
          
                  }
                  
              
                }
              
              });
            } else {
                cy.log('НІЧОГО НЕМА')
                cy.get(`.content`).invoke('text').should('not.include', 't.payment')
            }
        })
        
  

  
    })
  }


})