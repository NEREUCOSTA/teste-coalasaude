
class Carrinho{
   

    clicarCarrinho(){
        cy.get('.title')
        cy.get('.shopping_cart_link').click()

    }    


} export default new Carrinho