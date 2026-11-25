# 🐛 Playbook de Debugging con IA

## Paso 1: Capturar el error COMPLETO
No copies solo el mensaje. Copia TODO:
- El mensaje de error exacto
- El stack trace (líneas de código involucradas)
- Qué estabas haciendo cuando ocurrió
- Qué esperabas que pasara

## Paso 2: Contextualizar
Antes de pegar el error, dale contexto a la IA:
- Qué archivo estás editando
- Qué cambiaste recientemente
- Qué tecnología usas (versión específica)

## Paso 3: Primer prompt de debugging
"Este es el error que estoy viendo:
[pega error completo]

Contexto:
- Archivo: [nombre del archivo]
- Tecnología: [Node.js 18, React 18, etc.]
- Qué hice antes del error: [describe]

Analiza el error y propón la solución más probable.
Explica por qué ocurre y cómo fixearlo."

## Paso 4: Si la solución no funciona
"No funcionó. El error persiste (o cambió a este nuevo error):
[pega nuevo error si hay]

Dame una lista de 3-5 causas posibles ordenadas por probabilidad.
Para cada causa, propón cómo verificarla."

## Paso 5: Verificar cada causa
Prueba cada causa en orden de probabilidad.
Documenta cuál fue la correcta.

## Paso 6: Documentar la solución
Agrega a lecciones-aprendidas.md:
- El error original
- La causa real
- La solución aplicada
- Cómo evitarlo en el futuro