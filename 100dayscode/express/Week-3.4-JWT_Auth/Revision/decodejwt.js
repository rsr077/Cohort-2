const jwt = require("jsonwebtoken");

function decodeJwt(token) {
 const decode = jwt.decode(token);
 if(decode) {
  return true;
 }else {
  return false
 }
}

console.log(decodeJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhamVldkBnYW1pbC5jb20iLCJpYXQiOjE3NDQ4OTAwMzd9.sRpkn7480ffiWcQ4wIYsfh8_XD-gFOWbOfi_7ZonO5Q"))