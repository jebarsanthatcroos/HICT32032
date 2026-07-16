const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(__dirname, "./config.env") });

const app = require("./app");

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT} in ${process.env.NODE_ENV || "development"} mode`);
});