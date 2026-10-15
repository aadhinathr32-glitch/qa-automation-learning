
const { test, expect } = require("@playwright/test");
const path = require("path");
const { pathToFileURL } = require("url");

const formPath = path.resolve(__dirname, "practice-form.html");
const formUrl = pathToFileURL(formPath).href;

test.describe("Practice Form - DOM validation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(formUrl);
  });

  test("result element exists but is initially hidden", async ({ page }) => {
    const result = page.locator("#result");

    await expect(result).toBeAttached();
    await expect(result).toBeHidden();
    await expect(result).toHaveText("");
  });

  test("empty submission displays validation message", async ({ page }) => {
    const result = page.locator("#result");

    await page.getByRole("button", { name: "Submit" }).click();

    await expect(result).toBeVisible();
    await expect(result).toHaveText("Please complete all fields");
  });

  test("valid submission displays success message", async ({ page }) => {
    await page.locator("#fname").fill("Aadhi");
    await page.locator("#email").fill("aadhi@example.com");

    await page.getByRole("button", { name: "Submit" }).click();

    await expect(page.locator("#result")).toBeVisible();
    await expect(page.locator("#result"))
      .toHaveText("Form submitted successfully!");
  });
});

// Data-driven test cases
const invalidFormCases = [
  {
    name: "both fields are empty",
    firstName: "",
    email: "",
    expectedMessage: "Please complete all fields",
  },
  {
    name: "first name is missing",
    firstName: "",
    email: "aadhi@example.com",
    expectedMessage: "Please complete all fields",
  },
  {
    name: "email is missing",
    firstName: "Aadhi",
    email: "",
    expectedMessage: "Please complete all fields",
  },
];

// Generate one test for each data object
invalidFormCases.forEach(({ name, firstName, email, expectedMessage }) => {
  test(`Data-driven validation: ${name}`, async ({ page }) => {
    await page.goto(formUrl);

    await page.locator("#fname").fill(firstName);
    await page.locator("#email").fill(email);

    await page.getByRole("button", { name: "Submit" }).click();

    const result = page.locator("#result");

    await expect(result).toBeVisible();
    await expect(result).toHaveText(expectedMessage);
  });
});
