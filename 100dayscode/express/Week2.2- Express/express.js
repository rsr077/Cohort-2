const express  = require('express')
/* const bodyParser  = require("body-parser"); */
const app = express()
/* app.use(bodyParser.json()); */
app.use(express.json());

app.post('/', (req,res) =>{

   console.log(req.body);
   res.send('Hello World!')
})


app.listen(3000)