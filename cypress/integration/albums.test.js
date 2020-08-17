describe('Albums page ', () => {
  it('Should display list of 9 top albums', () => {

    cy.visit('/albums'),

      cy.get('.card__wrapper').should(($card) => {

        expect($card).to.have.length(9)

      })


  })
});
describe('After clicking on home page link', () => {
  it('Should display list of 9 top albums', () => {


    cy.get('#home').click(),

      cy.url().should('eq', 'http://localhost:4200/')

  })
});