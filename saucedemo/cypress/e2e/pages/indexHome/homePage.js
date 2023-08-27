// Validação da Página ao ser Logado com sucesso
class HomePage{

    validarHomePage(){
        cy.get('.app_logo').contains('Swag Labs') 
    }
}   export default new HomePage;