// when you have added helper code, uncomment the line below.
// import * as h from '../helpers'

describe('My test', () => {
  beforeEach(() => {
    cy.visit('')
  })

  it('should perform a test', () => {

    // assert that the tagline contains the correct text
    cy
      .get('.my-text')
      .contains('HELLO THERE, CYPRESS')
  })
})
