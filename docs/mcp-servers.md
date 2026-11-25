# 🤖 MCP Servers — El Futuro del Debugging

## ¿Qué es MCP?
Model Context Protocol: permite a la IA interactuar con herramientas 
externas (navegadores, bases de datos, APIs, archivos).

## MCP Servers útiles para Vibe Coding:

### 1. Playwright (Automatización de navegador)
- La IA abre tu web, hace clic, toma screenshots
- Detecta errores visuales automáticamente
- [github.com/modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers)

### 2. Filesystem (Lectura/escritura de archivos)
- La IA lee tus logs en tiempo real
- Modifica archivos directamente
- Útil para debugging de producción

### 3. Database (Consultas a BD)
- La IA ejecuta queries para verificar datos
- Detecta inconsistencias en la BD
- Útil para debugging de backend

### 4. GitHub (Issues y PRs)
- La IA crea issues automáticamente cuando detecta bugs
- Revisa PRs y sugiere cambios
- Útil para trabajo en equipo

## Estado actual (Noviembre 2026):
- MCP está en crecimiento rápido
- Claude Desktop ya soporta algunos MCP servers
- Windsurf/Cursor están integrando soporte
- Playwright es el más maduro y útil para debugging visual

## Cómo empezar:
1. Instala Claude Desktop o usa Cursor con soporte MCP
2. Configura un MCP server (ej: Playwright)
3. Pide a la IA que use la herramienta: "Abre mi página y revisa si hay errores visuales"