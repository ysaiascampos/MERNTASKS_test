/// <reference types="cypress" />

describe('<Administrados />', () => {
    it('<Login /> - Autenticación', () => {
        cy.visit('/');

        //Autenticar usuario
        cy.get('[data-cy=email-input]').clear().type('correo3@correo.com');
        cy.get('[data-cy=password-input]').clear().type('123456');
        cy.get('[data-cy=btn-submit]').click();

        
    });
    it('<NuevoProyecto /> - Validar Proyectos', () => {
        //validacion
        cy.get('[data-cy=boton-nuevo-proyecto]').click();
        cy.get('[data-cy=submit-nuevo-proyecto]').click();

        cy.get('[data-cy=alerta]').should('exist')
            .invoke('text')
            .should('equal','El nombre del Proyecto es obligatorio');
        cy.get('[data-cy=alerta]').should('have.class', 'mensaje error');

        
    });
    it('<NuevoProyecto /> - Creacion Proyectos', () => {
        //creacion
        cy.get('[data-cy=input-nuevo-proyecto]').type('tienda Virtual');
        cy.get('[data-cy=submit-nuevo-proyecto]').click();

        //Seleccionar el proyecto
        cy.get('[data-cy=listado-proyectos] li:nth-child(1) button').click();

        
    });

    it('<Tareas /> - Validacion y Creacion tareas', () => {
        //validacion 
        cy.get('[data-cy=submit-tarea]').click();

        cy.get('[data-cy=alerta]').should('exist')
            .invoke('text')
            .should('equal','El nombre de la tarea es obligatorio');
        cy.get('[data-cy=alerta]').should('have.class', 'mensaje error');

        //creacion
        cy.get('[data-cy=input-tarea]').type('Definir Diseño');
        cy.get('[data-cy=submit-tarea]').click();
    });
    it('<Tareas /> - Completar, Descompletar, editar y eliminar tareas', () => {
        //selecciona la primera tarea y la marca como completa
        cy.get('[data-cy=tarea]:nth-child(1) [data-cy=tarea-incompleta]').click();
        cy.get('[data-cy=tarea]:nth-child(1) [data-cy=tarea-completa]').should('have.class', 'completo');

        //selecciona la primera tarea y la marca como incompleta
        cy.get('[data-cy=tarea]:nth-child(1) [data-cy=tarea-completa]').click();
        cy.get('[data-cy=tarea]:nth-child(1) [data-cy=tarea-incompleta]').should('have.class', 'incompleto');

        //selecciona la primera tarea y editarlo
        cy.get('[data-cy=tarea]:nth-child(1) [data-cy=btn-editar]').click();

        cy.get('[data-cy=input-tarea]').clear().type('Definir logo');
        cy.get('[data-cy=submit-tarea]').click();

        //selecciona la primera tarea y editarlo
        cy.get('[data-cy=tarea]:nth-child(1) [data-cy=btn-eliminar]').click();
        cy.get('[data-cy=tarea]:nth-child(1)').invoke('text').should('not.equal','Definir logo');

        //eliminar proyecto
        cy.get('[data-cy=btn-eliminar-proyecto]').click();
    });
});