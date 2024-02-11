import '../support/commands.js';

describe('AllRight', () => {
  var languagesAllright = ["ru", "en", "de", "es", "pl", "no", "pt", "fi", "ja", "sv", "fr", "tr"];

  function loginAllright() {
    cy.visit(`https://allrightcasino.com`);
    cy.get('.hamburger_icon > .icon').click({ force: true });
    cy.get('.actions > .secondary_new').click({ force: true });
    cy.get('#form-signin-email > .group-name-login').type("new_test_eur@gmail.com");
    cy.get('#form-signin-email > .group-name-password').type("new_test_eur@gmail.com");
    cy.wait(500);
    cy.get('#form-signin-email > .submit_button > .button').click({ force: true });
    cy.wait(500);
    cy.get('.close > .icon-close').click({ force: true });
  }

  for (let lang of languagesAllright) {
     it(`AllRight Mob ${lang}`, () => {
      cy.viewport(390, 844);
      loginAllright();
      cy.wait(1000);
      cy.visit(`https://allrightcasino.com/${lang}`);
      const elementSelector = "[id^=slick-slide-control0]";
      cy.get(elementSelector).each(($element, index, $list) => {
        cy.get(`#slick-slide-control0${index}`).click({ force: true });
        cy.wait(1000);
        cy.screenshot(`AllRightMob/slide_${index + 1}_language_${lang}`, {
          capture: 'viewport',
        });
        cy.wait(1000);
        cy.get(`#slick-slide0${index} > .item > .overlay > .banner_content > .text > .desktop`)
          .invoke('text')
          .then((text) => {
            const paragraphCount = text.split('\n').filter(Boolean).length;
            if (paragraphCount < 3) {
              cy.fail(`Ошибка: Некорректное количество абзацов на ${lang} языке`);
            }
          });
      });
    });
  }
});

describe('LuckyBird', () => {
  function loginLuckyBird() {
    cy.visit(`https://luckybirdcasino.com`);
    cy.get(':nth-child(3) > .column > .button').click({ force: true });
    cy.get('#form-signin-email > .group-name-login').type("new_test_eur@gmail.com");
    cy.get('#form-signin-email > .group-name-password').type("new_test_eur@gmail.com");
    cy.wait(500);
    cy.get('#form-signin-email > .submit_button > .button').click({ force: true });
    cy.wait(500);
    cy.get('.header > .close > .icon-close').click({ force: true });
  }

  var languagesLuckyBird = ["ru", "en", "de", "es", "pl", "no", "fi", "pt", "tr"];

  for (let lang of languagesLuckyBird) {

    it(`LuckyBird Mob ${lang}`, () => {
      cy.viewport(390, 844);
      loginLuckyBird();
      cy.visit(`https://luckybirdcasino.com/${lang}`);
      const elementSelector = "[id^=slick-slide-control0]";
      cy.get(elementSelector).each(($element, index, $list) => {
        cy.get(`#slick-slide-control0${index}`).click({ force: true });
        cy.wait(1000);
        cy.screenshot(`LuckyBirdMob/slide_${index + 1}_language_${lang}`, {
          capture: 'viewport',
        });
        cy.wait(500);
        cy.get(`#slick-slide0${index} > .item > .overlay > .text > .desktop`)
          .invoke('text')
          .then((text) => {
            const paragraphCount = text.split('\n').filter(Boolean).length;
            if (paragraphCount < 3) {
              cy.fail(`Ошибка: Некорректное количество абзацев на ${lang} языке`);
            }
          });
      });
    });
  }
});

describe('Slottica', () => {

  function loginSlottica() {
    cy.visit(`https://slottica.com`);
    cy.get('.extend > .button').click({ force: true });
    cy.get('#signinform_email > .form > .group-name-login').type("new_test_eur@gmail.com");
    cy.get('#signinform_email > .form > .group-name-password').type("new_test_eur@gmail.com");
    cy.get('#signinform_email > .form > :nth-child(4) > .button').click({ force: true });
    cy.wait(500);
    cy.get('.close > .icon-close').click({ force: true });
  }

  var languagesSlottica = ["ru", "en", "de", "es", "pl", "pt", "fi", "no", "sv", "ja", "kk", "fr", "hi", "bn", "az", "tr"];
  
  for (let lang of languagesSlottica) {
    it(`Slottica Mob ${lang}`, () => {
      loginSlottica();
      cy.visit(`https://slottica.com/${lang}`);
      const swipeInterval = 2000;
      let expectedCount;
      let swipeCount = 1;

      cy.viewport(1920, 1080);
      cy.get("[id^=slick-slide-control0]").its("length").then((length) => {
        expectedCount = length;
      });

      cy.viewport(390, 844);

      cy.get(':nth-child(1) > .no_container').then(($element) => {
        cy.scrollTo('top');
        const startX = $element[0].getBoundingClientRect().left + 10;
        const startY = $element[0].getBoundingClientRect().top + 10;
        const endX = startX + 100;
        const endY = startY;

        for (let i = 0; i < Math.min(swipeCount, expectedCount); i++) {
          cy.scrollTo('top');
          cy.get($element).trigger('mousedown', { button: 0, clientX: startX, clientY: startY }, { force: true });
          cy.get($element).trigger('mousemove', { button: 0, clientX: endX, clientY: endY }, { force: true });
          cy.get($element).trigger('mouseup', { button: 0, clientX: endX, clientY: endY }, { force: true });

          cy.scrollTo('top');
          cy.wait(1000);
          cy.screenshot(`SlotticaMob/slide_${i + 1}_language_${lang}`, {
            capture: 'viewport',
          });

          swipeCount += 1;
        }
      });
    });
  }

});

describe('SlottyWay', () => {
  function loginSlottyWay() {
    cy.visit(`https://slottyway.com`);
    cy.get('.login > :nth-child(2) > .button').click({ force: true });
    cy.get('.group-name-login').type("new_test_eur@gmail.com");
    cy.get('.group-name-password').type("new_test_eur@gmail.com");
    cy.wait(500);
    cy.get(':nth-child(8) > .button').click({ force: true });
    cy.wait(500);
    cy.get('.close > .icon-close2').click({ force: true });
  }

  var languagesSlottyway = ["ru", "en", "de", "es", "pl", "pt", "fi", "no", "sv", "tr"];

  for (let lang of languagesSlottyway) {
    

    it(`SlottyWay Mob ${lang}`, () => {
      cy.viewport(390, 844);
      loginSlottyWay();
      cy.visit(`https://slottyway.com/${lang}`);

      cy.wait(500);

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
            /*
            if (paragraphCount > 7) {
              cy.log(`Ошибка: Некорректное количество абзацов на ${lang} языке`);
            }*/
          });

        var index = 0;

        for (let b = 0; b < filteredElements.length; b++) {
          cy.get(`#slick-slide-control2${index}, #slick-slide-control1${index}, #slick-slide-control0${index}`)
            .should('exist')
            .then(($el) => {
              console.log('Element found:', $el);
            })
            .click({ force: true })
            .then(() => {
              console.log('Click successful');
            });

            cy.wait(1000);
          cy.screenshot(`SlottyWayMob/slide_${index + 1}_language_${lang}`, {
            capture: 'viewport',
          });
          cy.wait(500);
          index = index + 1;
        }
      });
    });
  }
});

describe('Spinamba', () => {
  function loginSpinamba() {
    cy.visit(`https://spinamba.com`);
    cy.get('.row > .login > :nth-child(2) > .button').click({ force: true });
    cy.get('#form-signin-email > .group-name-login').type("new_test_eur@gmail.com");
    cy.get('#form-signin-email > .group-name-password').type("new_test_eur@gmail.com");
    cy.get('#form-signin-email > .submit_button > .button').click({ force: true });
    cy.wait(500);
    cy.get('.header > .close > .icon-close').click({ force: true });
  }

  const languagesSpinamba = ["ru", "en", "de", "es", "pl", "pt", "fi", "no", "sv", "tr"];

  for (let lang of languagesSpinamba) {

    it(`Spinamba Mob ${lang}`, () => {
      loginSpinamba();
      cy.viewport(390, 844);
        cy.visit(`https://spinamba.com/${lang}`);

        const elementSelectorSpinamba = "[id^=slick-slide-control]";
        cy.get(elementSelectorSpinamba).each(($element, index, $list) => {
          if (index > 0 && index < $list.length - 1) {
            cy.get(`#slick-slide-control2${index}, #slick-slide-control1${index}, #slick-slide-control0${index}`)
              .should('exist')
              .then(($el) => {
                console.log('Element found:', $el);
              })
              .click({ force: true });
              cy.wait(1000);
            cy.screenshot(`SpinambaMob/slide_${index + 1}_language_${lang}`, {
              capture: 'viewport',
            });
            cy.wait(500);
            cy.get(`[id$=${index}] > .item > .overlay > :nth-child(1) > .text > .desktop`)
              .invoke('text')
              .then((text) => {
                const paragraphCount = text.split('\n').filter(Boolean).length;
                if (paragraphCount < 2) {
                  cy.log(`Ошибка: Некорректное количество абзацев на ${lang} языке`);
                }
              });
          }
        });
    });
  }
});

describe('SpinBounty', () => {
  function loginSpinBounty() {
    cy.visit(`https://spinbounty.com`);
    cy.get('#sidebar-main > .actions > .primary').click({ force: true });
    cy.get('.group-name-login > .control-label').type("v.pupkin.eur@gmail.com");
    cy.get('.group-name-password > .control-label').type("JTFN3W9JM4");
    cy.get('.submit').click({ force: true });
    cy.wait(1000);
    cy.get('.action > .icon').click({ force: true });
  }

  var languagesSpinBounty = ["ru", "en", "pl", "de", "fr"];

  for (let lang of languagesSpinBounty) {

    it(`SpinBounty Mob ${lang}`, () => {
      cy.viewport(390, 844);
      loginSpinBounty();
    
        cy.visit(`https://spinbounty.com/${lang}`);

        cy.get('.item_banner > .game_info > .btn_block > .button').its("length").then((length) => {
          var expectedCount = length;

          const scrollDistance = 310; // Расстояние свайпа
          const captureInterval = 1000; // Интервал между скриншотами в миллисекундах
          let currentScrollLeft = 0;

          for (let swipeCount = 0; swipeCount < expectedCount; swipeCount++) {
            cy.get(`.ds-track:first`).scrollTo(currentScrollLeft, 0, { duration: 250 });
            cy.wait(captureInterval);
            cy.wait(1000);
            cy.screenshot(`SpinBountyMob/slide_swipe_${swipeCount + 1}_language_${lang}`, {
              capture: 'viewport',
            });
            currentScrollLeft += scrollDistance; // Обновляем currentScrollLeft с учетом scrollDistance
          }
        });
    });
  }
});

describe('SuperCat', () => {
  function loginSuperCat() {
    cy.visit(`https://supercatcasino67.com`);
    cy.get('.guest-header > .button-outlined').click({ force: true });
    cy.get(':nth-child(1) > .form-control').type("new_test_eur@gmail.com");
    cy.get(':nth-child(2) > .form-control').type("new_test_eur@gmail.com");
    cy.get('.sign-in-form > .button').click({ force: true });
    cy.wait(1000);
  }

  var languagesSuperCat = ["ru", "en", "de", "es", "pl", "pt", "fi", "no", "tr"];

  for (let lang of languagesSuperCat) {
    it(`SuperCat Mob ${lang}`, () => {
      loginSuperCat();
      cy.viewport(390, 844);
      cy.visit(`https://supercatcasino67.com/${lang}`);
      for (let v = 0; v <= 9; v++) {
        cy.get('.slick-next').each(($button, index) => {
          cy.wrap($button).click({ force: true });
          cy.wait(1000);
          cy.screenshot(`SuperCatMob/slide_${index + 1}_language_${lang}.png`, {
            capture: 'viewport',
          });
          cy.wait(1000);
          cy.get('[tabindex="-1"] > .slider-item > .slider-item__header')
            .invoke('text')
            .then((text) => {
              const paragraphCount = text.split('\n').filter(Boolean).length;
              if (paragraphCount < 3) {
                cy.log(`Ошибка: Некорректное количество абзацев на ${lang} языке`);
              }
            });

          cy.wait(500);
        });
      }
    });
  }
});

describe('Magic365', () => {
  function loginMagic365() {
    cy.visit(`https://magic365.com`);
    cy.get('#sidebar-main > .actions > .primary').click({ force: true });
    cy.get('.group-name-login > .control-label').type("v.pupkin.eur@gmail.com");
    cy.get('.group-name-password > .control-label').type("JTFN3W9JM4");
    cy.get('.submit').click({ force: true });
    cy.wait(1000);
    cy.get('.action > .icon').click({ force: true });
  }

  var languagesMagic365 = ["ru", "en", "pl"];

  for (let lang of languagesMagic365) {
    

    it(`Magic365 Mob ${lang}`, () => {
      loginMagic365();
      cy.viewport(390, 844);
      cy.visit(`https://magic365.com/${lang}`);
      
      cy.get('.item_banner > .game_info > .btn_block > .button').its("length").then((length) => {
        var expectedCount = length;

        const scrollDistance = 310; // Расстояние свайпа
        const captureInterval = 1000; // Интервал между скриншотами в миллисекундах
        let currentScrollLeft = 0;

        for (let swipeCount = 0; swipeCount < expectedCount; swipeCount++) {
          cy.get(`.ds-track:first`).scrollTo(currentScrollLeft, 0, { duration: 250 });
          cy.wait(captureInterval);
          cy.wait(1000);
          cy.screenshot(`Magic365Mob/slide_swipe_${swipeCount + 1}_language_${lang}`, {
            capture: 'viewport',
          });
          currentScrollLeft += scrollDistance; // Обновляем currentScrollLeft с учетом scrollDistance
        }
      });
    });
  }
});

describe('Viks', () => {
  function loginViks() {
    cy.visit(`https://viks.com/casino`);
    cy.get('.extend > .button').click({ force: true });
    cy.get('[data-tab="email"] > .label').click({ force: true });
    cy.get('#signinform_email > .form > .group-name-login').type("v.pupkin.eur@gmail.com");
    cy.get('#signinform_email > .form > .group-name-password').type("JTFN3W9JM4");
    cy.get('#signinform_email > .form > :nth-child(4) > .button').click({ force: true });
    cy.wait(1000);
    cy.go(-1);
  }

  var languagesViks = ["ru", "en", "uz"];

  for (let lang of languagesViks) {
     it(`Viks Mob ${lang}`, () => {
      cy.viewport(1920, 1080);
      loginViks();
      cy.visit(`https://viks.com/${lang}/casino`);
      cy.wait(500);

      const swipeInterval = 2000; // Інтервал між свайпами в мілісекундах
      let expectedCount; // Змінна для зберігання значення expectedCount
      let swipeCount = 1; // Початкова кількість свайпів
      cy.go(-1);

      cy.wait(1000);
      cy.get("[id^=slick-slide-control0]").its("length").then((length) => {
        expectedCount = length; // Присвоюємо значення expectedCount
      });

      cy.viewport(390, 844);
      cy.wait(500);

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
          cy.wait(500);
          cy.get($element).trigger('mousemove', { button: 0, clientX: endX, clientY: endY }, { force: true });
          cy.wait(500);
          cy.get($element).trigger('mouseup', { button: 0, clientX: endX, clientY: endY }, { force: true });

          cy.scrollTo('top');
          cy.wait(1000);
          cy.screenshot(`ViksMob/slide_${i + 1}_language_${lang}`, {
            capture: 'viewport',
          });

          cy.wait(500);

          swipeCount += 1; // Збільшуємо значення swipeCount для наступної ітерації
        }
      });

      cy.wait(500);
    });
  }
});

describe('Spinado', () => {
  function loginSpinado() {
    cy.visit(`https://spinado.com`);
    cy.get('.extend > .button').click({ force: true });
    cy.get('#signinform_email > .form > .group-name-login').type("testmodal@gmail.com");
    cy.get('#signinform_email > .form > .group-name-password').type("@gmail.comM123");
    cy.get('#signinform_email > .form > :nth-child(4) > .button').click({ force: true });
    cy.wait(1000);
    cy.get('.close > .icon-close').click({ force: true });
  }

  var languagesSpinado = ["ru", "en", "es", "pl", "pt", "kk"];

  for (let lang of languagesSpinado) {
    it(`Spinado Mob ${lang}`, () => {
      cy.visit(`https://spinado.com/${lang}`);
      cy.viewport(1920, 1080);
      loginSpinado();
      cy.wait(1000);
      cy.visit(`https://spinado.com/${lang}`);
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
          cy.get($element).trigger('mousedown', { button: 0, clientX: startX, clientY: startY }, { force: true });
          cy.wait(1000);
          cy.get($element).trigger('mousemove', { button: 0, clientX: endX, clientY: endY }, { force: true });
          cy.wait(1000);
          cy.get($element).trigger('mouseup', { button: 0, clientX: endX, clientY: endY }, { force: true });

          cy.scrollTo('top');
          cy.wait(1000);
          cy.screenshot(`SpinadoMob/slide_${i + 1}_language_${lang}`, {
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




