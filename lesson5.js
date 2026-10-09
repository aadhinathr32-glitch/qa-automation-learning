
function validateLogin(username, password) {
    if (username === 'Aadhi' && password === 'test123') {
        return 'PASS';
    }

    return 'FAIL';
}

const testCases = [
    {
        name: 'Valid credentials',
        username: 'Aadhi',
        password: 'test123',
        expected: 'PASS'
    },
    {
        name: 'Wrong password',
        username: 'Aadhi',
        password: 'wrong123',
        expected: 'FAIL'
    },
    {
        name: 'Empty username',
        username: '',
        password: 'test123',
        expected: 'FAIL'
    }
];

for (const testCase of testCases) {
    const actual = validateLogin(
        testCase.username,
        testCase.password
    );

    if (actual === testCase.expected) {
        console.log(`PASS: ${testCase.name}`);
    } else {
        console.log(`FAIL: ${testCase.name}`);
        console.log(`Expected: ${testCase.expected}`);
        console.log(`Actual: ${actual}`);
    }
}
