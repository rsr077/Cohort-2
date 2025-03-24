const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const SECRET_KEY = "your_secret_key"; // Use a strong key in production

// Dummy user list
const users = [
  { id: 1, username: "admin" },
  { id: 2, username: "user1" },
  { id: 3, username: "user2" }
];

// Middleware to verify JWT
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Extract token

  if (!token) {
    return res.status(403).json({ error: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY); // Verify token
    req.user = decoded; // Attach user data to request
    next(); // Proceed to the next middleware
  } catch (err) {
    return res.status(403).json({ error: "Invalid or expired token." });
  }
};

// Protected Route - GET /users
app.get("/users", verifyToken, (req, res) => {
  res.json(users);
});

// Start the server
app.listen(3000, () => console.log("Server running on port 3000"));
