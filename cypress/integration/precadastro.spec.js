/// <reference types ="cypress" />
var faker = require ('faker');
const Faker = require('faker/lib');

describe('Funcionalidade Pré Cadastro', () => {
    
    beforeEach(() => {
        cy.visit("/minha-conta/")
    });
    afterEach(() => {
        cy.screenshot()
        
    });
    

    it('Deve completar o pré cadastro com sucesso para acessar o site da Loja EBAC', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('teste@teste01!')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.name.firstName())
        cy.get('#account_last_name').type(faker.name.lastName())
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso')
    });

    it.only('Deve completar o pré cadastro com sucesso usando comandos customizados', () => {
        let emailFaker2 = faker.internet.email()
        let senhaFaker2 =('teste@teste01!')
        let nameFaker2 = faker.name.firstName()
        let lastNameFaker2 = faker.name.lastName()
        cy.preCadastro (emailFaker2, senhaFaker2, nameFaker2, lastNameFaker2)

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso')
    });
});