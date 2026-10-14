
const { test, expect } = require("@playwright/test");
const path = require("path");
const { pathToFileURL } = require("url");

// Shared setup: run before each test
test.beforeEach(async ({ page }) => {
  const filePath = path.resolve(__dirname, "practice-form.html");
  await page.goto(pathToFileURL(filePath).href);
});

// Data sets for successful form submission
const validFormData = [
  {
    name: "Alex",
    country: "india",
    expectedMessage: "Form submitted successfully",
  },
  {
    name: "Maya",
    country: "usa",
    expectedMessage: "Form submitted successfully",
  },
  {
    name: "Sam",
    country: "uk",
    expectedMessage: "Form submitted successfully",
  },
];

// Test successful submission with different data
validFormData.forEach(({ name, country, expectedMessage }) => {
  test(`should submit the form for ${name} from ${country}`, async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "QA Practice Form" })
    ).toBeVisible();

    await page.locator("#fname").fill(name);
    await page.locator("#country").selectOption(country);
    await page.locator("#submit").click();

    await expect(page.locator("#result")).toHaveText(expectedMessage);
  });
});

// Test: all fields empty
test("should show an error when all fields are empty", async ({ page }) => {
  await page.locator("#submit").click();

  await expect(page.locator("#result")).toHaveText(
    "Please complete all fields"
  );
});

// Test: name missing
test("should show an error when the name is missing", async ({ page }) => {
  await page.locator("#country").selectOption("india");
  await page.locator("#submit").click();

  await expect(page.locator("#result")).toHaveText(
    "Please complete all fields"
  );
});

// Test: country missing
test("should show an error when the country is missing", async ({ page }) => {
  await page.locator("#fname").fill("Alex");
  await page.locator("#submit").click();

  await expect(page.locator("#result")).toHaveText(
    "Please complete all fields"
  );
});

// Test: enter text character by character
test("should enter the first name sequentially", async ({ page }) => {
  const nameInput = page.locator("#fname");

  await nameInput.pressSequentially("Alex");

  await expect(nameInput).toHaveValue("Alex");
});
