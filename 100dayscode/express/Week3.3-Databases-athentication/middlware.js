const express = require(express);

const app = express() 

app.get("/ride1",function(req,res){
   res.json({
    msg: "You have succesfully riden the rede 1"
   })
})

app.listen(3000)