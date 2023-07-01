// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('failAndScreenshot', (errorMessage, screenshotName) => {
  cy.log(errorMessage); // Log the custom failure message
  cy.screenshot(screenshotName); // Take a screenshot with the specified name
  throw new Error(errorMessage); // Fail the test with the custom error message
});

function getAllTextFromElement($element) {
  let text = '';

  function traverse(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      text += node.textContent.trim();
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const placeholder = node.getAttribute('placeholder');
      if (placeholder) {
        text += placeholder.trim();
      }
      for (let i = 0; i < node.childNodes.length; i++) {
        traverse(node.childNodes[i]);
      }
    }
  }

  traverse($element[0]);
  return text;
}


Cypress.Commands.add('findKey', (path, key) => {
  cy.get(path).each(($el) => {
      const textContent = getAllTextFromElement($el)
      if (textContent.includes(key)) {
        cy.failAndScreenshot(`В методі оплати присутній ключ ${key}`);
      } else {
        cy.log(textContent);
        cy.log("✅В методі оплати ключ відсутній✅");
      }

  });
});

Cypress.Commands.add('bypassCloudflare', () => {
  cy.setCookie('cf_clearance', 'token'); // Set the cf_clearance cookie with a value
  cy.setCookie('cf_chl_prog', 'a'); // Set the cf_chl_prog cookie with a value
});


Cypress.Commands.add('CheckLimits', (getDepositMethod, getDepositFormsIds, getRadiobuttonForm, SuperCat = false) => {

  let minValue = 0;
  let maxValue = 0;                   

  
  cy.get(getDepositMethod)
  .invoke('text')
  .then((amountText) => {
    const regex = /(\d{1,3}(?:,\d{3})*)(?:\s*-\s*(\d{1,3}(?:,\d{3})*))?/;
    const match = amountText.match(regex);

    




    if(SuperCat == true) {
      const regexx = /(\d+(?:\.\d+)?)/g;
      const numbers = amountText.match(regexx);
      
      if (numbers) {
        const extractedNumbers = numbers.map((match) => parseFloat(match));
        cy.log(extractedNumbers);
        minValue = extractedNumbers[0]
        maxValue =extractedNumbers[1]
        cy.log(`Min limit: ${minValue}`);
        cy.log(`Max limit: ${maxValue}`);
      } else {
        cy.log('No numbers found');
      }
  
    } else{
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
    }
    

    
    let staticValue = [];
    let customValue = 0;
    
    cy.get(getDepositFormsIds)
     .find(getRadiobuttonForm)
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

        if (staticValue[3] != undefined) {
          staticValue.pop()
        }

        cy.get(getDepositFormsIds)
        .find(`input[name="amount"], input[name="amnt"]`)
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
})