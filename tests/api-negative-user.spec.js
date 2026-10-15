
const { test, expect } = require("@playwright/test");

test.describe("Negative API Testing - Users", () => {
  test("GET request for a nonexistent user returns 404", async ({
    request,
  }) => {
    // Step 1: Request a nonexistent user
    const response = await request.get(
      "https://jsonplaceholder.typicode.com/users/9999"
    );

    // Step 2: Verify the HTTP status
    expect(response.status()).toBe(404);

    // Step 3: Parse the JSON response
    const user = await response.json();

    // Step 4: Verify that the response has no user data
    expect(user).toEqual({});
    expect(user.id).toBeUndefined();
    expect(user.name).toBeUndefined();
    expect(user.email).toBeUndefined();
  });
});
