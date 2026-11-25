// email.js - Envío de emails

const nodemailer = require('nodemailer');

function enviarEmailBienvenida(email, nombre) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'miemail@gmail.com',
      pass: 'mipassword123'
    }
  });

  const mailOptions = {
    from: 'miemail@gmail.com',
    to: email,
    subject: 'Bienvenido',
    text: 'Hola ' + nombre + ', gracias por registrarte'
  };

  transporter.sendMail(mailOptions, function(error) {
    if (error) {
      console.log(error);
    }
  });
}

module.exports = { enviarEmailBienvenida };
