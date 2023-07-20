describe('sho', () => {
    it('sds', () => {
      cy.visit('https://slottica.com/ru', {
        failOnStatusCode: false
      })

      cy.get('.message').contains('Приносим')
    })
  })