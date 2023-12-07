import '../support/commands.js';

describe('Cheaking slider 4 daily(Functional)', () => {
  var languagesAllright = ["ru","en","de","es","pl","no","pt","fi","ja","sv","fr","tr"];
for(let t = 0; t < languagesAllright.length; t++)
{
  it(`AllRight Desk ${languagesAllright[t]}`, () => {
    cy.viewport(1920, 1080);
    cy.visit(`https://allrightcasino.com/${languagesAllright[t]}`);

    cy.get('.hamburger_icon > .icon').click({ force: true });
    cy.wait(1000);
      cy.get('.actions > .secondary_new').click({ force: true });
      cy.wait(1000);
      cy.get('#form-signin-email > .group-name-login').type("new_test_eur@gmail.com");
      cy.get('#form-signin-email > .group-name-password').type("new_test_eur@gmail.com");
      cy.get('#form-signin-email > .submit_button > .button').click({ force: true });
      cy.wait(1000);
      cy.get('.close > .icon-close').click({ force: true });
      cy.visit(`https://allrightcasino.com/${languagesAllright[t]}`);

      const elementSelector = "[id^=slick-slide-control0]";
      
        cy.get(elementSelector).each(($element, index, $list) => {
            cy.get(`#slick-slide-control0${index}`).click({ force: true });
            cy.wait(1500);
            

cy.screenshot(`AllRightDesk/slide_${index + 1}_language_${languagesAllright[t]}`, {
  capture: 'viewport',
});
            cy.wait(1500);
            cy.get('.item > .overlay > .banner_content > .button').each(($namebutton) => {
              cy.log($namebutton.text());
              let nameArrayRu = [$namebutton.text()]
              cy.log(nameArrayRu);
            });




            cy.get(`#slick-slide0${index} > .item > .overlay > .banner_content > .text > .desktop`)
  .invoke('text')
  .then((text) => {
    const paragraphCount = text.split('\n').filter(Boolean).length;
    cy.log(paragraphCount);
    if (paragraphCount < 3 && paragraphCount > 3) {
      cy.log(`Ошибка: Некорректное количество абзацов на ${languagesAllright[t]} языке`);
    }
  });
  console.log($list)
            cy.wait(1000);
            if(index !== $list.length - 1) {
            cy.get(`#slick-slide0${index} > .item > .overlay > .banner_content > .button`).click({ force: true });
            cy.wait(1000);
            cy.go(-1);
            cy.wait(1000);
            }
        });
  });
  
}

for(let t = 0; t < languagesAllright.length; t++)
{
  it(`AllRight Mob ${languagesAllright[t]}`, () => {
    cy.viewport(390, 844);
    cy.visit(`https://allrightcasino.com/${languagesAllright[t]}`);

    cy.get('.hamburger_icon > .icon').click({ force: true });
    cy.wait(1000);
      cy.get('.actions > .secondary_new').click({ force: true });
      cy.wait(1000);
      cy.get('#form-signin-email > .group-name-login').type("new_test_eur@gmail.com");
      cy.get('#form-signin-email > .group-name-password').type("new_test_eur@gmail.com");
      cy.get('#form-signin-email > .submit_button > .button').click({ force: true });
      cy.wait(1000);
      cy.get('.close > .icon-close').click({ force: true });
cy.visit(`https://allrightcasino.com/${languagesAllright[t]}`); 
      const elementSelector = "[id^=slick-slide-control0]";
      
        cy.get(elementSelector).each(($element, index, $list) => {
            cy.get(`#slick-slide-control0${index}`).click({ force: true });

            cy.screenshot(`AllRightMob/slide_${index + 1}_language_${languagesAllright[t]}`, {
              capture: 'viewport',
            });

            cy.get(`#slick-slide0${index} > .item > .overlay > .banner_content > .text > .desktop`)
  .invoke('text')
  .then((text) => {
    const paragraphCount = text.split('\n').filter(Boolean).length;
    if (paragraphCount < 3) {
      cy.log(`Ошибка: Некорректное количество абзацов на ${languagesAllright[t]} языке`);
    }
  });
  console.log($list)
            cy.wait(1000);
            if(index !== $list.length - 1) {
            cy.get(`#slick-slide0${index} > .item > .overlay > .banner_content > .button`).click({ force: true });
            cy.wait(1000);
            cy.go(-1);
            cy.wait(1000);
            }
        });
  });
}

var languagesLuckyBird = ["ru","en","de","es","pl","no","fi","pt","tr"]

for(let t = 0; t < languagesLuckyBird.length; t++)
{
  it(`LuckyBird Desk ${languagesLuckyBird[t]}`, () => {
    cy.viewport(1920, 1080);
    cy.visit(`https://luckybirdcasino.com/${languagesLuckyBird[t]}`);

      cy.get(':nth-child(3) > .column > .button').click({ force: true });
      cy.get('#form-signin-email > .group-name-login').type("new_test_eur@gmail.com");
      cy.get('#form-signin-email > .group-name-password').type("new_test_eur@gmail.com");
      cy.get('#form-signin-email > .submit_button > .button').click({ force: true });
      cy.wait(1000);
      cy.get('.header > .close > .icon-close').click({ force: true });
      cy.visit(`https://luckybirdcasino.com/${languagesLuckyBird[t]}`);
      const elementSelector = "[id^=slick-slide-control0]";
      
        cy.get(elementSelector).each(($element, index, $list) => {
            cy.get(`#slick-slide-control0${index}`).click({ force: true });
            
            cy.screenshot(`LuckyBirdDesk/slide_${index + 1}_language_${languagesLuckyBird[t]}`, {
  capture: 'runner'
});

            cy.get(`#slick-slide0${index} > .item > .overlay > .text > .desktop`)
  .invoke('text')
  .then((text) => {
    const paragraphCount = text.split('\n').filter(Boolean).length;
    if (paragraphCount < 3) {
      cy.log(`Ошибка: Некорректное количество абзацов на ${languagesLuckyBird[t]} языке`);
    }
  });
  console.log($list)
            cy.wait(1000);
            if(index !== $list.length - 1) {
            cy.get(`#slick-slide0${index} > .item > .overlay > .button_container > .transparent`).click({ force: true });
            cy.wait(1000);
            cy.go(-1);
            cy.wait(1000);
            }
        });
  });
}

for(let t = 0; t < languagesLuckyBird.length; t++)
{
  it(`LuckyBird Mob ${languagesLuckyBird[t]}`, () => {
    cy.viewport(390, 844);
    cy.visit(`https://luckybirdcasino.com/${languagesLuckyBird[t]}`);

      cy.get(':nth-child(3) > .column > .button').click({ force: true });
      cy.get('#form-signin-email > .group-name-login').type("new_test_eur@gmail.com");
      cy.get('#form-signin-email > .group-name-password').type("new_test_eur@gmail.com");
      cy.get('#form-signin-email > .submit_button > .button').click({ force: true });
      cy.wait(1000);
      cy.get('.header > .close > .icon-close').click({ force: true });
      cy.visit(`https://luckybirdcasino.com/${languagesLuckyBird[t]}`);
      const elementSelector = "[id^=slick-slide-control0]";
      
        cy.get(elementSelector).each(($element, index, $list) => {
            cy.get(`#slick-slide-control0${index}`).click({ force: true });
            cy.screenshot(`LuckyBirdMob/slide_${index + 1}_language_${languagesLuckyBird[t]}`, {
              capture: 'viewport',
            });
            cy.get(`#slick-slide0${index} > .item > .overlay > .text > .desktop`)
  .invoke('text')
  .then((text) => {
    const paragraphCount = text.split('\n').filter(Boolean).length;
    if (paragraphCount < 3) {
      cy.log(`Ошибка: Некорректное количество абзацов на ${languagesLuckyBird[t]} языке`);
    }
  });
  console.log($list)
            cy.wait(1000);
            if(index !== $list.length - 1) {
            cy.get(`#slick-slide0${index} > .item > .overlay > .button_container > .transparent`).click({ force: true });
            cy.wait(1000);
            cy.go(-1);
            cy.wait(1000);
            }
        });
  });
}

var languagesSlottica = ["ru","en","de","es","pl","pt","fi","no","sv","ja","kk","fr","hi","bn","az","tr"]

for(let t = 0; t < languagesSlottica.length; t++)
{
  it(`Slottica Desk ${languagesSlottica[t]}`, () => {
    cy.viewport(1920, 1080);
    cy.visit(`https://slottica.com/${languagesSlottica[t]}`);

    cy.get('.extend > .button').click({ force: true });
    cy.get('#signinform_email > .form > .group-name-login').type("new_test_eur@gmail.com");
    cy.get('#signinform_email > .form > .group-name-password').type("new_test_eur@gmail.com");
    cy.get('#signinform_email > .form > :nth-child(4) > .button').click({ force: true });
    cy.wait(1000);
    cy.get('.close > .icon-close').click({ force: true });
      cy.visit(`https://slottica.com/${languagesSlottica[t]}`);
      var elementSelectorSlott = "[id^=slick-slide-control0]";
      
        cy.get(elementSelectorSlott).each(($element, index, $list) => {
            cy.get(`#slick-slide-control0${index}`).click({ force: true });
            cy.screenshot(`SlotticaDesk/slide_${index + 1}_language_${languagesSlottica[t]}.png`, {
              capture: 'viewport',
            });
            cy.get(`#slick-slide0${index} > :nth-child(1) > .item > .text_block > .text_row > .desktop > span`)
  .invoke('text')
  .then((text) => {
    const paragraphCount = text.split('\n').filter(Boolean).length;
    if (paragraphCount < 2) {
      cy.log(`Ошибка: Некорректное количество абзацов на ${languagesSlottica[t]} языке`);
    }
  });
  console.log($list)
            cy.wait(1000);
            if(index !== $list.length - 1) {
            cy.get(`#slick-slide0${index} > :nth-child(1) > .item > .text_block > .button_row > .desktop`).click({ force: true });
            cy.wait(1000);
            cy.go(-1);
            cy.wait(1000);
            }
        });
  });
}



for (let t = 0; t < languagesSlottica.length; t++) {

  it(`Slottica Mob ${languagesSlottica[t]}`, () => {

    
    cy.visit(`https://slottica.com/${languagesSlottica[t]}`);
    cy.viewport(1920, 1080);
    cy.get('.extend > .button').click({ force: true });
    cy.get('#signinform_email > .form > .group-name-login').type("new_test_eur@gmail.com");
    cy.get('#signinform_email > .form > .group-name-password').type("new_test_eur@gmail.com");
    cy.get('#signinform_email > .form > :nth-child(4) > .button').click({ force: true });
    cy.wait(1000);
    cy.get('.close > .icon-close').click({ force: true });
    cy.wait(1000);
      cy.visit(`https://slottica.com/${languagesSlottica[t]}`);
      cy.wait(1000);

      const swipeInterval = 2000; // Интервал между свайпами в миллисекундах
  let expectedCount; // Переменная для хранения значения expectedCount
  let swipeCount = 1; // Начальное количество свайпов

  cy.viewport(1920, 1080);
  cy.wait(1000);
  cy.get("[id^=slick-slide-control0]").its("length").then((length) => {
    expectedCount = length; // Присваиваем значение expectedCount
  });

  cy.viewport(390, 844);
  cy.wait(1000);

  cy.get(':nth-child(1) > .no_container').then(($element) => {
    cy.scrollTo('top');
    const startX = $element[0].getBoundingClientRect().left + 10; // Начальная точка X
    const startY = $element[0].getBoundingClientRect().top + 10; // Начальная точка Y
    const endX = startX + 100; // Увеличиваем расстояние свайпа с каждой итерацией
    const endY = startY;

    // Ограничиваем цикл значением expectedCount
    for (let i = 0; i < Math.min(swipeCount, expectedCount); i++) {
      cy.scrollTo('top');
      cy.get($element).trigger('mousedown', { button: 0, clientX: startX, clientY: startY } ,{ force: true });
      cy.wait(1000);
      cy.get($element).trigger('mousemove', { button: 0, clientX: endX, clientY: endY } ,{ force: true });
      cy.wait(1000);
      cy.get($element).trigger('mouseup', { button: 0, clientX: endX, clientY: endY } ,{ force: true });

      cy.scrollTo('top');
      cy.screenshot(`SlotticaMob/slide_${i + 1}_language_${languagesSlottica[t]}`, {
        capture: 'viewport',
      });

      cy.wait(1000);

      swipeCount += 1; // Увеличиваем значение swipeCount для следующей итерации
    }
  });
      cy.wait(1000);
    
  });
}

 
var languagesSlottyway = ["ru","en","de","es","pl","pt","fi","no","sv","tr"]

for(let t = 0; t < languagesSlottyway.length; t++)
{
  it(`SlottyWay Desk ${languagesSlottyway[t]}`, () => {
    cy.viewport(1920, 1080);
    cy.visit(`https://slottyway.com/${languagesSlottyway[t]}`);

    cy.get('.login > :nth-child(2) > .button').click({ force: true });
    cy.get('.group-name-login').type("new_test_eur@gmail.com");
    cy.get('.group-name-password').type("new_test_eur@gmail.com");
    cy.get(':nth-child(8) > .button').click({ force: true });
    cy.wait(1000);
    cy.get('.close > .icon-close2').click({ force: true });
    cy.visit(`https://slottyway.com/${languagesSlottyway[t]}`);
    
    cy.wait(1000);

    cy.get('[id^=slick-slide-control]').each(($element, index) => {
      cy.get(`#slick-slide-control2${index}`).click({ force: true }) || cy.get(`#slick-slide-control0${index}`).click({ force: true }) || cy.get(`#slick-slide-control1${index}`).click({ force: true }); 
      cy.wait(1500);
      cy.screenshot(`screenshotsCuracao/SlottyWayDesk/slide_${index + 1}_language_${languagesSlottyway[t]}.png`, {
        capture: 'viewport',
      });
      cy.get(`.item > .overlay > .banner_content > .text > .desktop`)
        .invoke('text')
        .then((text) => {
          const paragraphCount = text.split('\n').filter(Boolean).length;
          if (paragraphCount < 2) {
            cy.log(`Ошибка: Некорректное количество абзацов на ${languagesSlottyway[t]} языке`);
          }
        });
      
      cy.get(`#slick-slide2${index} > .item > .overlay > .banner_content > .button_container > .button`).click({ force: true });
      cy.wait(1000);
      cy.go(-1);
    });
    cy.wait(1000);
  });
}




function True() {
  cy.get('[id^=slick-slide-control]').then(($elements) => {
    const elementsArray = $elements.toArray();
    const regex = /slick-slide-control(\d{2})/;

    const filteredElements = elementsArray.filter(($element) => {
      const id = $element.getAttribute('id');
      return regex.test(id);
    });

      cy.get('.item > .overlay > .banner_content > .text > .desktop')
        .invoke('text')
        .then((text) => {
          const paragraphCount = text.split('\n').filter(Boolean).length;
          if (paragraphCount < 3) {
            cy.log(`Ошибка: Некорректное количество абзацов на ${languagesSlottyway[t]} языке`);
          }
        });

        var index = 0;
        for(let b = 0; b < filteredElements.length; b++) {
            cy.get(`#slick-slide-control2${index}`).click({ force: true });
            cy.wait(1000);
            cy.screenshot(`screenshotsCuracao/SlottyWayMob/slide_${index + 1}_language_${languagesSlottyway[b]}.png`, {
              capture: 'viewport',
            });
            cy.get(`#slick-slide2${index} > .item > .overlay > .banner_content > .button_container > .button`).click({ force: true });
            cy.wait(1000);
            index = index + 1;
            cy.go(-1);
            cy.wait(1000);
        }
        });
}


for (let t = 0; t < languagesSlottyway.length; t++) {
  it(`SlottyWay Mob ${languagesSlottyway[t]}`, () => {
    cy.viewport(390, 844);
    cy.visit(`https://slottyway.com/${languagesSlottyway[t]}`);

    cy.get('.login > :nth-child(2) > .button').click({ force: true });
    cy.get('.group-name-login').type("new_test_eur@gmail.com");
    cy.get('.group-name-password').type("new_test_eur@gmail.com");
    cy.get(':nth-child(8) > .button').click({ force: true });
    cy.wait(1000);
    cy.get('.close > .icon-close2').click({ force: true });
    cy.visit(`https://slottyway.com/${languagesSlottyway[t]}`);
    cy.wait(1000);
    
    // Вызов функции True для каждого языка
    True();
    
    
  });
}


var languagesSpinamba = ["ru","en","de","es","pl","pt","fi","no","sv","tr"]

for(let t = 0; t < languagesSpinamba.length; t++)
{
  it(`Spinamba Desk ${languagesSpinamba[t]}`, () => {
    cy.viewport(1920, 1080);
    cy.visit(`https://spinamba.com/${languagesSpinamba[t]}`);

    cy.get('.row > .login > :nth-child(2) > .button').click({ force: true });
      cy.get('#form-signin-email > .group-name-login').type("new_test_eur@gmail.com");
      cy.get('#form-signin-email > .group-name-password').type("new_test_eur@gmail.com");
      cy.get('#form-signin-email > .submit_button > .button').click({ force: true });
      cy.wait(1000);
      cy.get('.header > .close > .icon-close').click({ force: true });
      cy.visit(`https://spinamba.com/${languagesSpinamba[t]}`);
      var elementSelectorSpinamba = "[id^=slick-slide-control]";

cy.get(elementSelectorSpinamba).each(($element, index, $list) => {
  if (index > 0 && index < $list.length - 1) {
    cy.get(`[id^=slick-slide-control][id$=${index}]`).click({ force: true, multiple: true });
    cy.screenshot(`SpinambaDesk/slide_${index + 1}_language_${languagesSpinamba[t]}.png`, {
      capture: 'runner',
    });
    cy.get(`[id$=${index}] > .item > .overlay > :nth-child(1) > .text > .desktop`)
      .invoke('text')
      .then((text) => {
        const paragraphCount = text.split('\n').filter(Boolean).length;
        if (paragraphCount < 3) {
          cy.log(`Ошибка: Некорректное количество абзацов на ${languagesSpinamba[t]} языке`);
        }
      });
    console.log($list);
    cy.wait(1000);
    cy.get(`[id^=slick-slide][id$=${index}] > .item > .overlay > :nth-child(1) > .button_container > .button`)
      .not(`[id^=slick-slide010] > .item > .overlay > :nth-child(1) > .button_container > .button`)
      .not(`[id^=slick-slide211] > .item > .overlay > :nth-child(1) > .button_container > .button`)
      .click({ force: true, multiple: true });
    cy.wait(1000);
    cy.go(-1);
    cy.wait(1000);
  }
});
  });
}



for(let t = 0; t < languagesSpinamba.length; t++)
{
  it(`Spinamba Mob ${languagesSpinamba[t]}`, () => {
    cy.viewport(390, 844);
    cy.visit(`https://spinamba.com/${languagesSpinamba[t]}`);

    cy.get('.row > .login > :nth-child(2) > .button').click({ force: true });
      cy.get('#form-signin-email > .group-name-login').type("new_test_eur@gmail.com");
      cy.get('#form-signin-email > .group-name-password').type("new_test_eur@gmail.com");
      cy.get('#form-signin-email > .submit_button > .button').click({ force: true });
      cy.wait(1000);
      cy.get('.header > .close > .icon-close').click({ force: true });
      cy.visit(`https://spinamba.com/${languagesSpinamba[t]}`);
      var elementSelectorSpinamba = "[id^=slick-slide-control]";

cy.get(elementSelectorSpinamba).each(($element, index, $list) => {
  if (index > 0 && index < $list.length - 1) {
    cy.get(`[id^=slick-slide-control][id$=${index}]`).click({ force: true, multiple: true });
    cy.screenshot(`SpinambaMob/slide_${index + 1}_language_${languagesSpinamba[t]}.png`, {
      capture: 'viewport',
    });
    cy.get(`[id$=${index}] > .item > .overlay > :nth-child(1) > .text > .desktop`)
      .invoke('text')
      .then((text) => {
        const paragraphCount = text.split('\n').filter(Boolean).length;
        if (paragraphCount < 2) {
          cy.log(`Ошибка: Некорректное количество абзацов на ${languagesSpinamba[t]} языке`);
        }
      });
    console.log($list);
    cy.wait(1000);
    cy.get(`[id^=slick-slide][id$=${index}] > .item > .overlay > :nth-child(1) > .button_container > .button`)
      .not(`[id^=slick-slide010] > .item > .overlay > :nth-child(1) > .button_container > .button`)
      .not(`[id^=slick-slide211] > .item > .overlay > :nth-child(1) > .button_container > .button`)
      .click({ force: true, multiple: true });
    cy.wait(1000);
    cy.go(-1);
    cy.wait(1000);
  }
});
  });
}



var languagesSpinBounty = ["ru", "en", "pl", "de", "fr"];

for (let t = 0; t < languagesSpinBounty.length; t++) {
  it(`SpinBounty Desk ${languagesSpinBounty[t]}`, () => {
    cy.viewport(1920, 1080);
    cy.visit(`https://magic365.com/${languagesSpinBounty[t]}`);
    cy.get('#sidebar-main > .actions > .primary').click({ force: true });
    cy.get('.group-name-login > .control-label').type("v.pupkin.eur@gmail.com");
    cy.get('.group-name-password > .control-label').type("JTFN3W9JM4");
    cy.get('.submit').click({ force: true });
    cy.wait(1000);
    cy.get('.action > .icon').click({ force: true });
    cy.visit(`https://spinbounty.com/${languagesSpinBounty[t]}`);

    cy.get('.item_banner > .game_info > .btn_block > .button').its("length").then((length) => {
      var expectedCount = length;
/*
      for (var cv = 0; cv < expectedCount; cv++) {
        var indexxx = cv; // Используем cv в качестве начального значения

        cy.get(`[num="${indexxx}"] > .item_banner > .game_info > .content_block`)
          .invoke('text')
          .then((text) => {
            const paragraphCount = text.split('\n').filter(Boolean).length;
            if (paragraphCount < 3) {
              cy.log(`Ошибка: Некорректное количество абзацев на ${languagesSpinBounty[t]} языке`);
            }
          });
*/
          const scrollDistance = 810; // Расстояние свайпа
          const captureInterval = 1000; // Интервал между скриншотами в миллисекундах
          let currentScrollLeft = 0;

          
          for (let swipeCount = 0; swipeCount < expectedCount; swipeCount++) {
            cy.get(`.ds-track:first`).scrollTo(currentScrollLeft, 0, { duration: 250 });
            cy.wait(captureInterval);
            cy.screenshot(`SpinBountyDesk/slide_swipe_${swipeCount + 1}_language_${languagesSpinBounty[t]}`, {
              capture: 'viewport',
            });
            currentScrollLeft += scrollDistance; // Обновляем currentScrollLeft с учетом scrollDistance
          };
          /*
        }
        */
    });
  });
}

for (let t = 0; t < languagesSpinBounty.length; t++) {
  it(`SpinBounty Mob ${languagesSpinBounty[t]}`, () => {
    cy.viewport(390, 844);
    cy.visit(`https://magic365.com/${languagesSpinBounty[t]}`);
    cy.get('#sidebar-main > .actions > .primary').click({ force: true });
    cy.get('.group-name-login > .control-label').type("v.pupkin.eur@gmail.com");
    cy.get('.group-name-password > .control-label').type("JTFN3W9JM4");
    cy.get('.submit').click({ force: true });
    cy.wait(1000);
    cy.get('.action > .icon').click({ force: true });
    cy.visit(`https://spinbounty.com/${languagesSpinBounty[t]}`);

    cy.get('.item_banner > .game_info > .btn_block > .button').its("length").then((length) => {
      var expectedCount = length;
/*
      for (var cv = 0; cv < expectedCount; cv++) {
        var indexxx = cv; // Используем cv в качестве начального значения

        cy.get(`[num="${indexxx}"] > .item_banner > .game_info > .content_block`)
          .invoke('text')
          .then((text) => {
            const paragraphCount = text.split('\n').filter(Boolean).length;
            if (paragraphCount < 3) {
              cy.log(`Ошибка: Некорректное количество абзацев на ${languagesSpinBounty[t]} языке`);
            }
          });
*/
          const scrollDistance = 310; // Расстояние свайпа
          const captureInterval = 1000; // Интервал между скриншотами в миллисекундах
          let currentScrollLeft = 0;

          
          for (let swipeCount = 0; swipeCount < expectedCount; swipeCount++) {
            cy.get(`.ds-track:first`).scrollTo(currentScrollLeft, 0, { duration: 250 });
            cy.wait(captureInterval);
            cy.screenshot(`SpinBountyMob/slide_swipe_${swipeCount + 1}_language_${languagesSpinBounty[t]}`, {
              capture: 'viewport',
            });
            currentScrollLeft += scrollDistance; // Обновляем currentScrollLeft с учетом scrollDistance
          };
          /*
        }
        */
    });
  });
}



var languagesSuperCat = ["ru","en","de","es","pl","pt","fi","no","tr"];

for(let t = 0; t < languagesSuperCat.length; t++) {
  it(`SuperCat Desk ${languagesSuperCat[t]}`, () => {
    cy.viewport(1920, 1080);
    cy.visit(`https://supercatcasino67.com/${languagesSuperCat[t]}`);

    cy.get('.guest-header > .button-outlined').click({ force: true });
    cy.get(':nth-child(1) > .form-control').type("new_test_eur@gmail.com");
    cy.get(':nth-child(2) > .form-control').type("new_test_eur@gmail.com");
    cy.get('.sign-in-form > .button').click({ force: true });
    cy.wait(1000);
    cy.visit(`https://supercatcasino67.com/${languagesSuperCat[t]}`);
    
    cy.get('.slider-dots button').each(($button, index) => {
      cy.wrap($button).click({ force: true });
      cy.screenshot(`SuperCatDesk/slide_${index + 1}_language_${languagesSuperCat[t]}.png`, {
        capture: 'viewport',
      });
      cy.wait(1500);
      cy.get('[tabindex="-1"] > .slider-item > .slider-item__header')
        .invoke('text')
        .then((text) => {
          const paragraphCount = text.split('\n').filter(Boolean).length;
          if (paragraphCount < 3) {
            cy.log(`Ошибка: Некорректное количество абзацов на ${languagesSuperCat[t]} языке`);
          }
    });
      cy.wait(1000);
    });
    // Вернуться назад
    cy.go(-1);
    cy.wait(1000);
  });
}



for(let t = 0; t < languagesSuperCat.length; t++) {
  it(`SuperCat Mob ${languagesSuperCat[t]}`, () => {
    cy.viewport(390, 844);
    cy.visit(`https://supercatcasino67.com/${languagesSuperCat[t]}`);

    cy.get('.guest-header > .button-outlined').click({ force: true });
    cy.get(':nth-child(1) > .form-control').type("new_test_eur@gmail.com");
    cy.get(':nth-child(2) > .form-control').type("new_test_eur@gmail.com");
    cy.get('.sign-in-form > .button').click({ force: true });
    cy.wait(1000);
    cy.visit(`https://supercatcasino67.com/${languagesSuperCat[t]}`);
    for(let v = 0; v <= 9; v++) {
    cy.get('.slick-next').each(($button, index) => {
      cy.wrap($button).click({ force: true });
      cy.screenshot(`SuperCatMob/slide_${index + 1}_language_${languagesSuperCat[t]}.png`, {
        capture: 'viewport',
      });
      cy.wait(1500);
      cy.get('[tabindex="-1"] > .slider-item > .slider-item__header')
        .invoke('text')
        .then((text) => {
          const paragraphCount = text.split('\n').filter(Boolean).length;
          if (paragraphCount < 3) {
            cy.log(`Ошибка: Некорректное количество абзацов на ${languagesSuperCat[t]} языке`);
          }
    });
      cy.wait(1000);

      
    });
  }
    // Вернуться назад
    cy.go(-1);
    cy.wait(1000);
  });
}


var languagesMagic365 = ["ru","en","pl"]

for (let t = 0; t < languagesMagic365.length; t++) {
  it(`Magic365 Desk ${languagesMagic365[t]}`, () => {
    cy.viewport(1920, 1080);
    cy.visit(`https://spinbounty.com/${languagesMagic365[t]}`);
    cy.get('#sidebar-main > .actions > .primary').click({ force: true });
    cy.get('.group-name-login > .control-label').type("new_test_eur@gmail.com");
    cy.get('.group-name-password > .control-label').type("new_test_eur@gmail.com");
    cy.get('.submit').click({ force: true });
    cy.wait(1000);
    cy.get('.action > .icon').click({ force: true });
    cy.visit(`https://spinbounty.com/${languagesMagic365[t]}`);

    cy.get('.item_banner > .game_info > .btn_block > .button').its("length").then((length) => {
      var expectedCount = length;
/*
      for (var cv = 0; cv < expectedCount; cv++) {
        var indexxx = cv; // Используем cv в качестве начального значения

        cy.get(`[num="${indexxx}"] > .item_banner > .game_info > .content_block`)
          .invoke('text')
          .then((text) => {
            const paragraphCount = text.split('\n').filter(Boolean).length;
            if (paragraphCount < 3) {
              cy.log(`Ошибка: Некорректное количество абзацев на ${languagesMagic365[t]} языке`);
            }
          });
*/
          const scrollDistance = 810; // Расстояние свайпа
          const captureInterval = 1000; // Интервал между скриншотами в миллисекундах
          let currentScrollLeft = 0;

          
          for (let swipeCount = 0; swipeCount < expectedCount; swipeCount++) {
            cy.get(`.ds-track:first`).scrollTo(currentScrollLeft, 0, { duration: 250 });
            cy.wait(captureInterval);
            cy.screenshot(`Magic365/slide_swipe_${swipeCount + 1}_language_${languagesMagic365[t]}`, {
              capture: 'viewport',
            });
            currentScrollLeft += scrollDistance; // Обновляем currentScrollLeft с учетом scrollDistance
          };
          /*
        }
        */
    });
  });
}

for (let t = 0; t < languagesMagic365.length; t++) {
  it(`Magic365 Mob ${languagesMagic365[t]}`, () => {
    cy.viewport(390, 844);
    cy.visit(`https://spinbounty.com/${languagesMagic365[t]}`);
    cy.get('#sidebar-main > .actions > .primary').click({ force: true });
    cy.get('.group-name-login > .control-label').type("new_test_eur@gmail.com");
    cy.get('.group-name-password > .control-label').type("new_test_eur@gmail.com");
    cy.get('.submit').click({ force: true });
    cy.wait(1000);
    cy.get('.action > .icon').click({ force: true });
    cy.visit(`https://spinbounty.com/${languagesMagic365[t]}`);

    cy.get('.item_banner > .game_info > .btn_block > .button').its("length").then((length) => {
      var expectedCount = length;
/*
      for (var cv = 0; cv < expectedCount; cv++) {
        var indexxx = cv; // Используем cv в качестве начального значения

        cy.get(`[num="${indexxx}"] > .item_banner > .game_info > .content_block`)
          .invoke('text')
          .then((text) => {
            const paragraphCount = text.split('\n').filter(Boolean).length;
            if (paragraphCount < 3) {
              cy.log(`Ошибка: Некорректное количество абзацев на ${languagesMagic365[t]} языке`);
            }
          });
*/
          const scrollDistance = 310; // Расстояние свайпа
          const captureInterval = 1000; // Интервал между скриншотами в миллисекундах
          let currentScrollLeft = 0;

          
          for (let swipeCount = 0; swipeCount < expectedCount; swipeCount++) {
            cy.get(`.ds-track:first`).scrollTo(currentScrollLeft, 0, { duration: 250 });
            cy.wait(captureInterval);
            cy.screenshot(`Magic365/slide_swipe_${swipeCount + 1}_language_${languagesMagic365[t]}`, {
              capture: 'viewport',
            });
            currentScrollLeft += scrollDistance; // Обновляем currentScrollLeft с учетом scrollDistance
          };
          /*
        }
        */
    });
  });
}




var languagesViks = ["ru","en","kk"]

for(let t = 0; t < languagesViks.length; t++)
{
  it(`Viks Desk ${languagesViks[t]}`, () => {
    cy.viewport(1920, 1080);
    cy.visit(`https://viks.com/${languagesViks[t]}/casino`);

    cy.get('.extend > .button').click({ force: true });
    cy.get('[data-tab="email"] > .label').click({ force: true });
    cy.get('#signinform_email > .form > .group-name-login').type("v.pupkin.eur@gmail.com");
    cy.get('#signinform_email > .form > .group-name-password').type("JTFN3W9JM4");
    cy.get('#signinform_email > .form > :nth-child(4) > .button').click({ force: true });
    cy.wait(1000);
    cy.go(-1);
      cy.visit(`https://viks.com/${languagesViks[t]}/casino`);
      var elementSelectorViks = "[id^=slick-slide-control0]";
      
        cy.get(elementSelectorViks).each(($element, index, $list) => {
            cy.get(`#slick-slide-control0${index}`).click({ force: true });
            cy.screenshot(`ViksDesk/slide_${index + 1}_language_${languagesViks[t]}.png`, {
              capture: 'viewport',
            });
            cy.get(`#slick-slide0${index} > :nth-child(1) > .item > .text_block > .text_row > .desktop`)
  .invoke('text')
  .then((text) => {
    const paragraphCount = text.split('\n').filter(Boolean).length;
    if (paragraphCount < 3) {
      cy.log(`Ошибка: Некорректное количество абзацов на ${languagesViks[t]} языке`);
    }
  });
  console.log($list)
            cy.wait(1000);
            if(index !== $list.length - 1) {
            cy.get(`#slick-slide0${index} > :nth-child(1) > .item > .text_block > .button_row > .desktop`).click({ force: true });
            cy.wait(1000);
            cy.go(-1);
            cy.wait(1000);
            }
        });
  });

}


for (let t = 0; t < languagesViks.length; t++) {
  

  it(`Viks Mob ${languagesViks[t]}`, () => {
    cy.viewport(1920, 1080);
    cy.visit(`https://viks.com/casino`);
    
    cy.visit(`https://viks.com/${languagesViks[t]}/casino`);

    cy.get('.extend > .button').click({ force: true });
    cy.get('[data-tab="email"] > .label').click({ force: true });
    cy.get('#signinform_email > .form > .group-name-login').type("v.pupkin.eur@gmail.com");
    cy.get('#signinform_email > .form > .group-name-password').type("JTFN3W9JM4");
    cy.get('#signinform_email > .form > :nth-child(4) > .button').click({ force: true });
    cy.wait(1000);

  const swipeInterval = 2000; // Інтервал між свайпами в мілісекундах
  let expectedCount; // Змінна для зберігання значення expectedCount
  let swipeCount = 1; // Початкова кількість свайпів
    cy.go(-1);

    cy.wait(1000);
    cy.get("[id^=slick-slide-control0]").its("length").then((length) => {
      expectedCount = length; // Присвоюємо значення expectedCount
    });

    cy.viewport(390, 844);
    cy.wait(1000);

    cy.get(':nth-child(1) > .no_container').then(($element) => {
      cy.scrollTo('top');
      const startX = $element[0].getBoundingClientRect().left + 10; // Початкова точка X
      const startY = $element[0].getBoundingClientRect().top + 10; // Початкова точка Y
      const endX = startX + 100; // Збільшуємо відстань свайпа з кожною ітерацією
      const endY = startY;

      // Обмежуємо цикл значенням expectedCount
      for (let i = 0; i < Math.min(swipeCount, expectedCount); i++) {
        cy.scrollTo('top');
        cy.get($element).trigger('mousedown', { button: 0, clientX: startX, clientY: startY }, { force: true });
        cy.wait(1000);
        cy.get($element).trigger('mousemove', { button: 0, clientX: endX, clientY: endY }, { force: true });
        cy.wait(1000);
        cy.get($element).trigger('mouseup', { button: 0, clientX: endX, clientY: endY }, { force: true });

        cy.scrollTo('top');
        cy.screenshot(`ViksMob/slide_${i + 1}_language_${languagesViks[t]}`, {
          capture: 'viewport',
        });

        cy.wait(1000);

        swipeCount += 1; // Збільшуємо значення swipeCount для наступної ітерації
      }
    });

    cy.wait(1000);
  });
}



var languagesSpinado = ["ru","en","es","pl","pt","kk"]

for(let t = 0; t < languagesSpinado.length; t++)
{
  it(`Spinado Desk ${languagesSpinado[t]}`, () => {
    cy.viewport(1920, 1080);
    cy.visit(`https://spinado.com/${languagesSpinado[t]}`);

    cy.get('.extend > .button').click({ force: true });
    cy.get('#signinform_email > .form > .group-name-login').type("testmodal@gmail.com");
    cy.get('#signinform_email > .form > .group-name-password').type("@gmail.comM123");
    cy.get('#signinform_email > .form > :nth-child(4) > .button').click({ force: true });
    cy.wait(1000);
    cy.get('.close > .icon-close').click({ force: true });
      cy.visit(`https://spinado.com/${languagesSpinado[t]}`);
      var elementSelectorSpinado = "[id^=slick-slide-control0]";
      
        cy.get(elementSelectorSpinado).each(($element, index, $list) => {
            cy.get(`#slick-slide-control0${index}`).click({ force: true });
            cy.screenshot(`SpinadoDesk/slide_${index + 1}_language_${languagesSpinado[t]}.png`, {
              capture: 'viewport',
            });
            cy.get(`#slick-slide0${index} > :nth-child(1) > .item > .text_block > .text_row > .desktop`)
  .invoke('text')
  .then((text) => {
    const paragraphCount = text.split('\n').filter(Boolean).length;
    if (paragraphCount < 3) {
      cy.log(`Ошибка: Некорректное количество абзацов на ${languagesSpinado[t]} языке`);
    }
  });
  console.log($list)
            cy.wait(1000);
            if(index !== $list.length - 1) {
            cy.get(`#slick-slide0${index} > :nth-child(1) > .item > .text_block > .button_row > .desktop`).click({ force: true });
            cy.wait(1000);
            cy.go(-1);
            cy.wait(1000);
            }
        });
  });

}


for (let t = 0; t < languagesSpinado.length; t++) {

  it.only(`Spinado Mob ${languagesSpinado[t]}`, () => {

    
    cy.visit(`https://spinado.com/${languagesSpinado[t]}`);
    cy.viewport(1920, 1080);
    cy.get('.extend > .button').click({ force: true });
    cy.get('#signinform_email > .form > .group-name-login').type("testmodal@gmail.com");
    cy.get('#signinform_email > .form > .group-name-password').type("@gmail.comM123");
    cy.get('#signinform_email > .form > :nth-child(4) > .button').click({ force: true });
    cy.wait(1000);
    cy.get('.close > .icon-close').click({ force: true });
    cy.wait(1000);
      cy.visit(`https://spinado.com/${languagesSpinado[t]}`);
      cy.wait(1000);

      const swipeInterval = 2000; // Интервал между свайпами в миллисекундах
  let expectedCount; // Переменная для хранения значения expectedCount
  let swipeCount = 1; // Начальное количество свайпов

  cy.viewport(1920, 1080);
  cy.wait(1000);
  cy.get("[id^=slick-slide-control0]").its("length").then((length) => {
    expectedCount = length; // Присваиваем значение expectedCount
  });

  cy.viewport(390, 844);
  cy.wait(1000);

  cy.get('.page_main > :nth-child(1)').then(($element) => {
    cy.scrollTo('top');
    const startX = $element[0].getBoundingClientRect().left + 10; // Начальная точка X
    const startY = $element[0].getBoundingClientRect().top + 10; // Начальная точка Y
    const endX = startX + 100; // Увеличиваем расстояние свайпа с каждой итерацией
    const endY = startY;

    // Ограничиваем цикл значением expectedCount
    for (let i = 0; i < Math.min(swipeCount, expectedCount); i++) {
      cy.scrollTo('top');
      cy.get($element).trigger('mousedown', { button: 0, clientX: startX, clientY: startY } ,{ force: true });
      cy.wait(1000);
      cy.get($element).trigger('mousemove', { button: 0, clientX: endX, clientY: endY } ,{ force: true });
      cy.wait(1000);
      cy.get($element).trigger('mouseup', { button: 0, clientX: endX, clientY: endY } ,{ force: true });

      cy.scrollTo('top');
      cy.screenshot(`SpinadoMob/slide_${i + 1}_language_${languagesSpinado[t]}`, {
        capture: 'viewport',
      });

      cy.wait(1000);

      swipeCount += 1; // Увеличиваем значение swipeCount для следующей итерации
    }
  });
      cy.wait(1000);
    
  });
}

});




