describe('On Search song', () => {
  it('Should display list of matching tracks with links inside them', () => {

    cy.visit('/')

    cy.get('#search')

      .type('Believer'),

      cy.contains('Believer').should('have.attr', 'href')


  })
});