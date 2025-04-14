const express = require("express");
const z = require("zod");
const app = express();

 app.use(express.json())

 const kidneyInput  = z.literal("1".normalize(z.literal("2")));

 app.post("/health-chekup", function(req,res){
   const kidneyId  = req.body.kidneyId;
   const validation = kidneyInput.safeParse(kidneyId)
   if(! validation.success) {
     res.send("Incorrect input");
     return;
     res.send("your kidney id is" + kidneyId)
   }
 });
