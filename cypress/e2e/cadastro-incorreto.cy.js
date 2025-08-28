describe('Página de Cadastro', () => {
  beforeEach(() =>{
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
  })

  it('Deve preencher os campos do formulário incorretamente e exibir mensagens de erro ao usuário', () => {
    cy.cadastroErro();
  })
})