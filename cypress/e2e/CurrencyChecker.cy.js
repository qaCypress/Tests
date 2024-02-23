import * as ProjectsData from '../support/data.js';
import '../cassa_help/login_projects.js'
const fs = require('fs');
const { AllRightData, LuckyBirdData, SlotticaData, SlottyWayData, SpinambaData, 
    SpinBountyData, ViksData, SuperCatData, Magic365Data, SpinadoData } = ProjectsData;



describe('AllRight', () => {

  before('writeJson', () => {
    cy.writeFile('ProblemProviders.json', {})
  })

    for(let i =0; i < AllRightData.providers.GEL.length; i++) {
        it(AllRightData.providers.GEL[i],  () => {
            
            cy.loginAllright(`${AllRightData.url}/${AllRightData.lang[0]}#sign-in`, 21)
            cy.wait(2000)
            cy.visit(`https://allrightcasino.com/ru/games/all/${AllRightData.providers.GEL[i].toLowerCase()}?sort=priority`)
            cy.wait(2000)
    

            cy.get('[id="games_list"]').then($games => {
              const elementsCount = $games.find('[class ="empty item"]').length; 
              cy.log(elementsCount)
              if(elementsCount === 1) {
                  cy.log(`Провайдера не знайдено`)

                  cy.readFile('ProblemProviders.json').then(existingData => {
                    let newData = existingData || {}; 
                    newData.ProblemsProviders = newData.ProblemsProviders || []; 
                    newData.ProblemsProviders.push(AllRightData.providers.GEL[i]);
                    cy.writeFile('ProblemProviders.json', newData).then(() => {
                      cy.log('Data appended to ProblemProviders.json successfully.');
                    });
                  });
                    
                  
              }
            });
      
            cy.get('.item').find('.button_real').invoke('attr', 'href').as('sho')
      
            cy.get(`@sho`).then(href => { 
              cy.request({url: `${AllRightData.url}${href}`}).then((response) => {
                  if (response.status != 404 || response.status != 500) {

                     cy.visit(`${AllRightData.url}${href}`);
                   } else {
                    cy.readFile('ProblemProviders.json').then(existingData => {
                      let newData = existingData || {}; 
                      newData.ProblemsProviders = newData.ProblemsProviders || []; 
                      newData.ProblemsProviders.push(AllRightData.providers.GEL[i]);
                      cy.writeFile('ProblemProviders.json', newData).then(() => {
                        cy.log('Data appended to ProblemProviders.json successfully.');
                      });
                    });


                     cy.fail(`Статус код неудачний - ${response.status}`);
                   }
                 });
            })
            cy.wait(1000)
            //cy.get('.close > .icon-close').click();
          })
    }
   
})

describe.only('LuckyBird', () => {

  before('writeJson', () => {
    cy.writeFile('ProblemProviders.json', {})
  })

  for(let i = 0; i < LuckyBirdData.providers.MXN.length; i++) {
    it(LuckyBirdData.providers.MXN[i],  () => {
        
        cy.loginLuckyBird(`${LuckyBirdData.url}/${LuckyBirdData.lang[0]}#sign-in`, 7)
        cy.wait(2000)
        cy.visit(`https://luckybirdcasino.com/ru/games/all/${LuckyBirdData.providers.MXN[i].toLowerCase()}?sort=priority`)
        cy.wait(2000)

  
        cy.get('.item').find('[class="button button_new primary fluid"]').invoke('attr', 'href').as('sho')
  
        cy.get(`@sho`).then(href => { 
          cy.request({url: `${LuckyBirdData.url}${href}`}).then((response) => {
              if (response.status != 404 || response.status != 500) {

                 cy.visit(`${LuckyBirdData.url}${href}`);
               } else {
                cy.readFile('ProblemProviders.json').then(existingData => {
                  let newData = existingData || {}; 
                  newData.ProblemsProviders = newData.ProblemsProviders || []; 
                  newData.ProblemsProviders.push(LuckyBirdData.providers.MXN[i]);
                  cy.writeFile('ProblemProviders.json', newData).then(() => {
                    cy.log('Data appended to ProblemProviders.json successfully.');
                  });
                });


                 cy.fail(`Статус код неудачний - ${response.status}`);
               }
             });
        })
        cy.wait(1000)
        //cy.get('.close > .icon-close').click();
      })
}


})









