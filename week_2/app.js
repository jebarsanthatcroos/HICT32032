const express = require("express");
const mockData = require("./data");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello! My Node.js server is running!");
});

app.get("/api/users", (req, res) => {
    res.json(mockData);
});

app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = mockData.find((u) => u.id === id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
});

app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

module.exports = app;