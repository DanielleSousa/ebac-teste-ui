/// <reference types ="cypress" />

describe('Funcionalidade página de produto', () => {
    
    beforeEach(() => {
        cy.visit("http://lojaebac.ebaconline.art.br/produtos/")
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
        .last()
        .click()
        
    });
    it('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 1

        cy.get('[class="product-block grid"]')
        .last()
        .click()
        cy.get('.button-variable-item-L').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get(".input-text").clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)

        

    });
});