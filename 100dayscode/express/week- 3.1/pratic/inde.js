/* const zod = require("zod")

function validateInput(arr) {
   const schema = zod.array(zod.number());

   const response  = schema.safeParse(arr);
   console.log(response);
}

validateInput(["1",2,3]) */


// if this is an array of number with atleast 1 input, return true, else return false 

 function validateInput(arr) {
  if(typeof arr == "object" && arr.length >= 1 && typeof arr[0] == "number"){
     console.log(arr)
  }
} 

validateInput(["1",2,3])