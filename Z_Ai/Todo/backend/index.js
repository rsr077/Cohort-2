const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

// Routes
const todoRoutes = require("./routes/todoRoutes");
app.use("/", todoRoutes);

// Start server
app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
