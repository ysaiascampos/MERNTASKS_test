/// <reference types="cypress" />

describe('<Login />', () => {
    it('<Login /> - Validacion, Alertas y Autenticar Usuario', () => {
        cy.visit('/');
        cy.get('[data-cy=btn-submit]').click();
        cy.get('[data-cy=alerta]').should('exist')
            .invoke('text')
            .should('equal','Todos los campos son obligatorios');
        cy.get('[data-cy=alerta]').should('have.class', 'alerta-error');

        //probar con un usuario que no exista
        cy.get('[data-cy=email-input]').type('correo@correo.com');
        cy.get('[data-cy=password-input]').type('12345');
        cy.get('[data-cy=btn-submit]').click();

        cy.get('[data-cy=alerta]').should('exist')
            .invoke('text')
            .should('equal','El usuario no existe');
        cy.get('[data-cy=alerta]').should('have.class', 'alerta-error');

        //probar con un password que este mal
        cy.get('[data-cy=email-input]').clear().type('correo3@correo.com');
        cy.get('[data-cy=password-input]').clear().type('12');
        cy.get('[data-cy=btn-submit]').click();

        cy.get('[data-cy=alerta]').should('exist')
            .invoke('text')
            .should('equal','Password Incorrecto');
        cy.get('[data-cy=alerta]').should('have.class', 'alerta-error');

        //Autenticar usuario
        cy.get('[data-cy=email-input]').clear().type('correo3@correo.com');
        cy.get('[data-cy=password-input]').clear().type('123456');
        cy.get('[data-cy=btn-submit]').click();

        cy.get('[data-cy=seleciona]').should('exist').invoke('text')
            .should('equal','Selecciona un proyecto');

        cy.get('[data-cy=cerrar-sesion]').click();

    });
});