// e2e/button-overflow.spec.js
import { test, expect } from "@playwright/test";

const VIEWPORTS = [
  { name: "small phone", width: 375, height: 812 },
  { name: "large phone", width: 430, height: 932 },
  { name: "tablet", width: 768, height: 1024 },
];

for (const viewport of VIEWPORTS) {
  test.describe(`buttons at ${viewport.name} (${viewport.width}px)`, () => {
    test.use({ viewport });

    test("REST button does not overflow its parent", async ({ page }) => {
      await page.goto("http://localhost:5173");

      const button = page.getByRole("link", { name: /try the rest playground/i });
      const parent = button.locator("..");

      const buttonBox = await button.boundingBox();
      const parentBox = await parent.boundingBox();

      expect(buttonBox.width).toBeLessThanOrEqual(parentBox.width);
      expect(buttonBox.x).toBeGreaterThanOrEqual(parentBox.x);
      expect(buttonBox.x + buttonBox.width).toBeLessThanOrEqual(
        parentBox.x + parentBox.width
      );
    });

    test("GraphQL button does not overflow its parent", async ({ page }) => {
      await page.goto("http://localhost:5173");

      const button = page.getByRole("link", { name: /try it live in altair/i });
      const parent = button.locator("..");

      const buttonBox = await button.boundingBox();
      const parentBox = await parent.boundingBox();

      expect(buttonBox.width).toBeLessThanOrEqual(parentBox.width);
      expect(buttonBox.x).toBeGreaterThanOrEqual(parentBox.x);
      expect(buttonBox.x + buttonBox.width).toBeLessThanOrEqual(
        parentBox.x + parentBox.width
      );
    });
  });
}