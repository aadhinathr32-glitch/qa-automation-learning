
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

// Test one successful submission for each data set
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

// Negative test 1: both fields empty
test("should show an error when all fields are empty", async ({ page }) => {
  await page.locator("#submit").click();

  await expect(page.locator("#result")).toHaveText(
    "Please complete all fields"
  );
});

// Negative test 2: name is missing
test("should show an error when the name is missing", async ({ page }) => {
  // Leave the name empty and select India
  await page.locator("#country").selectOption("india");
  await page.locator("#submit").click();

  await expect(page.locator("#result")).toHaveText(
    "Please complete all fields"
  );
});

// Negative test 3: country is missing
test("should show an error when the country is missing", async ({ page }) => {
  // Enter a name but leave the country at its default empty option
  await page.locator("#fname").fill("Alex");
  await page.locator("#submit").click();

  await expect(page.locator("#result")).toHaveText(
    "Please complete all fields"
  );
});
