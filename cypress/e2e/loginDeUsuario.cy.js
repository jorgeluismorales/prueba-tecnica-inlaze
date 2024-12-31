describe('Pruebas de Login de Usuario', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('Verificar que el usuario pueda loguearse con el email y contraseña correctos.', () => {
    cy.get('#email').type('juanperez@email.com');
    cy.get('#password').type('H0la_mundo');
    cy.get('button[type="submit"]').click();

    cy.contains(' Welcome to Lorem ').should('be.visible');
  });

  it('Validar que el formulario de login no se envíe si los campos no están completos.', () => {
    cy.get('#email').type('juanperez@email.com');
    cy.get('button[type="submit"]').should('be.disabled');
  });

  it('Comprobar que al ingresar se muestre el nombre del usuario.', () => {
    cy.get('#email').type('juanperez@email.com');
    cy.get('#password').type('H0la_mundo');
    cy.get('button[type="submit"]').click();

    cy.get('h2.font-bold').contains('Juan Perez');
  });

  it('Verificar que la plataforma permita cerrar la sesión correctamente.', () => {
    cy.get('#email').type('juanperez@email.com');
    cy.get('#password').type('H0la_mundo');
    cy.get('button[type="submit"]').click();
    cy.get('div.rounded-full img').should('be.visible').click();
    cy.contains('Logout').click();

    cy.contains('Sign in').should('be.visible');
  });
});
