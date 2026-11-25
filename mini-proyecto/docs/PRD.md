# 📄 PRD — Sistema de Tareas

**Fecha:** 26/11/2026
**Estado:** 🟡 En progreso

## 🎯 Objetivo en 1 frase
Una API REST para crear, listar y completar tareas personales.

## 👤 Usuario objetivo
Yo mismo (uso personal para practicar).

## ✨ Funcionalidades del MVP (3 máximo)
- [ ] Crear una tarea con título y descripción
- [ ] Listar todas las tareas
- [ ] Marcar tarea como completada

## 🚫 NO incluye en el MVP
- [ ] Autenticación de usuarios
- [ ] Base de datos real (usamos array en memoria)
- [ ] Frontend visual (solo API con Postman/Thunder Client)

## 📋 Fases

### Fase 1 — MVP (hoy)
**Objetivo:** API funcional con 3 endpoints
**Funcionalidades:**
- [ ] POST /api/tareas → Crear tarea
- [ ] GET /api/tareas → Listar tareas
- [ ] PATCH /api/tareas/:id → Completar tarea
**Criterio de éxito:** Los 3 endpoints funcionan con Thunder Client

### Fase 2 — Mejoras (mañana)
**Objetivo:** Agregar validaciones y filtros
**Funcionalidades:**
- [ ] Validar que título no esté vacío
- [ ] Filtrar tareas por estado (completadas/pendientes)
- [ ] Eliminar tarea (DELETE)

### Fase 3 — Pulido (pasado mañana)
**Objetivo:** Documentación y tests
**Funcionalidades:**
- [ ] README con ejemplos de uso
- [ ] Tests básicos con Jest
- [ ] Manejo de errores global

## 🛠️ Stack tecnológico
- **Backend:** Node.js + Express
- **Base de datos:** Array en memoria (simulación)
- **Testing:** Thunder Client (manual)
- **Versionado:** Git + GitHub

## ⚠️ Riesgos identificados
- Riesgo: Olvidar validar inputs → Mitigación: Usar validaciones.js
- Riesgo: Código en un solo archivo → Mitigación: Dividir en módulos desde el inicio