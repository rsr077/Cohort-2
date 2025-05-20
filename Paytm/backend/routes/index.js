const express = require('express');
const userRouter = require("./user");
const accountRouter = require("./account")
const router = express.Router();

router.use("/user",userRouter)
router.use("/account", userRouter)

module.exports = router;





/* const express = require("express");

const userRouter = require("./user")

const  router = express.Router();
router.use('/user',userRouter)

module.exports = router; */