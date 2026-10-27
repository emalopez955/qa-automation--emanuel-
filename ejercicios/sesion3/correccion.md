# Corrección — Sesión 3: Playwright primer contacto

**Archivos corregidos:** `ejercicios/sesion3/tests/sesion3.spec.ts` y `ejercicios/sesion3/tests/saucedemo.spec.ts`

¡Muy buen trabajo con los tests! Están bien organizados, con comentarios por paso, y usan los locators recomendados (`getByPlaceholder`, `getByRole`, `getByText`). El punto a corregir es la instalación de Playwright.

## Verificación

- Tal como está en el repo, `npx playwright test` falla con `Cannot find module '@playwright/test'`.
- Después de instalar `@playwright/test`, los 4 tests pasan en verde.

## Detalle por punto

| # | Punto | Estado | Comentario |
|---|-------|--------|------------|
| 1–3 | Instalar Playwright | ❌ | Falta `@playwright/test` en el `package.json` y no hay `playwright.config.ts` (ver abajo). |
| 5 | Test 1: título con `toHaveTitle` | ✅ | |
| 6 | Test 2: agregar tarea | ✅ | Buen uso de una constante para el texto de la tarea. |
| 7 | Test 3: marcar tarea como completada | ✅ | Muy bien verificar el estado con la clase `completed`. |
| 8 | `saucedemo.spec.ts` con un único test | ✅ | |
| 9 | Login | ✅ | Verifica el título "Products", como sugería la consigna. |
| 10 | Agregar al carrito y verificar que el ícono muestra 1 | ✅ | Bien resuelto con el badge del carrito y `toHaveText('1')`. |
| 11 | Abrir el carrito | ✅ | Ver detalle menor abajo. |
| 12–13 | Checkout y resumen | ✅ | |
| 14 | Mensaje "Thank you for your order!" | ✅ | |

## A corregir

1. **Playwright no quedó instalado en el repo.** El `package.json` solo tiene `typescript`, así que al clonar el repo y correr `npx playwright test` el `import` de `@playwright/test` falla. Tampoco está el `playwright.config.ts`, por eso no existen los proyectos `chromium`, `firefox` y `webkit` (`--project=chromium` da error). Se arregla corriendo el instalador de la Parte 1 en la raíz del repo:

   ```
   npm init playwright@latest
   ```

   Con eso se crea la carpeta `tests/` en la raíz, que es donde la consigna pedía los specs.

## Detalles menores

- En los pasos 11 y 13 se verifica que haya **un** producto (`toHaveCount(1)`), pero no **cuál**. Como se agrega el primer producto de la lista, se puede comprobar su nombre: `await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();`
- La carpeta `test-results/` quedó commiteada. Conviene agregarla al `.gitignore` junto con `node_modules` (el instalador de Playwright lo hace solo).
