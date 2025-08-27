describe('Página de Cadastro', () => {
  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type('Kiz');
    cy.get('[data-test="input-email"]').type('kiz@testmail.com');
    cy.get('[data-test="input-password"]').type('Test123');
    cy.get('[data-test="input-confirm-password"]').type('Test123');
    cy.get('[data-test="submit-button"]').click();
  })
})