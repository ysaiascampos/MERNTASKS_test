/// <reference types="cypress" />

describe('<NuevaCuenta />', () => {
    it('<NuevaCuenta /> - Validacion, Alertas y crear nueva cuenta', () => {
        cy.visit('/nueva-cuenta');

        cy.get('[data-cy=submit-input]').click();
        cy.get('[data-cy=alerta]').should('exist')
            .invoke('text')
            .should('equal','Todos los campos son obligatorios');
        cy.get('[data-cy=alerta]').should('have.class', 'alerta-error');

        //llenado de formulario
        cy.get('[data-cy=nombre-input]').type('ysaias');
        cy.get('[data-cy=email-input]').type('correo3@correo.com');
        cy.get('[data-cy=password-input]').type('12345');
        cy.get('[data-cy=confirmar-input]').type('12345');

        cy.get('[data-cy=submit-input]').click();
        cy.get('[data-cy=alerta]').should('exist')
            .invoke('text')
            .should('equal','El password debe ser de al menos 6 caracteres');
        cy.get('[data-cy=alerta]').should('have.class', 'alerta-error');

        cy.get('[data-cy=password-input]').clear().type('123456');
        cy.get('[data-cy=confirmar-input]').clear().type('12345');
        cy.get('[data-cy=submit-input]').click();
        cy.get('[data-cy=alerta]').should('exist')
            .invoke('text')
            .should('equal','Los passwords no son iguales');
        cy.get('[data-cy=alerta]').should('have.class', 'alerta-error');

        cy.get('[data-cy=password-input]').clear().type('123456');
        cy.get('[data-cy=confirmar-input]').clear().type('123456');
        cy.get('[data-cy=submit-input]').click();

        cy.get('[data-cy=seleciona]').should('exist').invoke('text')
            .should('equal','Selecciona un proyecto');

        cy.get('[data-cy=cerrar-sesion]').click();

    });

    it('<NuevaCuenta /> - Revisar usuarios Duplicados', () => {
        cy.visit('/nueva-cuenta');

        cy.get('[data-cy=nombre-input]').type('ysaias');
        cy.get('[data-cy=email-input]').type('correo3@correo.com');
        cy.get('[data-cy=password-input]').type('123456');
        cy.get('[data-cy=confirmar-input]').type('123456');

        cy.get('[data-cy=submit-input]').click();
        cy.get('[data-cy=alerta]').should('exist')
            .invoke('text')
            .should('equal','El usuario ya existe');
        cy.get('[data-cy=alerta]').should('have.class', 'alerta-error');
    });
});