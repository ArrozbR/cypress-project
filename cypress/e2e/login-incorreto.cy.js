describe('Página de Login', () => {
  beforeEach(() =>{
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"]').click();
  })

  it('Deve preencher os campos de login incorretamente e exibir mensagens de erro ao usuário', () => {
    cy.get('[data-test="submit-button"]').click();
    cy.contains('É necessário informar um endereço de email').should('be.visible');
    cy.contains('Insira sua senha').should('be.visible');
  })
})