const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Connect to database
connectDB();

// Routes
const carsRoute = require("./routes/cars");
const bookRoute = require("./routes/book");

const app = express();
app.use(bodyParser.json());

// Mount Routers
app.use("/cars", carsRoute);
app.use("/book", bookRoute);

try {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, console.log(`Server running on port ${PORT}`));
} catch (err) {
  console.log(err);
}
