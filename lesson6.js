
function calculateTotal(price, taxRate) {
    return price + price * taxRate;
}

function runTest(testName, actual, expected) {
    if (actual === expected) {
        console.log(`PASS: ${testName}`);
    } else {
        console.log(`FAIL: ${testName}`);
        console.log(`  Expected: ${expected}`);
        console.log(`  Actual:   ${actual}`);
    }
}

// Unit-style tests: test one function in isolation
console.log("=== Unit Testing ===");

runTest(
    "Calculate total with 20% tax",
    calculateTotal(100, 0.20),
    120
);

runTest(
    "Calculate total with 10% tax",
    calculateTotal(200, 0.10),
    220
);

// Deliberately incorrect expectation to demonstrate failure
runTest(
    "Incorrect expected total",
    calculateTotal(100, 0.20),
    130
);
