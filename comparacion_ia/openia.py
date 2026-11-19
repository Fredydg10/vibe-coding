def filtrar_pares(numeros):
    # 1. Filtramos la lista para quedarnos solo con los números pares
    pares = [num for num in numeros if num % 2 == 0]

    # 2. Ordenamos los números pares de mayor a menor
    pares.sort(reverse=True)

    # 3. Devolvemos la lista ordenada
    return pares


# Ejemplo de uso
lista = [8, 3, 12, 7, 4, 15, 2, 10, 9]

# Llamamos a la función y guardamos el resultado
resultado = filtrar_pares(lista)

# Mostramos los números pares ordenados
print(resultado)