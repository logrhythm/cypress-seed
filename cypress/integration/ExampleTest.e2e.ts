describe('My test', () => {
  beforeEach(() => {
    cy.visit('')
  })

  it('should perform a test', () => {

    // assert that the tagline contains the correct text
    cy
      .get('.tagline')
      .contains('The web has evolved. Finally, testing has too.')
  })
})
