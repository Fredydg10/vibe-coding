// src/controllers/tareas.js - Controlador CRUD de tareas

// Array en memoria para simular base de datos
const tareas = [];

// Contador autoincremental para IDs
let nextId = 1;

/**
 * crearTarea - Crea una nueva tarea
 * POST /api/tareas
 * Body: { titulo: string, descripcion: string }
 */
function crearTarea(req, res) {
  try {
    const { titulo, descripcion } = req.body;

    // Validación: título obligatorio
    if (!titulo || titulo.trim() === '') {
      return res.status(400).json({
        error: 'El título es obligatorio'
      });
    }

    // Crear objeto tarea
    const nuevaTarea = {
      id: nextId++,
      titulo: titulo.trim(),
      descripcion: descripcion ? descripcion.trim() : '',
      completada: false,
      fechaCreacion: new Date().toISOString()
    };

    // Agregar al array
    tareas.push(nuevaTarea);

    // Responder con la tarea creada
    res.status(201).json(nuevaTarea);

  } catch (error) {
    console.error('❌ Error en crearTarea:', error.message);
    res.status(500).json({
      error: 'Error interno del servidor'
    });
  }
}

/**
 * listarTareas - Devuelve todas las tareas
 * GET /api/tareas
 */
function listarTareas(req, res) {
  try {
    // Devolver copia del array para evitar mutaciones externas
    const todasLasTareas = [...tareas];

    res.status(200).json({
      total: todasLasTareas.length,
      tareas: todasLasTareas
    });

  } catch (error) {
    console.error('❌ Error en listarTareas:', error.message);
    res.status(500).json({
      error: 'Error interno del servidor'
    });
  }
}

/**
 * completarTarea - Marca una tarea como completada
 * PATCH /api/tareas/:id
 */
function completarTarea(req, res) {
  try {
    const id = parseInt(req.params.id, 10);

    // Validación: ID debe ser número válido
    if (isNaN(id)) {
      return res.status(400).json({
        error: 'El ID debe ser un número válido'
      });
    }

    // Buscar tarea por ID
    const tarea = tareas.find(t => t.id === id);

    // Validación: tarea debe existir
    if (!tarea) {
      return res.status(404).json({
        error: `Tarea con ID ${id} no encontrada`
      });
    }

    // Marcar como completada
    tarea.completada = true;

    res.status(200).json({
      mensaje: 'Tarea completada exitosamente',
      tarea
    });

  } catch (error) {
    console.error('❌ Error en completarTarea:', error.message);
    res.status(500).json({
      error: 'Error interno del servidor'
    });
  }
}

/**
 * obtenerTareaPorId - Devuelve una tarea por su ID
 * GET /api/tareas/:id
 */
function obtenerTareaPorId(req, res) {
  try {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
      return res.status(400).json({
        error: 'El ID debe ser un número válido'
      });
    }

    const tarea = tareas.find(t => t.id === id);

    if (!tarea) {
      return res.status(404).json({
        error: `Tarea con ID ${id} no encontrada`
      });
    }

    res.status(200).json(tarea);
  } catch (error) {
    console.error('❌ Error en obtenerTareaPorId:', error.message);
    res.status(500).json({
      error: 'Error interno del servidor'
    });
  }
}

// Exportar las funciones
module.exports = {
  crearTarea,
  listarTareas,
  completarTarea,
  obtenerTareaPorId
};