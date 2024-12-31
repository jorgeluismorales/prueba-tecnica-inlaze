# 🚀Prueba tecnica para Inlaze🚀

## Instalación y ejecución

```bash
# Clonar proyecto
git clone https://github.com/jorgeluismorales/prueba-tecnica-inlaze.git

# Ingresar al proyecto clonado
cd prueba-tecnica-inlaze

# instalar las dependencias del proyecto
npm install

# Ingresamos el siguiente comando en la terminal para ejecutar nuestras suites de casos
npx cypress run

```

---

# Casos de Prueba: Login

## Caso 1
- **Descripción**: Verificar que el usuario pueda loguearse con el email y contraseña correctos.  
- **Precondiciones**: El usuario debe estar registrado.  
- **Datos de prueba**:  
  - Email: `juanperez@email.com`  
  - Contraseña: `H0la_mundo`  
- **Pasos**:  
  1. Navegar al formulario de login.  
  2. Completar los campos "Email" y "Contraseña" con los datos de prueba.  
  3. Hacer click en "Sign in".  
- **Resultado esperado**:  
  El sistema permite el acceso y muestra el nombre del usuario en la plataforma.

---

## Caso 2
- **Descripción**: Validar que el formulario de login no se envíe si los campos no están completos.  
- **Precondiciones**: Ninguna.  
- **Datos de prueba**: Ninguno.  
- **Pasos**:  
  1. Navegar al formulario de login.  
  2. Intentar enviar el formulario sin completar los campos.  
- **Resultado esperado**:  
  El botón "Sign in" esta deshabilitado y no permite loguearse.

---

## Caso 3
- **Descripción**: Comprobar que al ingresar se muestre el nombre del usuario.  
- **Precondiciones**: El usuario debe haber iniciado sesión previamente.  
- **Pasos**:  
  1. Iniciar sesión en la plataforma.  
- **Resultado esperado**:  
  El sistema muestra el nombre del usuario en el navbar de la página a la izquierda de la imagen de perfil.

---

## Caso 4
- **Descripción**: Verificar que la plataforma permita cerrar la sesión correctamente.  
- **Precondiciones**: El usuario debe haber iniciado sesión previamente.  
- **Pasos**:  
  1. Iniciar sesión en la plataforma.  
  2. Hacer click sobre la imagen de perfil.  
  3. Hacer click en la opción "Logout".  
- **Resultado esperado**:  
  El sistema cierra la sesión y redirige al usuario a la página de Login.

---


# Casos de Prueba: Registro de Usuario

## Caso 1
- **Descripción:** Verificar que se pueda registrar un usuario con nombre, email y contraseña válidos.
- **Precondiciones:** No debe existir un usuario con el mismo email en la base de datos.
- **Datos de Prueba:**
  - Nombre: "Juan Pérez"
  - Email: "juan.perez@email.com"
  - Contraseña: "H0la_mundo"
- **Pasos:**
  1. Navegar al formulario de registro.
  2. Completar los campos obligatorios con los datos de prueba.
  3. Confirmar la contraseña ingresándola nuevamente.
  4. Hacer click en "Sign up".
- **Resultado Esperado:** El sistema crea el usuario y redirige a la página de Login.

---

## Caso 2
- **Descripción:** Validar que el campo de nombre acepte mínimo 2 palabras.
- **Precondiciones:** Ninguna.
- **Datos de Prueba:**
  - Nombre: "Juan"
- **Pasos:**
  1. Navegar al formulario de registro.
  2. Completar el campo "Full name" con el valor "Juan".
  3. Completar los demás campos con datos válidos.
  4. Hacer click en "Sign up".
- **Resultado Esperado:** El botón "Sign up" está deshabilitado y no permite crear el usuario.

---

## Caso 3
- **Descripción:** Verificar que el email cumpla con el formato estándar y sea único en la base de datos.
- **Precondiciones:** Ninguna.
- **Datos de Prueba:**
  - Email: "juanperez@com"
- **Pasos:**
  1. Navegar al formulario de registro.
  2. Completar el campo "Email" con el valor "juanperez@com".
  3. Completar los demás campos con datos válidos.
  4. Intentar enviar el formulario.
- **Resultado Esperado:** El sistema muestra un mensaje de error indicando que el formato del email no es válido.

---

## Caso 4
- **Descripción:** Validar que la contraseña cumpla con los requisitos de longitud y caracteres.
- **Precondiciones:** Ninguna.
- **Datos de Prueba:**
  - Contraseña: "H0LA1"
- **Pasos:**
  1. Navegar al formulario de registro.
  2. Completar el campo "Password" con el valor "H0LA1".
  3. Confirmar la contraseña.
  4. Intentar enviar el formulario.
- **Resultado Esperado:** El sistema muestra un mensaje de error indicando que la contraseña no cumple con los requisitos.

---

## Caso 5
- **Descripción:** Comprobar que el formulario no se envíe si los campos obligatorios no están completos.
- **Precondiciones:** Ninguna.
- **Datos de Prueba:**
  - Email: "juan.perez@email.com"
- **Pasos:**
  1. Navegar al formulario de registro.
  2. Completar el campo "Email" con el valor "juan.perez@email.com".
  3. Intentar enviar el formulario.
- **Resultado Esperado:** El botón "Sign up" está deshabilitado y no permite crear el usuario.

---

## Caso 6
- **Descripción:** Verificar que el sistema informe si las contraseñas ingresadas no coinciden.
- **Precondiciones:** Ninguna.
- **Datos de Prueba:**
  - Contraseña: "H0la_mundo"
  - Confirmación: "H0la_mundo11"
- **Pasos:**
  1. Navegar al formulario de registro.
  2. Completar el campo "Password" con el valor "H0la_mundo".
  3. Completar el campo de confirmación con "H0la_mundo11".
- **Resultado Esperado:** El sistema muestra un mensaje de error indicando que las contraseñas no coinciden.
