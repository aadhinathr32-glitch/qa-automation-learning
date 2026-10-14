
const { test, expect } = require("@playwright/test");
const path = require("path");
const { pathToFileURL } = require("url");

// Shared setup: run before each test
test.beforeEach(async ({ page }) => {
  const filePath = path.resolve(__dirname, "practice-form.html");
  await page.goto(pathToFileURL(filePath).href);
});

// Test 1: Successful form submission
test("should submit the practice form", async ({ page }) => {
  // Verify the heading
  await expect(
    page.getByRole("heading", { name: "QA Practice Form" })
  ).toBeVisible();

  // Enter the first name
  await page.locator("#fname").fill("Alex");

  // Select India
  await page.locator("#country").selectOption("india");

  // Submit the form
  await page.locator("#submit").click();

  // Verify the success message
  await expect(page.locator("#result")).toHaveText(
    "Form submitted successfully"
  );
});

// Test 2: Incomplete form submission
test("should show an error when required fields are empty", async ({ page }) => {
  // Leave both fields empty and submit
  await page.locator("#submit").click();

  // Verify the validation message
  await expect(page.locator("#result")).toHaveText(
    "Please complete all fields"
  );
});
