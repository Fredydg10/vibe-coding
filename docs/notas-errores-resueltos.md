# 🐛 Notas de Errores Resueltos

## Error 1: MODULE_NOT_FOUND
**Fecha:** 25/11/2026
**Mensaje:** `Cannot find module 'nodemailer'`

### Explicación simple:
Node.js no encuentra el paquete porque no lo instalé con npm install.

### Analogía:
Es como intentar usar una herramienta que no compraste. Node dice "no tengo esto".

### Concepto violado:
Dependencias declaradas: todo lo que uses con require() debe estar en package.json.

### Cómo detectarlo yo solo:
1. ¿El paquete está en package.json?
2. ¿Ejecuté npm install?
3. ¿El nombre del require coincide?

### Solución aplicada:
`npm install nodemailer`

---

## Error 2: Cannot read properties of null
**Fecha:** 24/11/2026
**Mensaje:** `TypeError: Cannot read properties of null (reading 'find')`

### Explicación simple:
Intenté usar .find() en una variable que era null en vez de un array [].

### Analogía:
Es como intentar buscar un libro en una estantería que no existe. Primero necesitas la estantería (array), luego buscas el libro (.find()).

### Concepto violado:
Inicialización de variables: los arrays siempre deben empezar como [], nunca como null.

### Cómo detectarlo yo solo:
1. ¿La variable está inicializada como []?
2. ¿Alguien la sobrescribió con null?
3. ¿Hay un return que puede devolver null?

### Solución aplicada:
Cambiar `const usuarios = null` por `const usuarios = []`

---

## Error 3: [Tu tercer error]
[Completa con el mismo formato]