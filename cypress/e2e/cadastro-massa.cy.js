import { usuarios } from '../fixtures/usuarios.json'

describe('Página de Cadastro', () => {
    beforeEach(() =>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="register-button"]').click();
    })
    usuarios.forEach(usuario => {
        it('Deve preencher os campos do formulário para cadastrar um novo usuário', () => {
            cy.cadastroMassa(usuario.name, usuario.email, usuario.password);
        })
    })
})