/* const zod = require("zod")

function validateInput(arr) {

  const schema = zod.array(zod.number());

  const response = schema.safeParse(arr);
  console.log(response)
}

validateInput(["1",2,3]) */

 const zod = require("zod")

 function validateInput(obj) {
   const schema = zod.object({
     email: zod.string().email(),
     password: zod.string(). min(8)
   })


   const response = schema.safeParse(obj);
   console.log(response);
 }

 validateInput({
   email: "rajeev@gmail.com",
   password: "15642545456"
 });