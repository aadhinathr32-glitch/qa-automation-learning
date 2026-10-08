let users = [
    {
        username: "admin",
        role: "Administrator"
    },
    {
        username: "tester",
        role: "QA"
    },
    {
        username: "developer",
        role: "Developer"
    }
];

for (let user of users) {
    console.log(`${user.username} is a ${user.role}`);
}