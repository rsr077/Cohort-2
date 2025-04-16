/* function verifyJwt(token){
  const verifed  = jwt.verify(token, jwtPassword);
  if(verifed){
    return true;
  }
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

const ans  = verifyJwt("djfdsjfsd");

console.log(ans);