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


const AllRightCurrinces = ['USD', 'PLN']

const AllRightEmails = ['v.pupkinn.usd@gmail.com', 'v.pupkin.pln@gmail.com']

const AllRightPasswords = ['Vrp8VKMaiG', 'ePXzdyIeZH']

describe('AllRight', () => {
  beforeEach(() => {
    cy.visit('https://allrightcasino.com/en')
  })



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
            }
        })
   
      
       
      
      

  
        
  
        cy.visit('https://allrightcasino.com/en#cashbox-withdraw')
  
        cy.wait(4000)
  
        cy.get('.popup > :nth-child(2)')
        .invoke('text').should('not.include', 't.payment')
  
        let withdrawFormsIds = [];
  
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
        
  
      
  
  
    })
  }






})