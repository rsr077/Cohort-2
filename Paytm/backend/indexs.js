const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/rajeevDB')


const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const User = mongoose.model('User', userSchema) ;

const newUser = new User({name: 'john', age: 25});
return newUser .save();




