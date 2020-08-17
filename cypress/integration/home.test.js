

describe('Home page initialy', () => {
  it('Should display list of 9 rock artists', () => {

    cy.visit('/')
    cy.contains('Angular Last FM')
    cy.contains('Home');
    cy.contains('Albums');


  })
});


describe('Home page after scrolling to bottom', () => {
  it('Should display list of 18 rock artists', () => {

    cy.scrollTo(0, 1200),

      cy.get('.card__wrapper').should(($card) => {

        expect($card).to.have.length(18)

      })


  })
});

describe('After clicking on albums page link', () => {

  it('should visit the albums page', () => {

    cy.get('#albums').click(),

      cy.url().should('contain', 'albums')

  })
})

