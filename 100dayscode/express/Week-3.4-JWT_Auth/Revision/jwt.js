const jwt = require("jsonwebtoken");

const value = {
  name: "rajeev",
  pass : 34353434,
}

 const token = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicmFqZWV2IiwicGFzcyI6MzQzNTM0MzQsImlhdCI6MTc0NDg4NzgzN30.C6UNebuSIn7pSo70SrmOTpTsrccBQKYpeDOiS52tj2c", "secret");
 console.log(token);