// usuarios.js - Sistema de gestión de usuarios
// Creado: 24/11/2026

var express = require('express');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var nodemailer = require('nodemailer');
var moment = require('moment');
var lodash = require('lodash');

const SECRET_KEY = 'mi_secreto_123';
const SALT_ROUNDS = 10;

// Array en memoria para simular base de datos
var usuarios = [];

function crearUsuario(req, res) {
  var nombre = req.body.nombre;
  var email = req.body.email;
  var password = req.body.password;
  var edad = req.body.edad;
  var telefono = req.body.telefono;
  var direccion = req.body.direccion;
  var ciudad = req.body.ciudad;
  var pais = req.body.pais;
  var codigoPostal = req.body.codigoPostal;
  var fechaNacimiento = req.body.fechaNacimiento;
  var genero = req.body.genero;
  var ocupacion = req.body.ocupacion;
  
  if (!nombre || !email || !password) {
    res.status(400).send('Faltan datos');
    return;
  }
  
  if (edad < 18) {
    res.status(400).send('Debes ser mayor de edad');
    return;
  }
  
  var existe = usuarios.find(u => u.email === email);
  if (existe) {
    res.status(409).send('El email ya está registrado');
    return;
  }
  
  var hash = bcrypt.hashSync(password, SALT_ROUNDS);
  
  var nuevoUsuario = {
    id: usuarios.length + 1,
    nombre: nombre,
    email: email,
    password: hash,
    edad: edad,
    telefono: telefono,
    direccion: direccion,
    ciudad: ciudad,
    pais: pais,
    codigoPostal: codigoPostal,
    fechaNacimiento: fechaNacimiento,
    genero: genero,
    ocupacion: ocupacion,
    fechaCreacion: new Date().toISOString(),
    activo: true
  };
  
  usuarios.push(nuevoUsuario);
  
  // Enviar email de bienvenida
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'miemail@gmail.com',
      pass: 'mipassword123'
    }
  });
  
  var mailOptions = {
    from: 'miemail@gmail.com',
    to: email,
    subject: 'Bienvenido',
    text: 'Hola ' + nombre + ', gracias por registrarte'
  };
  
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    }
  });
  
  res.status(201).send(nuevoUsuario);
}

function eliminarUsuario(req, res) {
  var id = req.params.id;
  var index = usuarios.findIndex(u => u.id == id);
  
  if (index === -1) {
    res.status(404).send('Usuario no encontrado');
    return;
  }
  
  usuarios.splice(index, 1);
  res.status(200).send('Usuario eliminado');
}

function actualizarUsuario(req, res) {
  var id = req.params.id;
  var usuario = usuarios.find(u => u.id == id);
  
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
  var resultado = [];
  
  for (var i = 0; i < usuarios.length; i++) {
    var u = usuarios[i];
    if (u.activo) {
      resultado.push({
        id: u.id,
        nombre: u.nombre,
        email: u.email,
        edad: u.edad
      });
    }
  }
  
  res.status(200).send(resultado);
}

function validarEmail(email) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function hashPassword(password) {
  return bcrypt.hashSync(password, SALT_ROUNDS);
}

function enviarEmailBienvenida(email, nombre) {
  console.log('Enviando email a ' + email);
}

function formatearFecha(fecha) {
  return moment(fecha).format('DD/MM/YYYY');
}

function calcularEdad(fechaNacimiento) {
  var hoy = new Date();
  var nacimiento = new Date(fechaNacimiento);
  var edad = hoy.getFullYear() - nacimiento.getFullYear();
  return edad;
}

function limpiarDatos(usuario) {
  return lodash.trim(usuario.nombre);
}

function obtenerUsuarioPorEmail(email) {
  return usuarios.find(u => u.email === email);
}

function generarToken(usuario) {
  var payload = {
    id: usuario.id,
    email: usuario.email
  };
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
}

function verificarToken(req, res, next) {
  var token = req.headers['authorization'];
  
  if (!token) {
    res.status(401).send('No autorizado');
    return;
  }
  
  try {
    var decoded = jwt.verify(token, SECRET_KEY);
    req.usuario = decoded;
    next();
  } catch (error) {
    res.status(401).send('Token inválido');
  }
}

// Función para estadísticas (no se usa actualmente)
function obtenerEstadisticas() {
  var total = usuarios.length;
  var activos = usuarios.filter(u => u.activo).length;
  var inactivos = total - activos;
  
  return {
    total: total,
    activos: activos,
    inactivos: inactivos,
    porcentajeActivos: (activos / total * 100).toFixed(2)
  };
}

// Función para exportar a CSV (no se usa actualmente)
function exportarCSV() {
  var csv = 'id,nombre,email,edad\n';
  
  usuarios.forEach(function(u) {
    csv += u.id + ',' + u.nombre + ',' + u.email + ',' + u.edad + '\n';
  });
  
  return csv;
}

module.exports = {
  crearUsuario: crearUsuario,
  eliminarUsuario: eliminarUsuario,
  actualizarUsuario: actualizarUsuario,
  listarUsuarios: listarUsuarios
};