const jwt = require("JsonWebToken")

const value = {
   name: "rajeev",
   accountNumber: 245343343
}

const token = jwt.sign(value , "screat");
console.log(token);