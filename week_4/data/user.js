const bcrypt = require("bcrypt");

const users = [
    {
        id: 1,
        username: "jebarsan",
        password: bcrypt.hashSync("Admin@123", 10),
        role: "admin"
    },
    {
        id: 2,
        username: "thatcroos",
        password: bcrypt.hashSync("User@123", 10),
        role: "user"
    }
];

module.exports = users;