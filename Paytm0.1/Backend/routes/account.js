const express = require('express');
const { authMiddleware } = require('./Middleware');
const { User, Account } = require('../db');
const { default: mongoose } = require('mongoose');

const router = express.Router();

module.exports  = router;

router.get("/balance",authMiddleware,async(req, res) => {
  const account  = await Account.findOne({
    userId: req.userId 
  });

  res.json({
    balance: account.balance
  })
});


async function transfer(req) {
   const session = await mongoose.startSession();

   session.startTransaction();
   const {amount, to } = req.body;

   const account = await Account.findOne({userId: req.user}).session(session);

   if(!account || account.balance < amount) {
    await session.abortTransaction();
    console.log("Insufficient balance")
    return;
   }

   const toAccount = await Account.findOne({userId: to}).session(session)

   if(!toAccount){
     await session.abortTransaction();
      console.log("Invalid account")
      return;
   }

  // Perform the transfer 

  await Account.updateOne({userId: req.userId},{$inc: {balance: amount}}).session(session);

  await session.commitTransaction();
   console.log("done")
}

transfer({
    userId: "65ac44e10ab2ec750ca666a5",
    body: {
        to: "65ac44e40ab2ec750ca666aa",
        amount: 100
    }
})


module.exports = router;


