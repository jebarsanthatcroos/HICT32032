require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const users = require("./data/user");
const verifyToken = require("./middleware/auth");

const app = express();

app.use(express.json());
app.use(express.static("public")); 

const PORT = process.env.PORT || 3000;
const SECRET_KEY = process.env.SECRET_KEY;

app.post("/login", async (req, res) => {

    if (!req.body.username || !req.body.password) {
        return res.status(400).json({
            message: "Username and password required"
        });
    }

    const { username, password } = req.body;

    const user = users.find(u => u.username === username);

    if (!user) {
        return res.status(401).json({
            message: "Invalid username or password"
        });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
        return res.status(401).json({
            message: "Invalid username or password"
        });
    }

    const token = jwt.sign(
        {
            id: user.id,
            username: user.username,
            role: user.role
        },
        SECRET_KEY,
        {
            expiresIn: "1h"
        }
    );

    res.json({
        message: "Login successful",
        token: token
    });

});

app.get('/dashboard', verifyToken, (req, res) => {

    res.json({
        message: `Welcome, ${req.user.username}!`,
        yourRole: req.user.role
    });

});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});