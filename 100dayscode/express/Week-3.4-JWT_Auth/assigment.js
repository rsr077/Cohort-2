const jwt = require("jsonwebtoken");
const jwtPassword = 'secret';
const zod  = require("zod");

const emailSchema = zod.string().email();
const  passwordSchema  = zod.string().min(6);


function signJwt(username, password) {
    
  const usernameResponse = emailSchema.safeParse(username);
  const passwordResponst = passwordSchema.safeParse(password);
  if(!usernameResponse.success || !passwordResponst.success){
      return null
  }

    const signnture = jwt.sign({
      username
    }, jwtPassword)
    return signnture;
}

const ans = signJwt("rajeev@gamil.com", "1444441")
console.log(ans)