# Corrección — Sesión 1

El archivo corre sin errores y la salida es la esperada. Buen trabajo con el tipado: usar `type Prioridad = "alta" | "media" | "baja"` y `Record<Prioridad, number>` es mejor que un `string` suelto.

## Lo que está bien

- Array de 5 casos con todos los campos pedidos.
- `contarPorPrioridad` y `listarPendientes` hacen lo que pide la consigna.
- `formatearCaso` es una arrow function y devuelve el formato del ejemplo.
- El `forEach` final imprime todos los casos formateados.
- Commit y push hechos en la rama `sesion-1`.

## A corregir

1. **Faltó inicializar el proyecto e instalar las dependencias.** El repositorio no tiene `package.json`, `tsconfig.json` ni `.gitignore`. Sin eso, quien clone el repo no puede correr el ejercicio con las mismas versiones. Los pasos son:

   ```bash
   npm init -y
   npm install -D typescript tsx @types/node
   npx tsc --init
   ```

   Después hay que crear un `.gitignore` con `node_modules` y commitear `package.json`, `package-lock.json`, `tsconfig.json` y `.gitignore`.

2. **Falta la indentación.** El contenido de los objetos, del `type` y de las funciones está pegado al margen izquierdo. Funciona igual, pero cuesta leerlo. Usar 2 espacios dentro de cada bloque.

## Detalles menores

- `caso.ejecutado === false` se puede escribir como `!caso.ejecutado`.
