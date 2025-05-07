const jwt = require("JsonWebToken")

const value = {
   username: "rajeev466543@gmail.com",
   Password: "Rajeev@8809 "
}

const token = jwt.sign(value , "screat");
console.log(token);