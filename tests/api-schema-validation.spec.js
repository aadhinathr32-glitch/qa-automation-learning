
const { test, expect } = require("@playwright/test");
const Ajv = require("ajv");

const ajv = new Ajv();

// JSON Schema for the JSONPlaceholder user response
const userSchema = {
  type: "object",
  properties: {
    id: { type: "integer" },
    name: { type: "string" },
    username: { type: "string" },
    email: { type: "string" },
    address: { type: "object" },
    phone: { type: "string" },
    website: { type: "string" },
    company: { type: "object" },
  },
  required: [
    "id",
    "name",
    "username",
    "email",
    "address",
    "phone",
    "website",
    "company",
  ],
  additionalProperties: false,
};

const validateUser = ajv.compile(userSchema);

test.describe("API JSON Schema Validation", () => {
  // Positive test: valid API response should pass
  test("GET user returns the expected properties and data types", async ({
    request,
  }) => {
    const response = await request.get(
      "https://jsonplaceholder.typicode.com/users/1"
    );

    expect(response.status()).toBe(200);

    const user = await response.json();

    const isValid = validateUser(user);

    expect(
      isValid,
      `Ajv validation failed: ${JSON.stringify(
        validateUser.errors,
        null,
        2
      )}`
    ).toBe(true);

    // Additional manual assertions
    expect(typeof user.id).toBe("number");
    expect(typeof user.name).toBe("string");
    expect(typeof user.username).toBe("string");
    expect(typeof user.email).toBe("string");
    expect(typeof user.address).toBe("object");
    expect(typeof user.phone).toBe("string");
    expect(typeof user.website).toBe("string");
    expect(typeof user.company).toBe("object");

    expect(user.name.trim().length).toBeGreaterThan(0);
    expect(user.username.trim().length).toBeGreaterThan(0);
    expect(user.email.trim().length).toBeGreaterThan(0);

    expect(user.address).not.toBeNull();
    expect(Array.isArray(user.address)).toBe(false);
    expect(user.company).not.toBeNull();
    expect(Array.isArray(user.company)).toBe(false);
  });

  // Negative test: invalid data should fail schema validation
  test("Ajv rejects a user with an invalid ID type", () => {
    const invalidUser = {
      id: "1", // Invalid: schema requires an integer
      name: "Leanne Graham",
      username: "Bret",
      email: "leanne@example.com",
      address: {},
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {},
    };

    const isValid = validateUser(invalidUser);

    expect(isValid).toBe(false);
    expect(validateUser.errors).not.toBeNull();
    expect(validateUser.errors.length).toBeGreaterThan(0);

    // Confirm the validation error identifies the ID field
    expect(
      validateUser.errors.some(
        (error) =>
          error.instancePath === "/id" && error.keyword === "type"
      )
    ).toBe(true);
  });
});
