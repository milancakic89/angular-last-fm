

describe('Navigation', () => {
  it('Should contain Logo, two links and search bar', () => {

    cy.visit('/')
    cy.contains('Angular Last FM')
    cy.contains('Home');
    cy.contains('Albums');
    cy.get('input').should('contain', '');


  })
});