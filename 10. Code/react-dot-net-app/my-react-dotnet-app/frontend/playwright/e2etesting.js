const { test, expect } = require('@playwright/test');

test.describe('ExampleComponent E2E', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('should render ExampleComponent', async ({ page }) => {
    // Assumes ExampleComponent renders text containing "example"
    const exampleElements = await page.locator('text=/example/i').all();
    expect(exampleElements.length).toBeGreaterThan(0);
    for (const el of exampleElements) {
      await expect(el).toBeVisible();
    }
  });

  test('should not render ExampleComponent when hidden', async ({ page }) => {
    // This assumes you have a way to set the hidden prop, e.g., via a button or route
    // Example: await page.click('button#set-hidden');
    // For demonstration, we check that "example" is not present
    // Adjust selector as needed for your UI
    await page.goto('http://localhost:3000?hidden=true');
    const exampleElement = await page.locator('text=/example/i').first();
    await expect(exampleElement).toHaveCount(0);
  });

  test('should render with custom text', async ({ page }) => {
    // This assumes you can set custom text via query param or UI
    await page.goto('http://localhost:3000?text=Custom%20Example');
    await expect(page.locator('text=Custom Example')).toBeVisible();
  });
});