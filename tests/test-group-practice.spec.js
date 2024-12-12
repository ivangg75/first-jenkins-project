import { test } from "@playwright/test";

test.describe("Test Group", () => {
  // create beforeEach.
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
    await page.waitForTimeout(3000);
  });

  test("Test A", async ({ page }) => {
    // Empty test body
  });

  test("Test B", async ({ page }) => {
    // Empty test body
  });

  test("Test C", async ({ page }) => {
    // Empty test body
  });
});