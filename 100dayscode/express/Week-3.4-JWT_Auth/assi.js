const jwt = require("jsonwebtoken")

function decodeJwt(token){
 const decoded  =jwt.decode(token);
 if(decoded) {
  return true;
 }else {
  return false;
 }
}

console.log(decodeJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhamVldkBnYW1pbC5jb20iLCJpYXQiOjE3NDQ3MTg3ODV9.IdRJvYCL8kZDjkf322vVluUkTnhDDP2HsgBQ5CJAvQ0"))