const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json());

const ALL_USERS = [
  { username: "rajeev@gmail.com", password: "123", name: "Rajeev" },
  { username: "raj@gmail.com", password: "1232422", name: "Raj" },
  { username: "muskan@gmail.com", password: "656443", name: "Muskan" },
];

// Improved function to return user instead of just true/false
function getUser(username, password) {
  return ALL_USERS.find(
    (user) => user.username === username && user.password === password
  );
}

app.post("/signin", function (req, res) {
  const { username, password } = req.body;

  const user = getUser(username, password);
  if (!user) {
    return res.status(403).json({ msg: "User doesn't exist in our database" });
  }

  const token = jwt.sign({ username: user.username }, jwtPassword);
  return res.json({ token, user });
});

// Start the server
  app.listen(3001)