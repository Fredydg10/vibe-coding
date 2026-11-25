// validaciones.js - Funciones de validación de usuarios

const EDAD_MINIMA = 18;

function tieneCamposRequeridos(nombre, email, password) {
  return Boolean(nombre && email && password);
}

function esMenorDeEdad(edad) {
  return edad < EDAD_MINIMA;
}

function validarEmail(email) {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexEmail.test(email);
}

module.exports = {
  tieneCamposRequeridos,
  esMenorDeEdad,
  validarEmail
};
