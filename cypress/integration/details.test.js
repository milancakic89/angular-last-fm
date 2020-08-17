describe('Details page ', () => {
  it('Should display albums of the rock star', () => {

    cy.visit('/albums/Cher')

    cy.contains('h1', 'Cher');
    cy.contains('Album List');

    cy.get('.album__info').should(($album) => {

      expect($album).to.not.equal(0)

    })

  })
});