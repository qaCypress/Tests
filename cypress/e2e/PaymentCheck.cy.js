import '../support/commands.js';






const AllRightCurrinces = 
['EUR', 'PLN', 'UAH', 
'UZS', 'USD', 'RUB', 
'ARS', 'MXN', 'PEN', 
'CLP', 'ZAR', 'NOK', 
'BRL', 'CAD', 'AUD', 
'CHF', 'CZK', 'NZD', 
'INR', 'JPY', 'AZN', 
'KZT', 'GEL']
const AllRightEmails = 
['v.pupkin.eur@gmail.com', 'v.pupkin.pln@gmail.com', 'v.pupkin.uah@gmail.com', 
'v.pupkin.uzs@gmail.com', 'v.pupkinn.usd@gmail.com', 'v.pupkin.rub@outlook.com', 
'v.pupkin.ars@outlook.com', 'v.pupkin.mxn@outlook.com', 'v.pupkin.pen@outlook.com', 
'v.pupkin.clp@outlook.com', 'v.pupkin.zar@outlook.com', 'v.pupkin.nok@outlook.com', 
'v.pupkin.brl@outlook.com', 'v.pupkin.cad@outlook.com', 'v.pupkin.aud@outlook.com', 
'v.pupkin.chf@outlook.com', 'v.pupkin.czk@gmail.com', 'v.pupkin.nzd@gmail.com', 
'v.pupkin.inr@gmail.com', 'v.pupkin.jpy@gmail.com', 'v.pupkin.azn@gmail.com', 
'v.pupkin.kzt@gmail.com', 'v.pupkin.gel@gmail.com']
const AllRightPasswords = 
['JTFN3W9JM4', 'ePXzdyIeZH', 'P6QMU1BdQF', 
'MLlXgF3SN6', 'Vrp8VKMaiG', 'Ycr9HyqSgp', 
'cCX4W6opNh', 'ktFTixdjC2', 'AUQjkseWfb', 
'Xw7olloTWC', 'FEcG0t0TGJ', 'jdQ4ifwurz', 
'MrQ14AGSJ5', 'gP9VPACbeM', 'xvMOxpzTgf', 
'jr2mlttDhP', 'mjO2smEJT9', 'f9E99Jz9bP', 
'pekZiFuf5N', 'GSFzx8Oxo5', 'FotPkD2grg', 
'pekZiFuf5N', '$ncUy@cwFuF3.yT']

const LuckyBirdCurrinces = ['EUR', 'PLN', 'USD']
const LuckyBirdEmails = ['v.pupkin.eur@gmail.com', 'v.pupkin.pln@gmail.com', 'v.pupkinn.usd@gmail.com']
const LuckyBirdPasswords = ['JTFN3W9JM4', 'ePXzdyIeZH', 'Vrp8VKMaiG']

const SlotticaCurrinces = ['EUR', 'PLN', 'USD']
const SlotticaEmails = ['v.pupkin.eur@gmail.com', 'v.pupkin.pln@gmail.com', 'v.pupkinn.usd@gmail.com']
const SlotticaPasswords = ['JTFN3W9JM4', 'ePXzdyIeZH', 'Vrp8VKMaiG']

const SlottyWayCurrinces = ['EUR', 'PLN', 'USD']
const SlottyWayEmails = ['v.pupkin.eur@gmail.com', 'v.pupkin.pln@gmail.com', 'v.pupkinn.usd@gmail.com']
const SlottyWayPasswords = ['JTFN3W9JM4', 'ePXzdyIeZH', 'Vrp8VKMaiG']

const SpinambaCurrinces = ['EUR', 'PLN', 'USD']
const SpinambaEmails = ['v.pupkin.eur@gmail.com', 'v.pupkin.pln@gmail.com', 'v.pupkinn.usd@gmail.com']
const SpinambaPasswords = ['JTFN3W9JM4', 'ePXzdyIeZH', 'Vrp8VKMaiG']

const SpinBountyCurrinces = ['EUR']
const SpinBountyEmails = ['v.pupkin.eur@gmail.com']
const SpinBountyPasswords = ['JTFN3W9JM4']
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
        //Оп, якщо це бачиш в консолі, то знайдений ключ :)
  
  
        let depositFormsIds = [];


        cy.get('.content')
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
                    cy.get(`[data-key="${i}"] > .payment_item > .footer`)
                    .click()       
                    cy.get(`#${depositFormsIds[i]}`).invoke('text').should('not.include', 't.payment')    
                    //Оп, якщо це бачиш в консолі, то знайдений ключ :)          
                    cy.get(`#${depositFormsIds[i]} > .header > .close > .icon`).click()
          
                  }
                        
                } else {
                  cy.log('sho')
                }
              
              })  
            } else {
                cy.log('НІЧОГО НЕМА')
                cy.get(`.content`).invoke('text').should('not.include', 't.payment')
                //Оп, якщо це бачиш в консолі, то знайдений ключ :)
            }
        })

        cy.visit('https://allrightcasino.com/en#cashbox-withdraw')
  
        cy.wait(2000)
  
        cy.get('.popup > :nth-child(2)')
        .invoke('text').should('not.include', 't.payment')
        //Оп, якщо це бачиш в консолі, то знайдений ключ :)
  
        let withdrawFormsIds = [];

        cy.get('.content')
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
                    cy.get(`[data-key="${i}"] > .payment_item > .footer`)
                    .click()               
                    cy.get(`#${withdrawFormsIds[i]}`).invoke('text').should('not.include', 't.payment')
                    //Оп, якщо це бачиш в консолі, то знайдений ключ :)
                    cy.get(`#${withdrawFormsIds[i]} > .header > .close > .icon`).click()
                  }
                  
              
                }
              
              });
            } else {
                cy.log('НІЧОГО НЕМА')
                cy.get(`.content`).invoke('text').should('not.include', 't.payment')
                //Оп, якщо це бачиш в консолі, то знайдений ключ :)
            }
        })
  
    })
  }
})

describe('LuckyBird', () => {
  beforeEach(() => {
    cy.visit('https://luckybirdcasino.com/en')
  })

  for(let i = 0; i < LuckyBirdCurrinces.length; i++) {
    it(LuckyBirdCurrinces[i],  () => {
      cy.get(':nth-child(3) > .column > .button').click()
      cy.get('input[type="email"]').type(LuckyBirdEmails[i])
      cy.get('input[type="password"]').first().type(LuckyBirdPasswords[i])
      cy.get('#form-signin-email > .submit_button > .button').click()
  
      cy.wait(5000)
      cy.get('.header > .close > .icon-close').click()
      cy.visit('https://luckybirdcasino.com/en#cashbox-deposit')
  
      cy.get('.cashbox_content')
        .invoke('text').should('not.include', 't.payment')
        //Оп, якщо це бачиш в консолі, то знайдений ключ :)
  
  
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
                    cy.get(`[data-key="${i}"] > .pay_image `)
                    .click()       
                    cy.get(`#${depositFormsIds[i]}`).invoke('text').should('not.include', 't.payment')        
                    //Оп, якщо це бачиш в консолі, то знайдений ключ :)      
                   
          
                  }
                        
                } else {
                  cy.log('sho')
                }
              
              })  
            } else {
                cy.log('НІЧОГО НЕМА')
                cy.get(`.cashbox_content`).invoke('text').should('not.include', 't.payment')
                //Оп, якщо це бачиш в консолі, то знайдений ключ :)
            }
        })

        cy.visit('https://luckybirdcasino.com/en#cashbox-withdraw')
  
        cy.wait(2000)
  
        cy.get('.cashbox_content')
        .invoke('text').should('not.include', 't.payment')
        //Оп, якщо це бачиш в консолі, то знайдений ключ :)
  
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
                    cy.get(`[data-key="${i}"] > .pay_image`)
                    .click()               
                    cy.get(`#${withdrawFormsIds[i]}`).invoke('text').should('not.include', 't.payment')
                    //Оп, якщо це бачиш в консолі, то знайдений ключ :)
                  }
                }       
              });
            } else {
                cy.log('НІЧОГО НЕМА')
                cy.get(`.cashbox_content`).invoke('text').should('not.include', 't.payment')
                //Оп, якщо це бачиш в консолі, то знайдений ключ :)
            }
        })
  
    })
  }
})

describe.only('Slottica', () => {

  beforeEach(() => {
    cy.visit('https://slottica.com/en')
  })

  for(let i = 0; i < SlotticaCurrinces.length; i++) {
    it(SlotticaCurrinces[i],  () => {
      cy.get('.extend > .button').click()
      cy.get('input[type="email"]').type(SlotticaEmails[i])
      cy.get('input[type="password"]').first().type(SlotticaPasswords[i])
      cy.get('#signinform_email > .form > :nth-child(4) > .button').click()
  
      cy.wait(5000)
      cy.get('.popup_close > .icon-close').click()
      cy.visit('https://slottica.com/en#cashbox-deposit')
  
      cy.get('.popup_content')
        .invoke('text').should('not.include', 't.payment')
      //Оп, якщо це бачиш в консолі, то знайдений ключ :)
  
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
                    cy.get(`[data-key="${i}"] > .payment_card `)
                    .click()       
                    cy.get(`#${depositFormsIds[i]}`).invoke('text').should('not.include', 't.payment')    
                    //Оп, якщо це бачиш в консолі, то знайдений ключ :)          
                   
          
                  }
                        
                } else {
                  cy.log('sho')
                }
              
              })  
            } else {
                cy.log('НІЧОГО НЕМА')
                cy.get(`.popup_content`).invoke('text').should('not.include', 't.payment')
            }
        })

        cy.visit('https://slottica.com/en#cashbox-withdraw')
  
        cy.wait(2000)
  
        cy.get('.popup_content')
        .invoke('text').should('not.include', 't.payment')
        //Оп, якщо це бачиш в консолі, то знайдений ключ :)
  
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
                    cy.get(`[data-key="${i}"] > .payment_card`)
                    .click()               
                    cy.get(`#${withdrawFormsIds[i]}`).invoke('text').should('not.include', 't.payment')
                    //Оп, якщо це бачиш в консолі, то знайдений ключ :)
                  }
                }       
              });
            } else {
                cy.log('НІЧОГО НЕМА')
                cy.get(`.popup_content`).invoke('text').should('not.include', 't.payment')
                //Оп, якщо це бачиш в консолі, то знайдений ключ :)
            }
        })
  
    })
  }

})

describe('SlottyWay', () => { 
  beforeEach(() => {
    cy.visit('https://slottyway.com/en')
  })

  for(let i = 0; i < SlottyWayCurrinces.length; i++) {
    it(SlottyWayCurrinces[i],  () => {
      cy.get('.login > :nth-child(2) > .button').click()
      cy.get('input[type="email"]').type(SlottyWayEmails[i])
      cy.get('input[type="password"]').first().type(SlottyWayPasswords[i])
      cy.get(':nth-child(8) > .button').click()
  
      cy.wait(5000)
      cy.get('.close > .icon-close2').click()
      cy.visit('https://slottyway.com/en#cashbox-deposit')
  
      cy.get('.popup')
        .invoke('text').should('not.include', 't.payment')
      //Оп, якщо це бачиш в консолі, то знайдений ключ :)
  
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
                    cy.get(`[data-key="${i}"] > .pay_image `)
                    .click()       
                    cy.get(`#${depositFormsIds[i]}`).invoke('text').should('not.include', 't.payment')              
                   //Оп, якщо це бачиш в консолі, то знайдений ключ :)
          
                  }
                        
                } else {
                  cy.log('sho')
                }
              
              })  
            } else {
                cy.log('НІЧОГО НЕМА')
                cy.get(`.popup`).invoke('text').should('not.include', 't.payment')
            }
        })

        cy.visit('https://slottyway.com/en#cashbox-withdraw')
  
        cy.wait(2000)
  
        cy.get('.popup')
        .invoke('text').should('not.include', 't.payment')
  
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
                    cy.get(`[data-key="${i}"] > .pay_image`)
                    .click()               
                    cy.get(`#${withdrawFormsIds[i]}`).invoke('text').should('not.include', 't.payment')
                    //Оп, якщо це бачиш в консолі, то знайдений ключ :)
                  }
                }       
              });
            } else {
                cy.log('НІЧОГО НЕМА')
                cy.get(`.popup`).invoke('text').should('not.include', 't.payment')
                //Оп, якщо це бачиш в консолі, то знайдений ключ :)
            }
        })
  
    })
  }
})

describe('Spinamba', () => { 
  beforeEach(() => {
    cy.visit('https://spinamba.com/en')
  })

  for(let i = 0; i < SpinambaCurrinces.length; i++) {
    it(SpinambaCurrinces[i],  () => {
      cy.get('.row > .login > :nth-child(2) > .button').click()
      cy.get('#form-signin-email > .group-name-login > .control-label').type(SpinambaEmails[i])
      cy.get('#form-signin-email > .group-name-password > .control-label').type(SpinambaPasswords[i])
      cy.get('#form-signin-email > .submit_button > .button').click()
  
      cy.wait(5000)
      cy.get('.icon-close').click()
      cy.visit('https://spinamba.com/en#cashbox-deposit')
  
      cy.get('.popup')
        .invoke('text').should('not.include', 't.payment')
      //Оп, якщо це бачиш в консолі, то знайдений ключ :)
  
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
                    cy.get(`[data-key="${i}"] > .pay_image `)
                    .click()       
                    cy.get(`#${depositFormsIds[i]}`).invoke('text').should('not.include', 't.payment')              
                   //Оп, якщо це бачиш в консолі, то знайдений ключ :)
          
                  }
                        
                } else {
                  cy.log('sho')
                }
              
              })  
            } else {
                cy.log('НІЧОГО НЕМА')
                cy.get(`.popup`).invoke('text').should('not.include', 't.payment')
            }
        })

        cy.visit('https://spinamba.com/en#cashbox-withdraw')
  
        cy.wait(2000)
  
        cy.get('.popup')
        .invoke('text').should('not.include', 't.payment')
  
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
                    cy.get(`[data-key="${i}"] > .pay_image`)
                    .click()               
                    cy.get(`#${withdrawFormsIds[i]}`).invoke('text').should('not.include', 't.payment')
                    //Оп, якщо це бачиш в консолі, то знайдений ключ :)
                  }
                }       
              });
            } else {
                cy.log('НІЧОГО НЕМА')
                cy.get(`.popup`).invoke('text').should('not.include', 't.payment')
                //Оп, якщо це бачиш в консолі, то знайдений ключ :)
            }
        })
  
    })
  }
})

describe('SpinBounty', () => {
  beforeEach(() => {
    cy.visit('https://spinbounty.com/en')
  })

  for(let i = 0; i < SpinBountyCurrinces.length; i++) {
    it(SpinBountyCurrinces[i],  () => {
      cy.get('.actions > .primary').click()
      cy.get('input[type="email"]').type(SpinBountyEmails[i])
      cy.get('input[type="password"]').first().type(SpinBountyPasswords[i])
      cy.get('#signinform > .submit').click()
  
      cy.wait(5000)
      cy.visit('https://spinbounty.com/en#cashbox-deposit')
  
      cy.get('.content')
        .invoke('text').should('not.include', 't.payment')
      //Оп, якщо це бачиш в консолі, то знайдений ключ :)
  
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
                    cy.get(`[data-key="${i}"] > .payment_item  `)
                    .click()       
                    cy.get(`#${depositFormsIds[i]}`).invoke('text').should('not.include', 't.payment')              
                   //Оп, якщо це бачиш в консолі, то знайдений ключ :)

                   cy.get(`[data-key="${i}"] > .modal_header > .left > .icon`).click()
          
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

        cy.visit('https://spinbounty.com/en#cashbox-withdraw')
  
        cy.wait(2000)
  
        cy.get('.content')
        .invoke('text').should('not.include', 't.payment')
  
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
                    
                    cy.get(`[data-key="${i}"] > .pay_image`)
                    .click()               
                    cy.get(`#${withdrawFormsIds[i]}`).invoke('text').should('not.include', 't.payment')
                    //Оп, якщо це бачиш в консолі, то знайдений ключ :)
                  }
                }       
              });
            } else {
                cy.log('НІЧОГО НЕМА')
                cy.get(`.content`).invoke('text').should('not.include', 't.payment')
                //Оп, якщо це бачиш в консолі, то знайдений ключ :)
            }
        })
  
    })
  }
})