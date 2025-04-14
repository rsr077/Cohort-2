const z = require("zod")

// if this is an array of number with atleast 1 input , return true , else return false 

function valdationInput(obj) {
   const schema = z.object({
    userId: z.string().min(6),
     email: z.string().email(),
     password: z.string().min(8)
   })
   const response = schema.safeParse(obj);
   console.log(response);
}

valdationInput({
  userId: "rajeevff454",
  email: "rajeev@gamil.com",
  password: "343433244"
})