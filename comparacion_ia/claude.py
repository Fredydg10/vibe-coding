def pares_ordenados_desc(numeros):
    """Recibe una lista de números y devuelve solo los pares, de mayor a menor."""

    # Paso 1: filtrar solo los números pares.
    # Un número es par si el residuo de dividirlo entre 2 es 0.
    pares = [n for n in numeros if n % 2 == 0]

    # Paso 2: ordenar de mayor a menor.
    # reverse=True invierte el orden ascendente por defecto.
    pares.sort(reverse=True)

    # Paso 3: devolver la lista resultante.
    return pares


# Ejemplo de uso
print(pares_ordenados_desc([5, 2, 8, 1, 4, 10, 7]))  # [10, 8, 4, 2]