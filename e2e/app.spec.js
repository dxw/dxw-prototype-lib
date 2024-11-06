// @ts-check
const { test, expect } = require('@playwright/test');

test('homepage loads', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Home – dxw Prototype Library");
  await expect(page.getByRole('heading', { name: "dxw Prototype Gallery" })).toBeVisible();
});
