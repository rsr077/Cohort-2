/* const express = require("express")

const app = express();

let numberofRequests = 0;

function calculateRequests(req,res,next) {
   numberofRequests ++;
   console.log(numberofRequests);
   next();
}

app.get("/", calculateRequests, function(req,res) {
   res.send("hello")
});

app.get("/health-checkup2", calculateRequests, function(req,res) {
    
}); 




app.listen(3000)
 */

/* const express = require('express');
const app = express();

let requestCount = 0;

app.use((req, res, next) => {
    requestCount++;
    console.log(`Total Requests: ${requestCount}`);
    next(); // Continue to the next middleware or route
});

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.listen(3000, () => console.log('Server running on port 3000'));
 */



  const express = require("express")
  const app = express();

  let numberofRequests = 0;

 app.use((req,res,next) => {
     numberofRequests ++
     console.log( "Toatal" +numberofRequests)
    
     next();
     })
    

  app.get("/",(req,res) => {
     res.send("hi there")
    

     

  })
    app.listen(3000, () => console.log("hi runing "))