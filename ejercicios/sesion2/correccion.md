# Corrección — Sesión 2

El archivo corre y la salida es la esperada. La parte asincrónica (`Promise` + `setTimeout` de 500ms y el `await` dentro de `main`) está bien resuelta.

## Lo que está bien

- La interface `CasoDeTest` tiene los cuatro campos pedidos.
- Array de 3 objetos tipados con la interface.
- `obtenerCasosDeTest()` devuelve `Promise<CasoDeTest[]>` y resuelve a los 500ms.
- `main()` es `async`, hace `await` y recorre con `forEach`.

## A corregir

1. **Hay un error de tipos: `Prioridad` no existe en este archivo.** La interface usa `prioridad: Prioridad`, pero ese tipo está definido en el archivo de la sesión 1, no acá. El chequeo de tipos falla con:

   ```
   casos-test.ts(4,12): error TS2304: Cannot find name 'Prioridad'.
   ```

   `npx tsx` no lo muestra porque ejecuta el código sin chequear tipos. Para verlo hay que correr `npx tsc --noEmit`. Se arregla de cualquiera de estas dos formas:

   ```ts
   // Opción A: como pide la consigna
   prioridad: string;

   // Opción B: definir el tipo en este archivo
   type Prioridad = "alta" | "media" | "baja";
   ```

## Detalles menores

- Falta la indentación en la interface y en el array (las funciones sí están indentadas).
- Se mezclan comillas dobles y simples. Elegir una y usarla en todo el archivo.
