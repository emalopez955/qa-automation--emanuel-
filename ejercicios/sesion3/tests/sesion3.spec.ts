import { test, expect } from '@playwright/test';

/*
---------------------------------------------------
TEST 1
Navegar al sitio y verificar el título de la página
---------------------------------------------------
*/
test('Test 1 - Verificar título de TodoMVC', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');

  await expect(page).toHaveTitle('React • TodoMVC');
});

/*
---------------------------------------------------
TEST 2
Agregar una tarea nueva y verificar que aparece
---------------------------------------------------
*/
test('Test 2 - Agregar una tarea y verificar que aparece', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');

  const nuevaTarea = 'Estudiar Playwright';

  await page
    .getByPlaceholder('What needs to be done?')
    .fill(nuevaTarea);

  await page
    .getByPlaceholder('What needs to be done?')
    .press('Enter');

  await expect(page.getByText(nuevaTarea)).toBeVisible();
});

/*
---------------------------------------------------
TEST 3
Marcar una tarea como completada y verificar estado
---------------------------------------------------
*/
test('Test 3 - Completar una tarea y verificar estado', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');

  const tarea = 'Aprender QA Automation';

  await page
    .getByPlaceholder('What needs to be done?')
    .fill(tarea);

  await page
    .getByPlaceholder('What needs to be done?')
    .press('Enter');

  await page.locator('.toggle').first().check();

  await expect(page.locator('li').first()).toHaveClass(/completed/);
});