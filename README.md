# 🚀 Solo Vibe Coding — Roadmap 28 Días

> Repo personal donde documenté mi aprendizaje completo de Vibe Coding 
> en 28 días. Cada día tiene su práctica, sus notas y su commit.

![Roadmap](https://img.shields.io/badge/Roadmap-28%20Días-brightgreen)
![Status](https://img.shields.io/badge/Estado-Completado-success)
![Stack](https://img.shields.io/badge/Stack-Node.js%20%2B%20Express-blue)
![Author](https://img.shields.io/badge/Author-Fredy-orange)

---

## 📖 ¿Qué es Vibe Coding?

Vibe Coding es el estilo de desarrollo donde **tú diriges a la IA** 
(escribes la intención) y **la IA escribe el código**, pero tú revisas, 
validas y tomas las decisiones finales. No es "no saber programar", 
es programar de otra forma: en lugar de escribir sintaxis, escribes intención.

---

## 🗂️ Estructura del Repo
solo-vibe-coding/
├── CLAUDE.md ← Mi memoria externa para la IA
├── README.md ← Este archivo
├── docs/
│ ├── playbook-debugging.md ← Protocolo de debugging (Día 18)
│ ├── mcp-servers.md ← Futuro del debugging con IA (Día 19)
│ ├── prompts-buenos-vs-malos.md ← Comparativa de prompts (Día 14)
│ ├── refactor-dia17.md ← Lecciones de refactorización
│ ├── notas-errores-resueltos.md ← Errores con explicación simple
│ ├── roadmap-personal.md ← Mi plan post-roadmap (Día 27)
│ └── mvp-personal.md ← Mi proyecto personal (Día 28)
├── lecciones/
│ ├── index.html ← Primera práctica (Día 1)
│ ├── styles.css ← Estilos de la primera práctica
│ └── lecciones-aprendidas.md ← Registro de errores y fixes
├── practica-claude/
│ └── CLAUDE.md ← Primer documento de contexto
├── practica-refactor/
│ ├── server.js ← Servidor con logger de errores
│ ├── src/
│ │ ├── controllers/
│ │ │ └── usuarios.js ← Refactorizado (Día 17)
│ │ └── utils/
│ │ ├── validaciones.js ← Extraída de usuarios.js
│ │ ├── email.js ← Lógica de emails separada
│ │ └── debugger.js ← Módulo de debugging (Día 19)
│ └── usuarios-original.js ← Versión antes de refactor
├── mini-proyecto/
│ ├── server.js ← API REST de tareas (Día 21)
│ ├── CLAUDE.md ← Contexto del mini-proyecto
│ ├── README.md ← Documentación de la API
│ ├── src/
│ │ ├── controllers/
│ │ │ └── tareas.js ← CRUD de tareas
│ │ └── utils/
│ │ └── validaciones.js ← Validaciones reutilizables
│ ├── tests/
│ │ └── tareas.test.js ← Tests unitarios con Jest (Día 24)
│ └── docs/
│ ├── PRD.md ← Documento de requisitos
│ └── notas-errores-resueltos.md
├── prompting/
│ ├── index.html ← Práctica de prompting (Día 8-9)
│ └── Iniciar Sesión.html ← Login con mockup
└── comparacion_ia/ ← Comparativa de modelos (Día 5)


---

## 🏆 Lo que Construí

### 1. API REST de Tareas (mini-proyecto)
- **Stack:** Node.js + Express + Array en memoria
- **Endpoints:** POST, GET, PATCH, GET/:id
- **Tests:** 7 tests unitarios con Jest (todos pasando ✅)
- **Seguridad:** Variables de entorno con dotenv
- **Debugging:** Logger global de errores en `logs/error.log`

### 2. Sistema de Refactorización
- Tomé un archivo de 90+ líneas con 11 problemas intencionales
- Lo dividí en módulos (`controllers/`, `utils/`)
- Apliqué convenciones: `const/let`, camelCase, comentarios en español
- Documenté cada decisión en `docs/refactor-dia17.md`

### 3. Playbook de Debugging
- Protocolo de 6 pasos para errores con IA
- Notas de errores resueltos con analogías simples
- Módulo de debugging proactivo (`debugger.js`)

---

## 📚 Las 10 Reglas de Oro del Vibe Coder

1. **Tú eres el arquitecto**, la IA es tu equipo
2. **Planifica antes de codear** (PRD + MVP + Mockup)
3. **Un prompt = una tarea** (atomicidad)
4. **Da material**, no pidas que adivine
5. **Di qué NO hacer** (negative prompting)
6. **La IA no tiene memoria**, tú sí (CLAUDE.md)
7. **Revisa SIEMPRE el código**
8. **Commits atómicos**, mensajes claros
9. **Tests antes que confianza**
10. **Seguridad desde el día 1**

---

## 🛠️ Herramientas que Usé

| Herramienta | Uso |
|-------------|-----|
| **Devin** | Agente principal (tokens limitados) |
| **VS Code + Copilot** | Editor + agente de respaldo |
| **Windsurf** | Editor asistido alternativo |
| **Claude / GPT-4o / Gemini** | Modelos de IA |
| **Jest** | Testing unitario |
| **Thunder Client** | Testing de APIs |
| **Git + GitHub** | Versionado |

---

## 🎓 Roadmap de 28 Días — Resumen

| Semana | Días | Foco |
|--------|------|------|
| **1** | 1-7 | Fundamentos, mentalidad, herramientas |
| **2** | 8-14 | Prompting, contexto, subagentes |
| **3** | 15-21 | Estándares, debugging, refactorización |
| **4** | 22-28 | Git profesional, testing, seguridad, cierre |

---

## 🚀 Próximos Pasos

- [ ] Elegir track profesional (AI Engineer recomendado)
- [ ] Construir MVP personal real
- [ ] Aprender APIs de IA (OpenAI, Anthropic)
- [ ] RAG y vector databases
- [ ] Deploy a producción (Vercel/Railway)

---

## 📝 Notas Personales

Este repo no es solo código. Es el registro de **28 días de aprendizaje 
metódico**. Cada commit cuenta una historia. Cada archivo de docs 
guarda una lección. Si vuelvo a leer esto en 6 meses, voy a recordar 
exactamente por qué tomé cada decisión.

**Autor:** Fredy  
**Fecha de inicio:** 24/11/2026  
**Fecha de cierre:** 28/11/2026  
**Estado:** ✅ Roadmap completado

---

> *"No necesito escribir cada línea de código, pero sí necesito entender 
> lo que estoy construyendo, revisar lo que la IA me da, y tomar las 
> decisiones importantes."*
