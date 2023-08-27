import checkout from '../../pages/Produto/indexCheckout'
import sacola from '../../pages/Produto/indexCarrinho'
import produto from '../../pages/Produto/indexProduto'

describe('This is your test project title', () => {
   beforeEach(() => {
       cy.visit('/')
       cy.logar()
   })
   it('compra efetudada com sucesso', () => {
       produto.clicarAddCarrinho()
       sacola.clicarCarrinho()
       checkout.validarCheckout()
       checkout.preencherCheckout()
       checkout.validarCheckout()
       checkout.confirmarPedido()
       checkout.pedidoComSucesso()

    })
    it.only('comprar sem itens no carrinho', () => {
       sacola.clicarCarrinho()
       cy.contains('Remove').should('not.exist')
    });
})