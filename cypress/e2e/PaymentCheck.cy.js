import '../support/commands.js';
import * as ProjectsData from '../support/data.js';
import getExelKeys from '../support/exel_key_export.js';
import '../cassa_help/login_projects.js'
import '../cassa_help/check_dep.js'
import '../cassa_help/check_wihdraw.js'

const { AllRightData, LuckyBirdData, SlotticaData, SlottyWayData, SpinambaData, 
  SpinBountyData, ViksData, SuperCatData, Magic365Data, SpinadoData } = ProjectsData;

//const AllLang = Cypress.env('AllLang');
const AllLang = true;



before(async () => {
  const keys = await getExelKeys();
  Cypress.env('savedKeys', keys);
  cy.log(keys)
})



describe('AllRight', {tags: '@AR'},() => {

  for(let j = 0; j < (AllLang ? AllRightData.lang.length : 1); j++){
    describe(AllRightData.lang[j], () => {
      for(let i = 0; i < AllRightData.currency.length; i++) {
        it(AllRightData.currency[i],  () => {
          const savedKeys = Cypress.env('savedKeys');
          cy.loginAllright(`${AllRightData.url}/${AllRightData.lang[j]}#sign-in`, i)
          
          cy.wait(4000)
          cy.visit(`${AllRightData.url}/${AllRightData.lang[j]}#cashbox-deposit`)
          cy.wait(2000)
          cy.findKey(`.popup`, savedKeys)
    
          cy.depAllright(savedKeys)
           
          cy.visit(`${AllRightData.url}/${AllRightData.lang[j]}#cashbox-withdraw`)
          cy.wait(2000)
          cy.findKey(`.popup`, savedKeys)
            
          cy.withdrawAllright(savedKeys)
        })
      }
    })
  }
  
})

describe('LuckyBird', {tags: '@LB'}, () => {

  for(let j = 0; j < (AllLang ? LuckyBirdData.lang.length : 1); j++){
    describe(LuckyBirdData.lang[j], () => {
      for(let i = 0; i < LuckyBirdData.currency.length; i++) {
        it(LuckyBirdData.currency[i],() => {
          const savedKeys = Cypress.env('savedKeys');
          cy.loginLuckyBird(`${LuckyBirdData.url}/${LuckyBirdData.lang[j]}#sign-in`, i)
    
          cy.wait(3000)
          cy.visit(`${LuckyBirdData.url}/${LuckyBirdData.lang[j]}#cashbox-deposit`)
          cy.findKey(`.cashbox_content > .payment__gallery`, savedKeys)
      
          cy.depLuckyBird(savedKeys)
    
          cy.visit(`${LuckyBirdData.url}/en#cashbox-withdraw`)
          cy.wait(3000)
          cy.findKey(`.cashbox_content > .payment__gallery`, savedKeys)  
      
          cy.withdrawLuckyBird(savedKeys)
        })
      }

    })
  }


})

describe('Slottica', {tags: '@Sl'},() => {

  for(let j = 0; j < (AllLang ? SlotticaData.lang.length : 1); j++){
    describe(SlotticaData.lang[j], () => {
      for(let i = 0; i < SlotticaData.currency.length; i++) {
        it(SlotticaData.currency[i],  () => {
          const savedKeys = Cypress.env('savedKeys');
          cy.loginSlottica(`${SlotticaData.url}/${SlotticaData.lang[j]}#sign-in`, i)
    
          cy.wait(3000)
          cy.get('.popup_close > .icon-close').click()
          cy.visit(`${SlotticaData.url}/${SlotticaData.lang[j]}#cashbox-deposit`)
          cy.findKey('.popup_content', savedKeys)
    
          cy.depSlottica(savedKeys)
    
          cy.visit(`${SlotticaData.url}/${SlotticaData.lang[j]}#cashbox-withdraw`)
          cy.wait(3000)
          cy.findKey(`.popup_content`, savedKeys)  
      
          cy.withdrawSlottica(savedKeys)
        })
      }
    })
  }



})

describe('SlottyWay', {tags: '@SW'},() => { 


  for(let j = 0; j < (AllLang ? SlottyWayData.lang.length : 1); j++){
    describe(SlottyWayData.lang[j], () => {
      for(let i = 0; i < SlottyWayData.currency.length; i++) {
        it(SlottyWayData.currency[i],  () => {
          const savedKeys = Cypress.env('savedKeys');
          cy.loginSlottyWay(`${SlottyWayData.url}`, i)
      
          cy.wait(3000)
          cy.get('.close > .icon-close2').click()
          cy.visit(`${SlottyWayData.url}/${SlottyWayData.lang[j]}#cashbox-deposit`)
    
          cy.wait(2000)
          cy.findKey(`.popup > .content > .modal_profile_content > .cashbox_content > .payment__gallery`, savedKeys)
      
          cy.depSlottyWay(savedKeys)
    
          cy.visit(`${SlottyWayData.url}/${SlottyWayData.lang[j]}#cashbox-withdraw`)
          cy.wait(2000)
          cy.findKey(`.popup > .content > .modal_profile_content > .cashbox_content > .payment__gallery`, savedKeys)
      
          cy.withdrawSlottyWay(savedKeys)
        })
      }

    })
  }


})

describe('Spinamba', {tags: '@Spinamba'},() => { 

  for(let j = 0; j < (AllLang ? SpinambaData.lang.length : 1); j++){
    describe(SpinambaData.lang[j], () => {
      for(let i = 0; i < SpinambaData.currency.length; i++) {
        it(SpinambaData.currency[i],  () => {
          const savedKeys = Cypress.env('savedKeys');
          cy.loginSpinamba(`${SpinambaData.url}/${SpinambaData.lang[j]}#sign-in`, i)
          
          cy.wait(3000)
          cy.visit(`${SpinambaData.url}/${SpinambaData.lang[j]}#cashbox-deposit`)
    
          cy.findKey('.popup', savedKeys)
      
          cy.depSpinamba(savedKeys)
    
          cy.visit(`${SpinambaData.url}/${SpinambaData.lang[j]}#cashbox-withdraw`)
          cy.wait(4000)
          cy.findKey(`.popup`, savedKeys)
      
          cy.withdrawSpinamba(savedKeys)
        })
      }
    })
  }


})

describe('SpinBounty', {tags: '@SB'},() => {

  for(let j = 0; j < (AllLang ? SpinBountyData.lang.length : 1); j++){
    describe(SpinBountyData.lang[j], () => {
      for(let i = 0; i < SpinBountyData.currency.length; i++) {
        it(SpinBountyData.currency[i],  () => {
          const savedKeys = Cypress.env('savedKeys');
          cy.loginSpinBounty(`${SpinBountyData.url}/${SpinBountyData.lang[j]}#sign-in`, i)
          cy.wait(5000)
          cy.visit(`${SpinBountyData.url}/${SpinBountyData.lang[j]}#cashbox-deposit`)
          cy.wait(4000)
          cy.findKey(`#profile-modal > .content > .payments_gallery_wrap`, savedKeys)
    
          cy.depSpinBounty(savedKeys)
    
          cy.visit(`${SpinBountyData.url}/${SpinBountyData.lang[j]}#cashbox-withdraw`)
          cy.wait(2000)
          cy.findKey(`#profile-modal > .content > .payments_gallery_wrap`, savedKeys)
      
          cy.withdrawSpinBounty(savedKeys)  
      
        })
      }
    })
  }

})

describe('Viks', {tags: '@Viks'},() => {

  for(let j = 0; j < (AllLang ? ViksData.lang.length : 1); j++){
    describe(ViksData.lang[j], () => {
      for(let i = 0; i < ViksData.currency.length; i++) {
        it(ViksData.currency[i],  () => {
          const savedKeys = Cypress.env('savedKeys');
          cy.loginViks(`${ViksData.url}/games/${ViksData.lang[j]}#sign-in`, i)
      
          cy.wait(5000)
          cy.visit(`${ViksData.url}/${ViksData.lang[j]}/games#cashbox-deposit`)
          cy.wait(5000)
          cy.findKey('.popup_content', savedKeys)
      
          cy.depViks(savedKeys)
    
          cy.visit(`${ViksData.url}/${ViksData.lang[j]}/games#cashbox-withdraw`)
          cy.wait(4000)
          cy.findKey('.popup_content', savedKeys)
    
          cy.withdrawViks(savedKeys)
        })
      }

    })
  }


}) 

describe('SuperCat', {tags: '@SC'},() => {
  
  for(let j = 0; j < (AllLang ? SuperCatData.lang.length : 1); j++){
    describe(SuperCatData.lang[j], () => {
      for(let i = 0; i < SuperCatData.currency.length; i++) {
        it(SuperCatData.currency[i],  () => {
          const savedKeys = Cypress.env('savedKeys');
          cy.loginSuperCat(`${SuperCatData.url}/${SuperCatData.lang[j]}/sign-in`, i)
    
          cy.wait(5000)
          cy.visit(`${SuperCatData.url}/${SuperCatData.lang[j]}/player/cashbox/deposit`)
          cy.wait(5000)
          cy.findKey('.cashbox-content', savedKeys)
    
          cy.depSuperCat(savedKeys)
    
          cy.visit(`${SuperCatData.url}/${SuperCatData.lang[j]}/player/cashbox/withdraw`)
          cy.wait(7000)
          cy.findKey('.cashbox-content', savedKeys)
      
          cy.withdrawSuperCat(savedKeys)
        })
      }
    })
  }

})

describe('Magic365', {tags: '@Magic'},() => {

  for(let j = 0; j < (AllLang ? Magic365Data.lang.length : 1); j++){
    describe(Magic365Data.lang[j], () => {
      for (let i = 0; i < Magic365Data.currency.length; i++) {
        it(Magic365Data.currency[i], () => {
          const savedKeys = Cypress.env('savedKeys');
          cy.loginMagic365(`${Magic365Data.url}/${Magic365Data.lang[j]}#sign-in`, i)
    
          cy.wait(5000)
          cy.visit(`${Magic365Data.url}/${Magic365Data.lang[j]}#cashbox-deposit`)
          cy.wait(4000)
          cy.findKey('#profile-modal', savedKeys)
    
          cy.depMagic365(savedKeys)
    
          cy.visit(`${Magic365Data.url}/${Magic365Data.lang[j]}#cashbox-withdraw`)
          cy.wait(2000)
          cy.findKey('#profile-modal', savedKeys)
    
          cy.withdrawMagic365(savedKeys)
        })
      }
    })
  }

})

describe('Spinado', {tags: '@Spinado'},() => {

  for(let j = 0; j < (AllLang ? SpinadoData.lang.length : 1); j++){
    describe(SpinadoData.lang[j], () => {
      for(let i = 0; i < SpinadoData.currency.length; i++) {
        it(SpinadoData.currency[i],  () => {
          const savedKeys = Cypress.env('savedKeys');
          cy.loginSpinado(`${SpinadoData.url}/${SpinadoData.lang[j]}#sign-in`, i)
    
          cy.wait(3000)
          cy.visit(`${SpinadoData.url}/${SpinadoData.lang[j]}#cashbox-deposit`)
          cy.wait(3000)
          cy.findKey('.modal_container', savedKeys)
    
          cy.depSpinado(savedKeys)
    
          cy.visit(`${SpinadoData.url}/${SpinadoData.lang[j]}#cashbox-withdraw`)
          cy.wait(2000)
          cy.findKey('.modal_container', savedKeys)
    
          cy.withdrawSpinado(savedKeys) 
        })
      }
    })
  }

})