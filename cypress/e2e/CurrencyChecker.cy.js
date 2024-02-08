import * as ProjectsData from '../support/data.js';
import '../cassa_help/login_projects.js'
const fs = require('fs');
const { AllRightData, LuckyBirdData, SlotticaData, SlottyWayData, SpinambaData, 
    SpinBountyData, ViksData, SuperCatData, Magic365Data, SpinadoData } = ProjectsData;

let providers = [ "aviat2rix", "apwparat", "b2wt", "barbarabang", "belatra", "betgamestv", "betsoft", "bigtimegaming", "booming", "buckstakesentertainment", "caletagaming", "champion", "chilligames", "crazytoothstudio", "cyberslots", "eagames"]

describe('AllRight', () => {
    before('writeJson', () => {
        cy.writeFile('CUUUUR.json', {})
    })
    for(let i =0; i < providers.length; i++) {
        it(providers[i],  () => {
            cy.loginAllright(`${AllRightData.url}/${AllRightData.lang[0]}#sign-in`, 0)
            cy.wait(2000)
            cy.visit(`https://allrightcasino.com/ru/games/all/${providers[i]}?sort=priority`)
            cy.wait(2000)
    

            cy.get('[id="games_list"]').then($games => {
              const elementsCount = $games.find('[class ="empty item"]').length; 
              cy.log(elementsCount)
              if(elementsCount === 1) {
                  cy.log(`Провайдера не знайдено`)


       
              
                  cy.readFile('CUUUUR.json', { log: false })
                  .then(existingData => {
                    // Parse the existing JSON data
                    let newData = existingData || {}; // Initialize with empty object if file is empty or doesn't exist
                    // Append the new data to the existing data
                    newData.ProblemsProviders = newData.ProblemsProviders || []; // Initialize ProblemsProviders array if it doesn't exist
                    newData.ProblemsProviders.push(providers[i]);
                
                    // Write the updated data back to the file
                    cy.writeFile('CUUUUR.json', newData, { log: false });
                    cy.log('Data appended to CUUUUR.json successfully.');
                  })
                    
                  
              }
            });
      
            cy.get('.item').find('.button_real').invoke('attr', 'href').as('sho')
      
            cy.get(`@sho`).then(href => { 
              cy.request({url: `${AllRightData.url}${href}`}).then((response) => {
                  if (response.status != 404 || response.status != 500) {
                     cy.visit(`${AllRightData.url}${href}`);
                   } else {
                     cy.fail(`Статус код неудачний - ${response.status}`);
                   }
                 });
            })
            cy.wait(4000)
            //cy.get('.close > .icon-close').click();
          })
    }
   
})











