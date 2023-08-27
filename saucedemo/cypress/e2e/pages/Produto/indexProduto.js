// classe responsável pela opçoes do carrinho

class ComprarProduto{

    clicarAddCarrinho(){
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        
        
        
    }





}   export default new ComprarProduto