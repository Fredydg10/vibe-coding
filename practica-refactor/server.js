// server.js - Servidor Express con manejo de errores global

const express = require('express');
const fs = require('fs');
const path = require('path');
const { crearUsuario, listarUsuarios } = require('./src/controllers/usuarios');

const app = express();

// Middleware para leer JSON
app.use(express.json());

// ============================================
// 🐛 SISTEMA DE LOGGING DE ERRORES (Día 19)
// ============================================

// Asegurar que existe la carpeta logs/
const logsDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
  console.log('📁 Carpeta logs/ creada automáticamente');
}

const logFile = path.join(logsDir, 'error.log');

// Función para escribir en el log
function registrarError(tipo, error, contexto = '') {
  const timestamp = new Date().toISOString();
  const mensaje = `[${timestamp}] [${tipo}] ${contexto}\n${error.stack || error}\n${'='.repeat(80)}\n`;
  
  fs.appendFileSync(logFile, mensaje, 'utf8');
  console.error(`❌ [${tipo}] Error registrado en logs/error.log`);
}

// ============================================
// 🛡️ CAPTURADORES DE ERRORES GLOBALES
// ============================================

// 1. Errores no manejados (uncaught exceptions)
process.on('uncaughtException', (error) => {
  registrarError('UNCAUGHT_EXCEPTION', error, 'Error no capturado en el código síncrono');
  
  // Opcional: cerrar el servidor después de 5 segundos
  console.error('⚠️ El servidor se cerrará en 5 segundos...');
  setTimeout(() => process.exit(1), 5000);
});

// 2. Promesas rechazadas no manejadas (unhandled rejections)
process.on('unhandledRejection', (reason, promise) => {
  registrarError('UNHANDLED_REJECTION', reason, 'Promesa rechazada sin .catch()');
});

// 3. Señales de terminación (para cerrar limpiamente)
process.on('SIGTERM', () => {
  console.log('🛑 Señal SIGTERM recibida, cerrando servidor...');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('\n🛑 Ctrl+C detectado, cerrando servidor...');
  process.exit(0);
});

// ============================================
// 🚀 RUTAS DEL SERVIDOR
// ============================================

app.post('/api/usuarios', crearUsuario);
app.get('/api/usuarios', listarUsuarios);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('✅ Servidor funcionando. Prueba POST /api/usuarios');
});

// ============================================
// 🎯 INICIAR SERVIDOR
// ============================================

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`\n🚀 Servidor corriendo en http://localhost:${PORT}`);
  console.log(`📝 Logs de errores: ${logFile}`);
  console.log(`🧪 Prueba crear un usuario: POST /api/usuarios\n`);
});