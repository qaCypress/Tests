import * as ProjectsData from '../support/data.js';
import '../cassa_help/login_projects.js'

const { AllRightData, LuckyBirdData, SlotticaData, SlottyWayData, SpinambaData, 
    SpinBountyData, ViksData, SuperCatData, Magic365Data, SpinadoData } = ProjectsData;



describe('AllRight', () => {

    it('Davai',  () => {
      cy.loginAllright(`${AllRightData.url}/${AllRightData.lang[0]}#sign-in`, 0)
      cy.wait(2000)
      cy.visit(`https://allrightcasino.com/ru/games/all/genii?sort=priority`)
      cy.wait(2000)

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
      cy.wait(2000)
      cy.get('.close > .icon-close').click()
    })
})











