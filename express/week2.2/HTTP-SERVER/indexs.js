const express = require('express')
const app = express()

const port = 3000

app.use(express.json());  

app.post('/conversations', function(req,res) {
console.log(req.body);
res.send({
  msg: "2 + 2 = 4"
})
})



app.listen(port,() => {
   console.log(`Example app listening on port ${port}`)
})