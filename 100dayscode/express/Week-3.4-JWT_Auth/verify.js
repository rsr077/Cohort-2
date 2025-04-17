const jwt = require('jsonwebtoken');
const jwtPassword  = "secret"
/* function verifyJwt(token){
  const decoded  = jwt.verify(token, jwtPassword);
  if(verifed){
    return true;
  }else 
}

 */


function verifyJwt(token){
   let ans = true;
   try {
    jwt.verify(token, jwtPassword);
   }catch(e) {
     ans = false;
   }
   return ans;
}

const ans  = verifyJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicmFqZWV2IiwiYWNjb3VudE51bWJlciI6MjQ1MzQzMzQzLCJpYXQiOjE3NDQ3NjM5MzB9.8LTxrhu1bU_ET80jo-JlhmwfkW3UFd4oNCfqQEXFSIs");

console.log(ans);