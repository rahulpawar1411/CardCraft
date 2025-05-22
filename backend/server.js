const dotenv = require("dotenv").config();;
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const cardRoutes = require("./routes/cardRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/cards", cardRoutes);

// Connect DB and Start Server
mongoose.connect("mongodb://127.0.0.1:27017/student_cards")
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.error("Connection error:", err));
