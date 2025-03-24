const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());



const SECRET_KEY = "your_secret_key"; // Use a strong secret key in production

// Dummy user for authentication (replace with database validation)
const user = {
  username: "admin",
  password: "password123", // In real apps, store hashed passwords
};

// POST /signin - Authenticate and return a JWT token
app.post("/signin", (req, res) => {
  const { username, password } = req.body;

  if (username === user.username && password === user.password) {
    // Generate JWT token with encrypted username
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });

    return res.json({ token });
  } else {
    return res.status(401).json({ error: "Invalid credentials" });
  }
  
});


app.listen(3000, () => console.log("Server running on port 3000"));
