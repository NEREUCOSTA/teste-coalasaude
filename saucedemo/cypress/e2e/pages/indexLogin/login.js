
// Criado uma classe aonde inspecionamos o login da página

class LoginPage{

   preencherEmail(){
    cy.get('[data-test="username"]').type('standard_user')
   } 

   preencherSenha(){
    cy.get('[data-test="password"]').type('secret_sauce')
   }

   clicarLogin(){
    cy.get('[data-test="login-button"]').click()
   }



} export default new LoginPage;