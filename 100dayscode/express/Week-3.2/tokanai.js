const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json());

// ... (your ALL_USERS array remains the same)
// ... (your userExists function remains the same)

app.post("/signin", function (req, res) {
  console.log("Signin request received:", req.body); // Debug log
  
  const { username, password } = req.body;
  if (!userExists(username, password)) {
    return res.status(403).json({ msg: "Invalid credentials" });
  }

  const token = jwt.sign({ username }, jwtPassword);
  console.log("Generated token:", token); // Debug log
  return res.json({ token });
});

app.get("/users", function (req, res) {
  console.log("Received auth header:", req.headers.authorization); // Debug log
  
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json({ msg: "Invalid authorization format" });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const filteredUsers = ALL_USERS.filter(user => user.username !== decoded.username);
    return res.json({ users: filteredUsers });
  } catch (err) {
    console.error("Token verification failed:", err); // Debug log
    return res.status(403).json({ msg: "Invalid token" });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));