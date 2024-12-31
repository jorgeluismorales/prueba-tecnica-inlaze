describe('Pruebas de Login de Usuario', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('El usuario debe poder loguearse con el email y la contraseña registrados.', () => {
    cy.get('#email').type('juanperez@email.com');
    cy.get('#password').type('H0la_mundo');
    cy.get('button[type="submit"]').click();

    cy.contains(' Welcome to Lorem ').should('be.visible');
  });

  it('El formulario de login no debe ser enviado hasta que todos los campos estén diligenciados.', () => {
    cy.get('#email').type('juanperez@email.com');
    cy.get('button[type="submit"]').should('be.disabled');
  });

  it('Al ingresar a la plataforma, debe mostrarse el nombre del usuario.', () => {
    cy.get('#email').type('juanperez@email.com');
    cy.get('#password').type('H0la_mundo');
    cy.get('button[type="submit"]').click();

    cy.get('h2.font-bold').contains('Juan Perez');
  });

  it('La plataforma debe permitir al usuario cerrar la sesión.', () => {
    cy.get('#email').type('juanperez@email.com');
    cy.get('#password').type('H0la_mundo');
    cy.get('button[type="submit"]').click();
    cy.get('div.rounded-full img').should('be.visible').click();
    cy.contains('Logout').click();

    cy.contains('Sign in').should('be.visible');
  });
});
