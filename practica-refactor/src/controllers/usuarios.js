// usuarios.js - Controlador CRUD de usuarios

const bcrypt = require('bcrypt');
const { tieneCamposRequeridos, esMenorDeEdad } = require('../utils/validaciones');
const { enviarEmailBienvenida } = require('../utils/email');

const SALT_ROUNDS = 10;

// Array en memoria para simular base de datos
const usuarios = [];

function crearUsuario(req, res) {
  const {
    nombre, email, password, edad, telefono, direccion, ciudad,
    pais, codigoPostal, fechaNacimiento, genero, ocupacion
  } = req.body;

  if (!tieneCamposRequeridos(nombre, email, password)) {
    res.status(400).send('Faltan datos');
    return;
  }

  if (esMenorDeEdad(edad)) {
    res.status(400).send('Debes ser mayor de edad');
    return;
  }

  const existe = usuarios.find(usuario => usuario.email === email);
  if (existe) {
    res.status(409).send('El email ya está registrado');
    return;
  }

  const passwordHash = bcrypt.hashSync(password, SALT_ROUNDS);

  const nuevoUsuario = {
    id: usuarios.length + 1,
    nombre,
    email,
    password: passwordHash,
    edad,
    telefono,
    direccion,
    ciudad,
    pais,
    codigoPostal,
    fechaNacimiento,
    genero,
    ocupacion,
    fechaCreacion: new Date().toISOString(),
    activo: true
  };

  usuarios.push(nuevoUsuario);
  enviarEmailBienvenida(email, nombre);
  res.status(201).send(nuevoUsuario);
}

function eliminarUsuario(req, res) {
  const id = req.params.id;
  const index = usuarios.findIndex(usuario => usuario.id == id);

  if (index === -1) {
    res.status(404).send('Usuario no encontrado');
    return;
  }

  usuarios.splice(index, 1);
  res.status(200).send('Usuario eliminado');
}

function actualizarUsuario(req, res) {
  const id = req.params.id;
  const usuario = usuarios.find(usuarioActual => usuarioActual.id == id);

  if (!usuario) {
    res.status(404).send('Usuario no encontrado');
    return;
  }

  if (req.body.nombre) usuario.nombre = req.body.nombre;
  if (req.body.email) usuario.email = req.body.email;
  if (req.body.edad) usuario.edad = req.body.edad;

  res.status(200).send(usuario);
}

function listarUsuarios(req, res) {
  const resultado = [];

  for (let i = 0; i < usuarios.length; i++) {
    const usuario = usuarios[i];
    if (usuario.activo) {
      resultado.push({
        id: usuario.id,
        nombre: usuario.nombre,
        email: usuario.email,
        edad: usuario.edad
      });
    }
  }

  res.status(200).send(resultado);
}

module.exports = {
  crearUsuario,
  eliminarUsuario,
  actualizarUsuario,
  listarUsuarios
};
