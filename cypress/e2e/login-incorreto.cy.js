describe('Página de Login', () => {
  beforeEach(() =>{
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"]').click();
  })

  it('Deve preencher os campos de login incorretamente e exibir mensagens de erro ao usuário', () => {
    cy.loginErro('kiz@testmail.com', 'Test123');
  })
})