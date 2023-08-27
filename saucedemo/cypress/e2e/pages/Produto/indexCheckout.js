
class Checkout{

   validarCheckout(){
    //cy.get('[data-test="checkout"]').should('be.visible').click()
    cy.contains('Checkout').should('be.visible').click()
    //cy.contains('Checkout: Overview').should('be.visible')

   }

   preencherCheckout(){
    cy.get('[data-test="firstName"]').type('Nereu Costa')
    cy.get('[data-test="lastName"]').type('Nogueira')
    cy.get('[data-test="postalCode"]').type('71926500')
    cy.get('[data-test="continue"]').click()
   }

   confirmarPedido(){
    cy.get('.title').contains('Checkout: Overview').should('be.visible')
    cy.get('[data-test="finish"]').should('be.visible').click()
   
      
}

    pedidoComSucesso(){
        cy.get('.complete-header').contains('Thank you for your order!').should('be.visible')

    }

} export default new Checkout