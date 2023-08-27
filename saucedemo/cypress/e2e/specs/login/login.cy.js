
import login from '../../pages/indexLogin/login'

describe('acessar o site de compras saucedemo', () => {
  
   it('logar no site', () => {
      cy.visit('https://www.saucedemo.com');
      cy.clearCookies();
      login.preencherEmail()
      login.preencherSenha()
      login.clicarLogin()
   })
})