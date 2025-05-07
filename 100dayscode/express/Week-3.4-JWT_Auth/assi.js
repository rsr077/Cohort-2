const jwt = require("jsonwebtoken")

function decodeJwt(token){
 const decoded  =jwt.decode(token);
 if(decoded) {
  return true;
 }else {
  return false;
 }
}

console.log(decodeJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicmFqZWV2NDY2NTQzQGdtYWlsLmNvbSIsIlBhc3N3b3JkIjoiUmFqZWV2QDg4MDkgIiwiaWF0IjoxNzQ2NTIwNTU1fQ.d1eRgVLmW5QTb0SGAOsd6yilCYwZqPAb_1BXPvi2J2Q"))