const express = require("express");

const rootRouter = require("./user")
const accountRouter = require("./account")

const router = express.Router();

router.use("/user",rootRouter);
router.use("/account", accountRouter);


module.exports = router
