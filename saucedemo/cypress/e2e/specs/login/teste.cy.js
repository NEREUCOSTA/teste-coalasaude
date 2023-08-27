

describe('acessar o site', () => {
   beforeEach(() => {
       cy.visit('/');
   })
   it('test case description', () => {
       cy.contains('Swag Labs').should('be.visible')
   })
})