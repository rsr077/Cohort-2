const express = require("express")

const app = express();

let numberOfRequest = 0;

function calculation(req,res,next) {
    numberOfRequest ++
    console.log(numberOfRequest);
    next();
}

app.get("/",calculation, function(req,res){

})

app.listen(3001)