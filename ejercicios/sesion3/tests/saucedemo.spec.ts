import { test, expect } from '@playwright/test';

test('Compra completa en SauceDemo', async ({ page }) => {

  // ==========================================
  // LOGIN
  // ==========================================
  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');

  await page.getByRole('button', { name: 'Login' }).click();

  // Verificar lista de productos
  await expect(page.getByText('Products')).toBeVisible();

  // ==========================================
  // AGREGAR AL CARRITO
  // ==========================================
  await page
    .getByRole('button', { name: 'Add to cart' })
    .first()
    .click();

  // Verificar que el carrito muestra 1
  await expect(
    page.locator('.shopping_cart_badge')
  ).toHaveText('1');

  // ==========================================
  // ABRIR EL CARRITO
  // ==========================================
  await page.locator('.shopping_cart_link').click();

  // Verificar que existe un producto en el carrito
  await expect(
    page.locator('.cart_item')
  ).toHaveCount(1);

  // ==========================================
  // CHECKOUT
  // ==========================================
  await page.getByRole('button', { name: 'Checkout' }).click();

  await page.getByPlaceholder('First Name').fill('Emanuel');
  await page.getByPlaceholder('Last Name').fill('Lopez');
  await page.getByPlaceholder('Zip/Postal Code').fill('1000');

  await page.getByRole('button', { name: 'Continue' }).click();

  // ==========================================
  // RESUMEN (OVERVIEW)
  // ==========================================
  await expect(
    page.getByText('Checkout: Overview')
  ).toBeVisible();

  await expect(
    page.locator('.cart_item')
  ).toHaveCount(1);

  await page.getByRole('button', { name: 'Finish' }).click();

  // ==========================================
// CONFIRMACIÓN
// ==========================================
await expect(
  page.getByText('Thank you for your order!')
).toBeVisible();
});
