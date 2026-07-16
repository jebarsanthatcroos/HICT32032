const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(__dirname, "./config.env") });

const app = require("./app");

<<<<<<< HEAD
const PORT = process.env.PORT || 4000;
=======
const PORT = process.env.PORT || 5000;
>>>>>>> 76e9bd0738bcbd5b764ef6512064dee02b0904be

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT} in ${process.env.NODE_ENV || "development"} mode`);
});