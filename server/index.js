const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

const app = express();

//^ Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//^ Routes

app.use("/api/products", productRoute);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Database Connected!");
    app.listen(8080, () => {
      console.log("Server is running on port 8080");
    });
  })
  .catch((error) => {
    console.error("Database Connection Error:", error);
  });
