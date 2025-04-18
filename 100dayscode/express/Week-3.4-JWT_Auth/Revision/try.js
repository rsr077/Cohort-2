const jwt = require("jsonwebtoken");

const value = {
  name: "rajeev",
  pass : 34353434,
}

try {
  const decoded = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicmFqZWV2IiwicGFzcyI6MzQzNTM0MzQsImlhdCI6MTc0NDg4NzgzN30.C6UNebuSIn7pSo70SrmOTpTsrccBQKYpeDOiS52tj2c", "secret");
  console.log("User is verified:", decoded);
} catch (err) {
  console.log("Invalid token:", err.message);
}
