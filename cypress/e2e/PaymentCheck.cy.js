import '../support/commands.js';
import * as cur from '../support/data.js';


describe('AllRight', () => {
  beforeEach(() => {
    cy.visit('https://allrightcasino.com/en')
  })


  for(let j = 0; j < cur.AllRightData.currency.length; j++) {
    it(cur.AllRightData.currency[j],  () => {
      cy.get(`[data-href="/en/sign-in"][class="button white_button"]`).click()
      cy.get('input[type="email"]').type(cur.AllRightData.emails[j])
      cy.get('input[type="password"]').first().type(cur.AllRightData.passwords[j])
      cy.get('#form-signin-email > .submit_button > .button').click()
  
      cy.wait(5000)
      cy.get('.close > .icon-close').click()

      cy.visit('https://allrightcasino.com/en#cashbox-deposit')
      cy.wait(4000)
      
      cy.findKey(`.popup`, 't.payment')
        //Оп, якщо це бачиш в консолі, то знайдений ключ :)
   
  
  
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
                    cy.get(`[data-key="${i}"] > .payment_item > .footer`).click()
                    cy.findKey(`[data-key="${i}"]`, 't.payment')

                    //Оп, якщо це бачиш в консолі, то знайдений ключ :)          
                    let minValue = 0;
                    let maxValue = 0;                   

                    
                    cy.get(`[data-key="${i}"] > .form_row > .limit`)
                    .invoke('text')
                    .then((amountText) => {
                      const regex = /(\d{1,3}(?:,\d{3})*)(?:\s*-\s*(\d{1,3}(?:,\d{3})*))?/;
                      const match = amountText.match(regex);
                      if (match) {
                        minValue = parseFloat(match[1].replace(/,/g, '').trim());
                        maxValue = match[2] ? parseFloat(match[2].replace(/,/g, '').trim()) : undefined;
                    
                        // Use the extracted numbers as needed
                        cy.log(`Min limit: ${minValue}`);
                        cy.log(`Max limit: ${maxValue}`);
                      } else {
                        // Handle the case when the regex doesn't match
                        cy.log('Failed to extract numbers');
                      }

                      let staticValue = [];
                      let customValue = 0;
                      
                      cy.get(`[data-key="${i}"]  > .form_row > .amount_variants`)
                       .find('.form-group.radio input[name="predefinedValue"]')
                       .each(($radio) => {
                         const value = parseInt($radio.attr('value'));
                    
                         if (!isNaN(value)) {
                           staticValue.push(value);
                          }
                        })
                        .then(() => {
                          cy.log(staticValue.length);
                          cy.log(`First Value: ${staticValue[0]}`);
                          cy.log(`Second Value: ${staticValue[1]}`);
                          cy.log(`Third Value: ${staticValue[2]}`);

                          cy.get(`[data-key="${i}"]  > .form_row > .amount_custom`)
                          .find(`input[name="amount"]`)
                          .then(($input) => {
                            const value = $input.attr('Value')
                            const parsedValue = parseFloat(value);
                        
                            if (!isNaN(parsedValue)) {
                              customValue = parsedValue;
                            }
                          })
                          .then(() => {
                            cy.log(`Custom value ${customValue}`);

                            function isAscending(staticValue) {
                              for (let i = 1; i < staticValue.length; i++) {
                                if (staticValue[i] < staticValue[i - 1]) {
                                  return false; // Array is not in ascending order
                                }
                              }
                              return true; // Array is in ascending order
                            }

                            
                            let lessLimit = minValue <= staticValue[0] && minValue <= staticValue[1] && minValue <= staticValue[2] && minValue <= customValue
                            && maxValue >= staticValue[0] && maxValue >= staticValue[1] && maxValue >= staticValue[2] && maxValue >= customValue
                            

                            if (lessLimit) {
                              cy.log('✅Ліміти сходяться✅')
                            } else {
                              cy.log('ЛІМІТИ НЕЕЕ СХОДЯТЬСЯ')
                              cy.failAndScreenshot(
                              `Ліміти не сходяться, одне із чотирьох значень не вписується в ліміт ${minValue} - ${maxValue}
                              \n1 значення - ${staticValue[0]}
                              \n2 значення - ${staticValue[1]}
                              \n3 значення - ${staticValue[2]}
                              \nЗначення плейсхолдера - ${customValue}`, 'custom-screen')
                              
                              cy.get(`[data-key="${i}"]  > .form_row > .amount_custom`).screenshot("Sho")
                            }

                            if(isAscending(staticValue)) {
                              cy.log('✅Значення в зростаючому порядку✅')
                            } else {
                              cy.log('Значення НЕ в зростаючому порядку')
                              cy.failAndScreenshot(`Значення радіокнопок не в зростаючому порядку
                              \n1 значення - ${staticValue[0]}
                              \n2 значення - ${staticValue[1]}
                              \n3 значення - ${staticValue[2]}`, 'custom-screen')
                            }

                            



                          });

                        });
            
                    });

                    cy.get(`#${depositFormsIds[i]} > .header > .close > .icon`).click()
                  }
                        
                } else {
                  cy.log('sho')
                }
              
              })  
            } else {
                cy.log('НІЧОГО НЕМА')
                cy.findKey(`.popup`, 't.payment')
                //Оп, якщо це бачиш в консолі, то знайдений ключ :)
            }
        })

        cy.visit('https://allrightcasino.com/en#cashbox-withdraw')
        cy.wait(5000)
  
        cy.findKey(`.popup`, 't.payment')
        //Оп, якщо це бачиш в консолі, то знайдений ключ :)
  
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
                    cy.findKey(`#${withdrawFormsIds[i]}`, 't.payment')
                    //Оп, якщо це бачиш в консолі, то знайдений ключ :)
                    cy.findKey(`#${withdrawFormsIds[i]}`, 't.withdraw')
                    //Оп, якщо це бачиш в консолі, то знайдений ключ :)
                    
                    cy.get(`#${withdrawFormsIds[i]} > .header > .close > .icon`).click()
                  }
                  
              
                }
              
              });
            } else {
                cy.log('НІЧОГО НЕМА')
                cy.findKey(`.popup`, 't.payment')
                //Оп, якщо це бачиш в консолі, то знайдений ключ :)
                cy.findKey(`.popup`, 't.withdraw')
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
  for(let i = 0; i < cur.LuckyBirdData.currency.length; i++) {
    it(cur.LuckyBirdData.currency[i],  () => {

      cy.visit('https://luckybirdcasino.com/en')
      cy.get(`[data-modal-id="login-modal"]`, { timeout: 10000 }).eq(1).click({ force: true })
      cy.get(`[class="content"]`).should('contain', 'Authorization')

      
      cy.get('input[type="email"]').type(cur.LuckyBirdData.emails[i])
      cy.get('input[type="password"]').first().type(cur.LuckyBirdData.passwords[i])
      cy.get(`[class="submit_button"]`).first().click()
  
      cy.wait(5000)
      cy.get(`[class="icon-close"]`).click()
      cy.visit('https://luckybirdcasino.com/en#cashbox-deposit')
  

      cy.findKey(`.cashbox_content`, `t.payment`)
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
                    cy.findKey(`#${depositFormsIds[i]}`, 't.payment')     
                    //Оп, якщо це бачиш в консолі, то знайдений ключ :)

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
                cy.findKey(`.cashbox_content`, 't.payment')  
                //Оп, якщо це бачиш в консолі, то знайдений ключ :)
            }
        })

        cy.visit('https://luckybirdcasino.com/en#cashbox-withdraw')
  
        cy.wait(4000)
  
        cy.findKey(`.cashbox_content`, 't.payment')  
        //Оп, якщо це бачиш в консолі, то знайдений ключ :)
        cy.findKey(`.cashbox_content`, 't.withdraw')  
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
                    cy.findKey(`#${withdrawFormsIds[i]}`, 't.payment')   
                    //Оп, якщо це бачиш в консолі, то знайдений ключ :)
                    cy.findKey(`#${withdrawFormsIds[i]}`, 't.withdraw')   
                    //Оп, якщо це бачиш в консолі, то знайдений ключ :)
                  }
                }       
              });
            } else {
                cy.log('НІЧОГО НЕМА')
                cy.findKey(`.cashbox_content`, 't.payment')  
                //Оп, якщо це бачиш в консолі, то знайдений ключ :)
                cy.findKey(`.cashbox_content`, 't.withdraw')  
                //Оп, якщо це бачиш в консолі, то знайдений ключ :)
            }
        })
  
    })
  }
})

describe('Slottica', () => {

  beforeEach(() => {
    cy.visit('https://slottica.com/en')
  })

  for(let i = 0; i < cur.SlotticaData.currency.length; i++) {
    it(cur.SlotticaData.currency[i],  () => {
      cy.get('.extend > .button').click()
      cy.get('input[type="email"]').type(cur.SlotticaData.emails[i])
      cy.get('input[type="password"]').first().type(cur.SlotticaData.passwords[i])
      cy.get('#signinform_email > .form > :nth-child(4) > .button').click()
  
      cy.wait(5000)
      cy.get('.popup_close > .icon-close').click()
      cy.visit('https://slottica.com/en#cashbox-deposit')
  
      cy.findKey('.popup_content', 't.payment')
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
                    cy.findKey(`#${depositFormsIds[i]}`, 't.payment')  
                    //Оп, якщо це бачиш в консолі, то знайдений ключ :)          
                   
          
                  }
                        
                } else {
                  cy.log('sho')
                }
              
              })  
            } else {
                cy.log('НІЧОГО НЕМА')
                cy.findKey(`.popup_content`, 't.payment')  
                
            }
        })

        cy.visit('https://slottica.com/en#cashbox-withdraw')
  
        cy.wait(5000)
  
        cy.findKey(`.popup_content`, 't.payment')  
        //Оп, якщо це бачиш в консолі, то знайдений ключ :)
        cy.findKey(`.popup_content`, 't.withdraw')  
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
                    cy.findKey(`#${withdrawFormsIds[i]}`, 't.payment')  
                    //Оп, якщо це бачиш в консолі, то знайдений ключ :)
                    cy.findKey(`#${withdrawFormsIds[i]}`, 't.withdraw')  
                    //Оп, якщо це бачиш в консолі, то знайдений ключ :)
                  }
                }       
              });
            } else {
                cy.log('НІЧОГО НЕМА')
                cy.findKey(`.popup_content`, 't.payment') 
                //Оп, якщо це бачиш в консолі, то знайдений ключ :)
                cy.findKey(`.popup_content`, 't.withdraw') 
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

  for(let i = 0; i < cur.SlottyWayData.currency.length; i++) {
    it(cur.SlottyWayData.currency[i],  () => {
      cy.get('.login > :nth-child(2) > .button').click()
      cy.get('input[type="email"]').type(cur.SlottyWayData.emails[i])
      cy.get('input[type="password"]').first().type(cur.SlottyWayData.passwords[i])
      cy.get(':nth-child(8) > .button').click()
  
      cy.wait(5000)
      cy.get('.close > .icon-close2').click()
      cy.visit('https://slottyway.com/en#cashbox-deposit')
  
      cy.findKey(`.popup`, 't.payment')
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
                    
                    cy.findKey(`#${depositFormsIds[i]}`, 't.payment')          
                   //Оп, якщо це бачиш в консолі, то знайдений ключ :)
          
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

        cy.visit('https://slottyway.com/en#cashbox-withdraw')
  
        cy.wait(2000)
  
        cy.findKey(`.popup`, 't.payment')
        //Оп, якщо це бачиш в консолі, то знайдений ключ :)
        cy.findKey(`.popup`, 't.withdraw')
        //Оп, якщо це бачиш в консолі, то знайдений ключ :)
  
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
                    
                    cy.findKey(`#${withdrawFormsIds[i]}`, 't.payment')
                    //Оп, якщо це бачиш в консолі, то знайдений ключ :)
                    cy.findKey(`#${withdrawFormsIds[i]}`, 't.withdraw')
                    //Оп, якщо це бачиш в консолі, то знайдений ключ :)
                  }
                }       
              });
            } else {
                cy.log('НІЧОГО НЕМА')
                cy.findKey(`.popup`, 't.payment')
                //Оп, якщо це бачиш в консолі, то знайдений ключ :)
                cy.findKey(`.popup`, 't.withdraw')
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

  for(let i = 0; i < cur.SpinambaData.currency.length; i++) {
    it(cur.SpinambaData.currency[i],  () => {
      cy.get('.row > .login > :nth-child(2) > .button').click()
      cy.get('#form-signin-email > .group-name-login > .control-label').type(cur.SpinambaData.emails[i])
      cy.get('#form-signin-email > .group-name-password > .control-label').type(cur.SpinambaData.passwords[i])
      cy.get('#form-signin-email > .submit_button > .button').click()
  
      cy.wait(5000)
      cy.get('.icon-close').click()
      cy.visit('https://spinamba.com/en#cashbox-deposit')
  

      cy.findKey('.popup', 't.payment')
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
                    cy.findKey(`#${depositFormsIds[i]}`, 't.payment')             
                   //Оп, якщо це бачиш в консолі, то знайдений ключ :)
                   
          
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

        cy.visit('https://spinamba.com/en#cashbox-withdraw')
  
        cy.wait(4000)
  
        cy.findKey(`.popup`, 't.payment')
  
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
                    cy.findKey(`#${withdrawFormsIds[i]}`, 't.payment')
                    //Оп, якщо це бачиш в консолі, то знайдений ключ :)
                    cy.findKey(`#${withdrawFormsIds[i]}`, 't.withdraw')
                    //Оп, якщо це бачиш в консолі, то знайдений ключ :)
                  }
                }       
              });
            } else {
                cy.log('НІЧОГО НЕМА')
                cy.findKey(`.popup`, 't.payment')
                //Оп, якщо це бачиш в консолі, то знайдений ключ :)
                cy.findKey(`.popup`, 't.withdraw')
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

  for(let i = 0; i < cur.SpinBountyData.currency.length; i++) {
    it(cur.SpinBountyData.currency[i],  () => {
      cy.get('.actions > .primary').click()
      cy.get('input[type="email"]').type(cur.SpinBountyData.emails[i])
      cy.get('input[type="password"]').first().type(cur.SpinBountyData.passwords[i])
      cy.get('#signinform > .submit').click()
  
      cy.wait(5000)
      cy.visit('https://spinbounty.com/en#cashbox-deposit')
  
      cy.findKey(`.content`, `t.payment`)
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
                    cy.findKey(`#${depositFormsIds[i]}`, `t.payment`)             
                   //Оп, якщо це бачиш в консолі, то знайдений ключ :)

                   cy.get(`[class="action left close toggle_btn"]`).first().click({force: true})
          
                  }
                        
                } else {
                  cy.log('sho')
                }
              
              })  
            } else {
                cy.log('НІЧОГО НЕМА')
                cy.findKey(`.content`, `t.payment`)
            }
        })

        cy.visit('https://spinbounty.com/en#cashbox-withdraw')
  
        cy.wait(4000)
  
        cy.findKey(`.content`, `t.payment`)
  
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
                    
                    cy.get(`[data-key="${i}"] > .payment_item`)
                    .click()               
                    cy.findKey(`#${withdrawFormsIds[i]}`, `t.payment`)
                    //Оп, якщо це бачиш в консолі, то знайдений ключ :)
                    cy.findKey(`#${withdrawFormsIds[i]}`, `t.withdraw`)
                    //Оп, якщо це бачиш в консолі, то знайдений ключ :)

                    cy.get(`[class="action left close toggle_btn"]`).first().click({force: true})
                  }
                }       
              });
            } else {
                cy.log('НІЧОГО НЕМА')
                cy.findKey(`.content`, `t.payment`)
                //Оп, якщо це бачиш в консолі, то знайдений ключ :)
                cy.findKey(`.content`, `t.withdraw`)
                //Оп, якщо це бачиш в консолі, то знайдений ключ :)
            }
        })
  
    })
  }
})

describe('Viks', () => {

  beforeEach(() => {
    cy.visit('https://viks.com/en/games')
  })

  for(let i = 0; i < cur.ViksData.currency.length; i++) {
    it(cur.ViksData.currency[i],  () => {
      cy.get('.extend > .button').click()
      cy.get('[data-tab="email"] > .label').click()
      cy.get('input[type="email"]').type(cur.ViksData.emails[i])
      cy.get('input[type="password"]').first().type(cur.ViksData.passwords[i])
      cy.get('#signinform_email > .form > :nth-child(4) > .button').click()
  
      cy.wait(5000)
      cy.visit('https://viks.com/en/games#cashbox-deposit')
      cy.wait(5000)
      cy.findKey('.popup_content', 't.payment')
      //Оп, якщо це бачиш в консолі, то знайдений ключ :)
  
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
                    cy.get(`:nth-child(${i + 1}) > .payment_item `)
                    .click()           
                    cy.findKey(`#${depositFormsIds[i]}`, 't.payment')
                    //Оп, якщо це бачиш в консолі, то знайдений ключ :)          
                    cy.get(`[data-trigger="cashbox.close"]`).first().click({force: true})
                   
          
                  }
                        
                } else {
                  cy.log('sho')
                }
              
              })  
            } else {
                cy.log('НІЧОГО НЕМА')
                cy.findKey('.popup_content', 't.payment')
            }
        })

        cy.visit('https://viks.com/en/games#cashbox-withdraw')
  
        cy.wait(4000)
  
        cy.findKey('.popup_content', 't.payment')
        //Оп, якщо це бачиш в консолі, то знайдений ключ :)
  
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
                    cy.get(`.payments_gallery > data-target-id="${withdrawFormsIds[i]}"`).first()
                    .click({force: true})         
                    cy.findKey(`[class="popup_card"]`, 't.payment') 
                    //Оп, якщо це бачиш в консолі, то знайдений ключ :)          
                    cy.findKey(`[class="popup_card"]`, 't.withdraw')   
                    //Оп, якщо це бачиш в консолі, то знайдений ключ :)          
                    cy.get(`[data-trigger="cashbox.close"]`).first().click({force: true})
                   
                  }
                }       
              });
            } else {
                cy.log('НІЧОГО НЕМА')
                cy.findKey('.popup_content', 't.payment')
                //Оп, якщо це бачиш в консолі, то знайдений ключ :)
                cy.findKey('.popup_content', 't.withdraw')
                //Оп, якщо це бачиш в консолі, то знайдений ключ :)
            }
        })
  
    })
  }

}) 

describe('SuperCat', () => {
  beforeEach(() => {
    cy.visit('https://supercatcasino.com/en')
  })


  for(let i = 0; i < cur.SuperCatData.currency.length; i++) {
    it(cur.SuperCatData.currency[i],  () => {
      cy.get('.guest-header > .button-outlined').click()
      cy.get('input[type="email"]').type(cur.SuperCatData.emails[i])
      cy.get('input[type="password"]').first().type(cur.SuperCatData.passwords[i])
      cy.get('.sign-in-form > .button').click()
  
      cy.wait(5000)
      cy.visit('https://supercatcasino.com/en/player/cashbox/deposit')
      cy.wait(10000)
      cy.findKey('.cashbox-content', 't.payment')
        //Оп, якщо це бачиш в консолі, то знайдений ключ :)
  
  
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

                    //Два костиля, оскільки деякі платіжні методи пишуться якось унікально, постараюсь виправити
                    if(depositFormsIds[i] == `bank transfer token`) {
                      depositFormsIds[i] = 'bank transfer token';

                      cy.get(`#cash-item-${depositFormsIds[i].replace(/\s/g, '\\\ ')} > .cash-item`) // Add the necessary backslashes for spaces
                      .click();
                      cy.findKey('.player-modal__content', 't.payment')

                    } else if(depositFormsIds[i] == `bank transfer voucher`) {
                      depositFormsIds[i] = 'bank transfer voucher';

                      cy.get(`#cash-item-${depositFormsIds[i].replace(/\s/g, '\\\ ')} > .cash-item`) // Add the necessary backslashes for spaces
                      .click();
                      cy.findKey('.player-modal__content', 't.payment')

                    }
                      else{

                      cy.get(`#cash-item-${depositFormsIds[i]} > .cash-item`)
                      .click()       
                      cy.findKey('.player-modal__content', 't.payment')
                      //Оп, якщо це бачиш в консолі, то знайдений ключ :)       
                    }

                       
     
          
                  }
                        
                } else {
                  cy.log('sho')
                }
              
              })  
            } else {
                cy.log('НІЧОГО НЕМА')
                cy.findKey('.cashbox-content', 't.payment')
                //Оп, якщо це бачиш в консолі, то знайдений ключ :)
            }
        })

        cy.visit('https://supercatcasino.com/en/player/cashbox/withdraw')
  
        cy.wait(7000)
  
        cy.findKey('.cashbox-content', 't.payment')
        //Оп, якщо це бачиш в консолі, то знайдений ключ :)
  
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
                      //Оп, якщо це бачиш в консолі, то знайдений ключ :)
                      cy.findKey('.player-modal__content', 't.withdraw')
                      //Оп, якщо це бачиш в консолі, то знайдений ключ :)
                  }
                  
              
                }
              
              });
            } else {
                cy.log('НІЧОГО НЕМА')
                cy.findKey('.cashbox-content', 't.payment')
                //Оп, якщо це бачиш в консолі, то знайдений ключ :)
                cy.findKey('.cashbox-content', 't.withdraw')
                //Оп, якщо це бачиш в консолі, то знайдений ключ :)
            }
        })
  
    })
  }
})