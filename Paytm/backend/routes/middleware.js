const { authMiddleware } = require("../../../100dayscode/Tailwind/paytm-main/backend/middleware");
const {JWT_SECRET} = require("../config");
const jwt = require("jsonwebtoken");

// drive authmiddleware 
//  authHeader - authorization 
// use if else statement authHeader and startWith(bareer) 
// token split 
// try and catch decode - jwt -req.userId 

 const authmiddleware = (req,res,next) => {
   const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWiths('Bearer')) {
      res.status(403).json({});
    }
    const token = authHeader.split(' ')[1];

    try {
      const decoded = jwt.verify(token, JWT_SECRET);
        req.userId = jwt.decode.userId;
        next();
    } catch(err) {
       return res.status(403).json({message: "error"})
    }
 }

 module.exports = {
  authMiddleware
 }