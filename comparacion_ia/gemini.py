def filtrar_y_ordenar_pares(numeros: list[int]) -> list[int]:
    """
    Filtra los números pares de una lista y los devuelve ordenados
    de mayor a menor.
    """
    # 1. Filtrar solo los números pares (aquellos cuyo residuo al dividir entre 2 es 0)
    pares = [num for num in numeros if num % 2 == 0]

    # 2. Ordenar la lista de pares de mayor a menor (reverse=True)
    pares_ordenados = sorted(pares, reverse=True)

    # 3. Devolver el resultado final
    return pares_ordenados


# Ejemplo de uso
if __name__ == "__main__":
    entrada = [10, 3, 25, 8, 4, 17, 42, 0, -6]
    resultado = filtrar_y_ordenar_pares(entrada)
    print(resultado)  # Salida: [42, 10, 8, 4, 0, -6]