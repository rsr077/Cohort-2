const  mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:Rajput%408252@cluster0.bgbly.mongodb.net/user_app")

 const User = mongoose.model('Users', { name: String, email:String,password:String });

const user  = new User({
  name: 'Rajeev Singh Rajput',
  email: 'tzirw@example.com',
  password: 'Rajput@123'
});

user.save();