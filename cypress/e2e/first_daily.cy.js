describe('sho', () => {
    it('sds', () => {
      cy.intercept('https://slottica.com/ru', { statusCode: 200, body: 'Mocked response' })
      cy.visit('https://slottica.com/ru')
    })
  })