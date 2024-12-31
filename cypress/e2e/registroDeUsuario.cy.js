const { faker } = require('@faker-js/faker');

describe('Pruebas de Registro de Usuario', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Verificar que se pueda registrar un usuario con nombre, email y contraseña válidos.', () => {
    cy.contains('a', ' Sign up ').click();
    cy.get('#full-name').type(`${faker.person.firstName()} ${faker.person.lastName()}`);
    cy.get('#email').type(faker.internet.email());
    cy.get('#password').type('H0la_mundo');
    cy.get('#confirm-password').type('H0la_mundo');
    cy.wait(2000)
    cy.get('button[type="submit"]').click({ force: true });

    cy.contains('Successful registration!').should('be.visible');
  });

  it('Validar que el campo de nombre acepte mínimo 2 palabras.', () => {
    cy.contains('a', ' Sign up ').click();
    cy.get('#full-name').type('Juan');
    cy.get('#email').type('juan@email.com');
    cy.get('#password').type('H0la_mundo');
    cy.get('#confirm-password').type('H0la_mundo');

    cy.contains('button', ' Sign up ').should('be.disabled')
  });

  it('Verificar que el email cumpla con el formato estándar y sea único en la base de datos.', () => {
    cy.contains('a', ' Sign up ').click();
    cy.get('#full-name').type('Juan Perez');
    cy.get('#email').type('juan');
    cy.get('#password').type('H0la_mundo');
    cy.get('#confirm-password').type('H0la_mundo');
    cy.wait(2000)
    cy.get('button[type="submit"]').click({ force: true });

    cy.contains('Successful registration!').should('not.be.visible');
  });

  it('Validar que la contraseña cumpla con los requisitos de longitud y caracteres.', () => {
    cy.contains('a', ' Sign up ').click();
    cy.get('#full-name').type('Juan Perez');
    cy.get('#email').type('juan@email.com');
    cy.get('#password').type('h0lA1');
    cy.get('#confirm-password').type('h0lA1');
    cy.wait(2000)
    cy.get('button[type="submit"]').click({ force: true });

    cy.contains('Successful registration!').should('not.be.visible');
  });

  it('Comprobar que el formulario no se envíe si los campos obligatorios no están completos.', () => {
    cy.contains('a', ' Sign up ').click();
    cy.get('#password').type('H0la_mundo');
    cy.get('#confirm-password').type('H0la_mundo');

    cy.contains('button', ' Sign up ').should('be.disabled')
  });

  it('Verificar que el sistema informe si las contraseñas ingresadas no coinciden.', () => {
    cy.contains('a', ' Sign up ').click();
    cy.get('#full-name').type('Juan Perez');
    cy.get('#email').type('juan@email.com');
    cy.get('#password').type('H0la_mundo');
    cy.get('#confirm-password').type('H0la_mundo1');

    cy.contains('span', ' Passwords do not match ').should('be.visible');
  });
});