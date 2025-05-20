
const mongoose = require("mongoose") 


mongoose.connect("mongodb://localhost:27017/paytm"); 

mongoose.UserSchama = ( {

  username:{
    type:String,
    trime:true,
   lowercae: true,
   unique: true,
   required: true,
   minLength: 3,
   maxLength: 30

  },
   password: {
    type:String,
    required: true,
    minLength: 6
   },
   firstName: {
    type:String,
    required: true,
    maxLength: 30,
    trim : true,
   },
     LastName: {
    type:String,
    required: true,
    maxLength: 30,
    trim : true,
   }
})

const User = mongoose.model('User',UserSchama) 

module.exports = {
  User
};