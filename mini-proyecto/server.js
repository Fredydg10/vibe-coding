// Cargar variables de entorno
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

console.log(`🚀 Servidor en modo ${NODE_ENV}`);

// server.js
const express = require('express');
const { crearTarea, listarTareas, completarTarea, obtenerTareaPorId } = require('./src/controllers/tareas');

const app = express();

// Middleware para leer JSON
app.use(express.json());

// Rutas
app.post('/api/tareas', crearTarea);
app.get('/api/tareas', listarTareas);
app.get('/api/tareas/:id', obtenerTareaPorId);
app.patch('/api/tareas/:id', completarTarea);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('✅ API de Tareas funcionando. Prueba los endpoints en /api/tareas');
});

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`\n🚀 Servidor corriendo en http://localhost:${PORT}`);
    console.log(`📝 Endpoints disponibles:`);
    console.log(`   POST   /api/tareas       → Crear tarea`);
    console.log(`   GET    /api/tareas       → Listar tareas`);
    console.log(`   GET    /api/tareas/:id   → Obtener tarea`);
    console.log(`   PATCH  /api/tareas/:id   → Completar tarea\n`);
  });
}

module.exports = app;