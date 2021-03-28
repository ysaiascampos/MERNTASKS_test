/// <reference types="cypress" />

describe('<Formularios />', () => {
    it('<Login /> - Verificar pantalla de inicio', () => {
        cy.visit('');

        //Probar el texto
        cy.contains('h1','Iniciar Sesión');
        cy.get('[data-cy=titulo]')
                .invoke('text')
                .should('equal','Iniciar Sesión');

        //revisar que el formulario exista
        cy.get('[data-cy=form-login]').should('exist');

        cy.get('[data-cy=email-input]').should('exist');
        cy.get('[data-cy=password-input]').should('exist');
        cy.get('[data-cy=btn-submit]')
                .should('exist')
                .should('have.value','Iniciar Sesión')
                .should('have.class', 'btn-primario')
                .and('have.class','btn');
        cy.get('[data-cy=nueva-cuenta]').should('exist')
            .should('have.prop', 'tagName')
            .should('eq', 'A');

        cy.get('[data-cy=nueva-cuenta]')
            .should('have.attr', 'href')
            .should('eq', '/nueva-cuenta');

        cy.visit('/nueva-cuenta');

    });

    it('<NuevaCuenta /> - Verificar el componente de nueva cuenta', () => {
        cy.get('[data-cy=titulo-cuenta]').should('exist').invoke('text').should('equal', 'Obtener una cuenta');
        cy.get('[data-cy=form-cuenta]').should('exist');

        cy.get('[data-cy=nombre-input]').should('exist');
        cy.get('[data-cy=email-input]').should('exist');
        cy.get('[data-cy=password-input]').should('exist').should('have.prop', 'type').should('equal','password');
        cy.get('[data-cy=confirmar-input]').should('exist').should('have.prop', 'type').should('equal','password');
        
        cy.get('[data-cy=submit-input]').should('exist').should('have.class','btn-primario')
        .should('have.value','Registrarme')
        .should('not.have.value','Crear nueva cuenta');
        
        cy.get('[data-cy=enlace-login]')
        .should('exist')
        .should('have.attr', 'href')
        .should('eq', '/');

        cy.visit('/');
    });
});