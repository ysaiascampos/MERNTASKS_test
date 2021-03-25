/// <reference types="cypress" />

describe('<Login />', () => {
    it('<Login /> - Verificar pantalla de inicio', () => {
        cy.visit('');

        //Probar el texto
        cy.contains('h1','Iniciar Sesión');
        cy.get('[data-cy=titulo]')
                .invoke('text')
                .should('equal','Iniciar Sesión');

        //revisar que el formulario exista
        cy.get('[data-cy=form-login]')
                .should('exist');
    });
    it('<Login /> - Verificar el formulario', () => {

    });
});