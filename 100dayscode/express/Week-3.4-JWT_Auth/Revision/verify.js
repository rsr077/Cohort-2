const jwt = require("jsonwebtoken");
const jwtPassword  = "secret";


/*    const verifed = jwt.verify(token,jwtPassword);
   if(verifed) {
     return true
   }else {
    return false;
   }
 */
   
   function verifyJwt(token) {
   let ans = true;
   try {
    jwt.verify(token,jwtPassword);
   }catch(e) {
     asn = false;
   }
   return ans;
  }


const ans =  verifyJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhamVlfdfdkBnYW1pbC5jb20iLCJpYXQiOjE3NDQ4OTAwMzd9.sRpkn7480ffiWcQ4wIYsfh8_XD-gFOWbOfi_7ZonO5Q");
console.log(ans);