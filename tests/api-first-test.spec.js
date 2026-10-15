
const { test, expect } = require("@playwright/test");

test.describe("First API Test", () => {
  test("GET user returns the expected response", async ({ request }) => {
    // Step 1: Send a GET request
    const response = await request.get(
      "https://jsonplaceholder.typicode.com/users/1"
    );

    // Step 2: Verify the HTTP status
    expect(response.status()).toBe(200);

    // Step 3: Read the response body as JSON
    const user = await response.json();

    // Step 4: Verify the user ID
    expect(user.id).toBe(1);

    // Step 5: Verify the user's name is not empty
    expect(user.name).toBeTruthy();
    expect(user.name.trim().length).toBeGreaterThan(0);
  });
});
