const express = require("express");
const jwt = require("jsonwebtoken");

const jwtPassword = "123456";
const app = express();

app.use(express.json());

const ALL_USERS = [
  {
    username: "rajeev@gmail.com",
    password: "123",
    name: "rajeev singh"
  },
  {
    username: "rohan@gmail.com",
    password: "12345",
    name: "Raman singh",
  },
  {
    username: "muskan@gmail.com",
    password: "1232324",
    name: "Muskan jain"
  },
];

// ✅ Use `find` for cleaner code
function userExists(username, password) {
  return ALL_USERS.find(user => user.username === username && user.password === password);
}

app.post("/signin", function (req, res) {
  const { username, password } = req.body;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesn't exist in our in-memory DB",
    });
  }

  const token = jwt.sign({ username }, jwtPassword, { expiresIn: "1h" });

  return res.json({ token });
});

app.get("/users", function (req, res) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json({ msg: "Invalid or missing token" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;

    // ✅ Return all users except the logged-in user
    const filteredUsers = ALL_USERS.filter(user => user.username !== username);

    return res.json(filteredUsers);

  } catch (err) {
    return res.status(403).json({ msg: "Invalid token" });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
