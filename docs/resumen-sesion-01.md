# Resumen sesión 01 — Roadmap Vibe Coding (días 1-13)

**Fecha:** 2026-11-24

1. **Qué es vibe coding:** describes lo que quieres con tus palabras, la IA escribe el código y tú guías, pruebas y pides ajustes. Primera interfaz: botón que cambia el color de fondo y cuenta los clics (`introduccion`).
2. **Prompts específicos:** pasar de "crea una página de productos" a pedir detalles concretos (grid de 3 columnas, 6 productos).
3. **Restricciones negativas:** añadir una lista de "NO..." (no tablas para el layout, no CSS inline, no texto más claro que #666). Aplicado en la página de productos con `styles.css` externo (`lecciones`).
4. **Pensar paso a paso:** pedir a la IA que analice el problema, las opciones, la solución más simple y los casos borde antes de escribir código.
5. **Lecciones aprendidas:** guardar los errores que se repiten y pegarlos al inicio de cada prompt. Los puntos 3, 4 y 5 quedaron en una sola plantilla (`lecciones/lecciones-aprendidas.md`).
6. **Apps funcionales con JS vanilla:** app de notas que guarda en `localStorage`, con búsqueda y botón de eliminar (`prompting`).
7. **Diseño y accesibilidad:** pantalla de inicio de sesión con variables CSS, contraste comprobado (5.0:1 en el botón) y estilos visibles al enfocar con el teclado.
8. **Comparar IAs y dar contexto:** el mismo ejercicio (filtrar números pares y ordenarlos de mayor a menor) hecho con Claude, Gemini y OpenAI (`comparacion_ia`). Además, `CLAUDE.md` guarda las reglas del proyecto para que la IA las siga siempre.
