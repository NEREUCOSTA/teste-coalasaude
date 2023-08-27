import carrinho from '../../pages/Produto/indexCarrinho'
import produto from '../../pages/Produto/indexProduto'
import login from '../../pages/indexLogin/login'


describe('Comprar Produtos', () => {
   beforeEach(() => {
    cy.visit('/');
    login.preencherEmail()
    login.preencherSenha()
    login.clicarLogin()
   })
   it('adicionar produtos no carrinhbo', () => {
       produto.clicarAddCarrinho()
       carrinho.clicarCarrinho()
       carrinho.validarTelaCarrinho()
       
   })
})