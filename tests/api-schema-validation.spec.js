
const { test, expect } = require("@playwright/test");

test.describe("API Response Schema Validation", () => {
  test("GET user returns the expected properties and data types", async ({
    request,
  }) => {
    // Step 1: Send a GET request
    const response = await request.get(
      "https://jsonplaceholder.typicode.com/users/1"
    );

    // Step 2: Validate the HTTP status
    expect(response.status()).toBe(200);

    // Step 3: Parse the response body
    const user = await response.json();

    // Step 4: Check that required properties exist
    expect(user).toHaveProperty("id");
    expect(user).toHaveProperty("name");
    expect(user).toHaveProperty("email");
    expect(user).toHaveProperty("address");

    // Step 5: Validate property data types
    expect(typeof user.id).toBe("number");
    expect(typeof user.name).toBe("string");
    expect(typeof user.email).toBe("string");
    expect(typeof user.address).toBe("object");

    // Step 6: Validate that name and email are non-empty
    expect(user.name.trim().length).toBeGreaterThan(0);
    expect(user.email.trim().length).toBeGreaterThan(0);

    // Step 7: Ensure address is a real, non-null object
    expect(user.address).not.toBeNull();
    expect(Array.isArray(user.address)).toBe(false);
  });
});
