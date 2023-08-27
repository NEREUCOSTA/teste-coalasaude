import homePage from '../../pages/indexHome/homePage';
import login from '../../pages/indexLogin/login'

describe('Home Page', () => {
   beforeEach(() => {
    cy.visit('/');
    login.preencherEmail()
    login.preencherSenha()
    login.clicarLogin()
       
   })
   it('Validar a Home Page', () => {
       homePage.validarHomePage()
   })
})

