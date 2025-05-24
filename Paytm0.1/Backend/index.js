const express = require("express");
const cors = require('cors');
const rootRouter  = require("./routes/index");
const router = require("./routes/user");
const app = express();
app.use(cors());

app.use(express.json());
app.use("/api/v1/",rootRouter);


module.exports = router;


app.listen(3000)