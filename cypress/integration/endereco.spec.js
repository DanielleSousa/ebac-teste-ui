/// <reference types ="cypress" />

import EnderecoPage from '..//support//page-objects/endereco.page'

describe('Funcionalidade Endereços- Faturamento e Entrega', () => {
beforeEach(() => {
    cy.visit('minha-conta')
    cy.fixture('perfil').then(dados =>{
        cy.login(dados.usuario, dados.senha)

    })
});
    it('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Danielle', 'Monique', 'EBACSUPERSHOP', 'Brasil', 'Afonso Guimarães', '2022', 'Campinas', 'São Paulo', '06435000', '987654321', 'dani_monique@ebac.com.br')
        cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')
    });
});