# 📝 Sistema de Tareas - API REST

## Descripción
API simple para gestionar tareas personales. MVP con 3 endpoints.

## Stack
- Node.js + Express
- Array en memoria (simulación de BD)

## Endpoints

### GET /api/tareas/:id
Obtener una tarea por su ID.

### POST /api/tareas
Crear una nueva tarea.

**Body:**
```json
{
  "titulo": "Comprar leche",
  "descripcion": "Ir al supermercado"
}