import '../support/commands.js';
import * as cur from '../support/data.js';
import getExelKeys from '../support/exel_key_export.js';



describe('AllRight', () => {



  beforeEach(async () => {
    const keys = await getExelKeys();
    Cypress.env('savedKeys', keys);
    cy.log(keys)
  })


  for(let j = 0; j < cur.AllRightData.currency.length; j++) {

    it(cur.AllRightData.currency[j],  () => {
      const savedKeys = Cypress.env('savedKeys');


      cy.visit('https://allrightcasino.com/en#sign-in')
      cy.get('input[type="email"]').type(cur.AllRightData.login[j])
      cy.get('input[type="password"]').first().type(cur.AllRightData.login[j])
      cy.get('#form-signin-email > .submit_button > .button').click()
      
      cy.wait(4000)
      cy.visit('https://allrightcasino.com/en#cashbox-deposit')
      cy.wait(2000)
      
      cy.findKey(`.popup`, savedKeys)
   
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
                    
                    cy.findKey(`[data-key="${i}"]`, savedKeys)
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
                cy.findKey(`.popup`, savedKeys)
            }
        })

        cy.visit('https://allrightcasino.com/en#cashbox-withdraw')
        cy.wait(2000)
  
        cy.findKey(`.popup`, savedKeys)
  
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
                            
                    cy.findKey(`#${withdrawFormsIds[i]}`, savedKeys)
                    cy.CheckImage(`[data-key="${i}"]`, `.image`)                  
                  }                        
                }
              
              });
            } else {
                cy.log('НІЧОГО НЕМА')
                cy.findKey(`.popup`, savedKeys)
            }
        })
  
    })
  }
})

describe('LuckyBird', () => {
  beforeEach(async () => {
    const keys = await getExelKeys();
    Cypress.env('savedKeys', keys);
    cy.log(keys)
  })

  for(let i = 0; i < cur.LuckyBirdData.currency.length; i++) {
    it(cur.LuckyBirdData.currency[i],  () => {
      const savedKeys = Cypress.env('savedKeys');


      cy.visit('https://luckybirdcasino.com/en#sign-in')

      cy.get('input[type="email"]').type(cur.LuckyBirdData.login[i])
      cy.get('input[type="password"]').first().type(cur.LuckyBirdData.login[i])
      cy.get(`[class="submit_button"]`).first().click()
  
      cy.wait(3000)
      cy.visit('https://luckybirdcasino.com/en#cashbox-deposit')
  
      cy.findKey(`.cashbox_content > .payment__gallery`, savedKeys)
  
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
                    cy.findKey(`#${depositFormsIds[i]}`, savedKeys)     
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
                cy.findKey(`.cashbox_content > .payment__gallery`, savedKeys)  
            }
        })

        cy.visit('https://luckybirdcasino.com/en#cashbox-withdraw')
  
        cy.wait(3000)
  
        cy.findKey(`.cashbox_content > .payment__gallery`, savedKeys)  
  
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
                    cy.findKey(`#${withdrawFormsIds[i]}`, savedKeys)   
                    cy.CheckImage(`[data-key="${i}"]`, `.image`)
                  }
                }       
              });
            } else {
                cy.log('НІЧОГО НЕМА')
                cy.findKey(`.cashbox_content > .payment__gallery`, savedKeys)  
            }
        })
  
    })
  }
})

describe('Slottica', () => {

  beforeEach(async () => {
    const keys = await getExelKeys();
    Cypress.env('savedKeys', keys);
    cy.log(keys)
  })

  for(let i = 0; i < cur.SlotticaData.currency.length; i++) {
    it(cur.SlotticaData.currency[i],  () => {
      const savedKeys = Cypress.env('savedKeys');

      cy.visit('https://slottica.com/en#sign-in')
      cy.get('input[type="email"]').type(cur.SlotticaData.login[i])
      cy.get('input[type="password"]').first().type(cur.SlotticaData.login[i])
      cy.get('#signinform_email > .form > :nth-child(4) > .button').click()
  
      cy.wait(3000)
      cy.get('.popup_close > .icon-close').click()
      cy.visit('https://slottica.com/en#cashbox-deposit')
  
      cy.findKey('.popup_content', savedKeys)
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
                   
                    cy.findKey(`#${depositFormsIds[i]}`, savedKeys)  
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
                cy.findKey(`.popup_content`, savedKeys)  
                
            }
        })
        cy.visit('https://slottica.com/en#cashbox-withdraw')
  
        cy.wait(3000)
  
        cy.findKey(`.popup_content`, savedKeys)  
  
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

                    cy.findKey(`#${withdrawFormsIds[i]}`, savedKeys)  
                  }
                }       
              });
            } else {
                cy.log('НІЧОГО НЕМА')
                cy.findKey(`.popup_content`, savedKeys) 
            }
        })
  
    })
  }

})

describe('SlottyWay', () => { 
  beforeEach(async () => {
    const keys = await getExelKeys();
    Cypress.env('savedKeys', keys);
    cy.log(keys)
  })

  for(let i = 0; i < cur.SlottyWayData.currency.length; i++) {
    

    it(cur.SlottyWayData.currency[i],  () => {
      const savedKeys = Cypress.env('savedKeys');

      cy.visit('https://slottyway.com/en#sign-in')
      cy.get('input[type="email"]').type(cur.SlottyWayData.login[i])
      cy.get('input[type="password"]').first().type(cur.SlottyWayData.login[i])
      cy.get(':nth-child(8) > .button').click()
  
      cy.wait(3000)
      cy.get('.close > .icon-close2').click()
      cy.visit('https://slottyway.com/en#cashbox-deposit')

      cy.wait(2000)
  
      cy.findKey(`.popup > .content > .modal_profile_content > .cashbox_content > .payment__gallery`, savedKeys)
  
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
                    cy.findKey(`#${depositFormsIds[i]}`, savedKeys) 

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
                cy.findKey(`.popup > .content > .modal_profile_content > .cashbox_content > .payment__gallery`, savedKeys)
            }
        })

        cy.visit('https://slottyway.com/en#cashbox-withdraw')
  
        cy.wait(2000)
  
        cy.findKey(`.popup > .content > .modal_profile_content > .cashbox_content > .payment__gallery`, savedKeys)
  
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
                    cy.findKey(`#${withdrawFormsIds[i]}`, savedKeys)
                  }
                }       
              });
            } else {
                cy.log('НІЧОГО НЕМА')
                cy.findKey(`.popup > .content > .modal_profile_content > .cashbox_content > .payment__gallery`, savedKeys)
            }
        })
  
    })
  }
})

describe('Spinamba', () => { 
  beforeEach(async () => {
    const keys = await getExelKeys();
    Cypress.env('savedKeys', keys);
    cy.log(keys)
  })

  for(let i = 0; i < cur.SpinambaData.currency.length; i++) {
    it(cur.SpinambaData.currency[i],  () => {
      const savedKeys = Cypress.env('savedKeys');


      cy.visit('https://spinamba.com/en#sign-in')
      cy.get('#form-signin-email > .group-name-login > .control-label').type(cur.SpinambaData.login[i])
      cy.get('#form-signin-email > .group-name-password > .control-label').type(cur.SpinambaData.login[i])
      cy.get('#form-signin-email > .submit_button > .button').click()
  
      cy.wait(3000)
      cy.visit('https://spinamba.com/en#cashbox-deposit')

      cy.findKey('.popup', savedKeys)
  
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
                    cy.findKey(`#${depositFormsIds[i]}`, savedKeys)             
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
                cy.findKey(`.popup`, savedKeys)   
            }
        })

        cy.visit('https://spinamba.com/en#cashbox-withdraw')
  
        cy.wait(4000)
  
        cy.findKey(`.popup`, savedKeys)
  
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
                    cy.findKey(`#${withdrawFormsIds[i]}`, savedKeys)
                    cy.CheckImage(`[data-key="${i}"]`, `.image`)
                  }
                }       
              });
            } else {
                cy.log('НІЧОГО НЕМА')
                cy.findKey(`.popup`, savedKeys)
            }
        })
  
    })
  }
})

describe('SpinBounty', () => {
  beforeEach(async () => {
    const keys = await getExelKeys();
    Cypress.env('savedKeys', keys);
    cy.log(keys)
  })

  for(let i = 0; i < cur.SpinBountyData.currency.length; i++) {
    it(cur.SpinBountyData.currency[i],  () => {
      const savedKeys = Cypress.env('savedKeys');


      cy.visit('https://spinbounty.com/en#sign-in')
      cy.get('input[type="email"]').type(cur.SpinBountyData.login[i])
      cy.get('input[type="password"]').first().type(cur.SpinBountyData.login[i])
      cy.get('#signinform > .submit').click()
  
      cy.wait(5000)
      cy.visit('https://spinbounty.com/en#cashbox-deposit')
      cy.wait(4000)
  
      cy.findKey(`#profile-modal > .content > .payments_gallery_wrap`, savedKeys)
 
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
                    cy.findKey(`#${depositFormsIds[i]}`, savedKeys)             
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
                cy.findKey(`#profile-modal > .content > .payments_gallery_wrap`, savedKeys)
            }
        })

        cy.visit('https://spinbounty.com/en#cashbox-withdraw')
        cy.wait(2000)
        cy.findKey(`#profile-modal > .content > .payments_gallery_wrap`, savedKeys)
  
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
                    cy.findKey(`#${withdrawFormsIds[i]}`, savedKeys)
                    cy.CheckImage(`[data-key="${i}"]`, `img`)
                  }
                }       
              });
            } else {
                cy.log('НІЧОГО НЕМА')
                cy.findKey(`#profile-modal > .content > .payments_gallery_wrap`, savedKeys)
            }
        })
  
    })
  }
})

describe('Viks', () => {

  beforeEach(async () => {
    const keys = await getExelKeys();
    Cypress.env('savedKeys', keys);
    cy.log(keys)
  })

  for(let i = 0; i < cur.ViksData.currency.length; i++) {
    it(cur.ViksData.currency[i],  () => {
      const savedKeys = Cypress.env('savedKeys');


      cy.visit('https://viks.com/games/en#sign-in')
      cy.get('[data-tab="email"] > .label').click()
      cy.get('input[type="email"]').type(cur.ViksData.login[i])
      cy.get('input[type="password"]').first().type(cur.ViksData.login[i])
      cy.get('#signinform_email > .form > :nth-child(4) > .button').click()
  
      cy.wait(5000)
      cy.visit('https://viks.com/en/games#cashbox-deposit')
      cy.wait(5000)
      cy.findKey('.popup_content', savedKeys)
  
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
                    cy.findKey(`#${depositFormsIds[i]}`, savedKeys)
                     

                    let deposidMethod = `.popup > .popup_header > .row > .center > .payment_limits`;
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
                cy.findKey('.popup_content', savedKeys)
            }
        })

        cy.visit('https://viks.com/en/games#cashbox-withdraw')
  
        cy.wait(4000)
  
        cy.findKey('.popup_content', savedKeys)
  
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
                    cy.findKey(`[class="popup_card"]`, savedKeys)              
                    cy.get(`[data-trigger="cashbox.close"]`).first().click({force: true})
                   
                  }
                }       
              });
            } else {
                cy.log('НІЧОГО НЕМА')
                cy.findKey('.popup_content', savedKeys)
            }
        })
  
    })
  }

}) 

describe('SuperCat', () => {
  beforeEach(async () => {
    const keys = await getExelKeys();
    Cypress.env('savedKeys', keys);
    cy.log(keys)
  })


  for(let i = 0; i < cur.SuperCatData.currency.length; i++) {
    it(cur.SuperCatData.currency[i],  () => {
      const savedKeys = Cypress.env('savedKeys');


      cy.visit('https://supercatcasino67.com/en/sign-in')
      cy.get('input[type="email"]').type(cur.SuperCatData.login[i])
      cy.get('input[type="password"]').first().type(cur.SuperCatData.login[i])
      cy.get('.sign-in-form > .button').click()
  
      cy.wait(5000)
      cy.visit('https://supercatcasino67.com/en/player/cashbox/deposit')
      cy.wait(5000)
      cy.findKey('.cashbox-content', savedKeys)

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
                      cy.findKey('.player-modal__content', savedKeys)
                      cy.CheckImage(`#cash-item-${depositFormsIds[i].replace(/\s/g, '\\\ ')}`, `img`)
                      cy.CheckLimits(deposidMethod, depositForm, radiobutton, true)
                    } 
                    
                    else if(depositFormsIds[i] == `bank transfer voucher`) {
                      depositFormsIds[i] = 'bank transfer voucher';
                      deposidMethod = `#cash-item-${depositFormsIds[i].replace(/\s/g, '\\\ ')} > .cash-item > .cash-item__limits`;

                      cy.get(`#cash-item-${depositFormsIds[i].replace(/\s/g, '\\\ ')} > .cash-item`).click();
                      cy.findKey('.player-modal__content', savedKeys)
                      cy.CheckImage(`#cash-item-${depositFormsIds[i].replace(/\s/g, '\\\ ')}`, `img`)
                      cy.CheckLimits(deposidMethod, depositForm, radiobutton, true)
                    }
                    
                    else{

                      cy.get(`#cash-item-${depositFormsIds[i]} > .cash-item`).click()       
                      cy.findKey('.player-modal__content', savedKeys)     
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
                cy.findKey('.cashbox-content', savedKeys)
            }
        })

        cy.visit('https://supercatcasino67.com/en/player/cashbox/withdraw')
  
        cy.wait(7000)
  
        cy.findKey('.cashbox-content', savedKeys)
  
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
                      cy.findKey('.player-modal__content', savedKeys)
                  }
                }
              });
            } else {
                cy.log('НІЧОГО НЕМА')
                cy.findKey('.cashbox-content', savedKeys)
            }
        })
  
    })
  }
})

describe('Magic365', () => {
  beforeEach(async () => {
    const keys = await getExelKeys();
    Cypress.env('savedKeys', keys);
    cy.log(keys)
  })

  for (let i = 0; i < cur.Magic365Data.currency.length; i++) {
    it(cur.Magic365Data.currency[i], () => {
      const savedKeys = Cypress.env('savedKeys');
      cy.visit('https://magic365.com/en#sign-in')
      cy.get('input[type="email"]').type(cur.Magic365Data.login[i])
      cy.get('input[type="password"]').first().type(cur.Magic365Data.login[i])
      cy.get('#signinform > .submit').click()

      cy.wait(5000)
      cy.visit('https://magic365.com/en#cashbox-deposit')
      cy.wait(4000)

      cy.findKey('#profile-modal > .content > .payments_gallery_wrap', savedKeys)

      const depositFormsIds = []

      cy.get('.payments_gallery_wrap')
        .then((body) => {
          if (body.find('form').length > 0) {
            cy.log('Кіно буде')
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
                    cy.findKey(`#${depositFormsIds[i]}`, savedKeys)
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
            cy.findKey('#profile-modal > .content > .payments_gallery_wrap', savedKeys)
          }
        })

      cy.visit('https://magic365.com/en#cashbox-withdraw')
      cy.wait(2000)
      cy.findKey('#profile-modal > .content > .payments_gallery_wrap', savedKeys)

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
                    cy.findKey(`#${withdrawFormsIds[i]}`, savedKeys)
                    cy.CheckImage(`[data-key="${i}"]`, 'img')
                  }
                }
              })
          } else {
            cy.log('НІЧОГО НЕМА')
            cy.findKey('#profile-modal > .content > .payments_gallery_wrap', savedKeys)
          }
        })
    })
  }
})