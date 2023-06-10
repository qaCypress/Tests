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