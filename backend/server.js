const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cardRoutes = require("./routes/cardRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/cards", cardRoutes);

// Connect DB and Start Server
mongoose.connect("mongodb+srv://rpawar141199:xm7qbYvf8NkMoreK@cluster0cardcraft.ueg9v7c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0CardCraft")
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.error("Connection error:", err));
