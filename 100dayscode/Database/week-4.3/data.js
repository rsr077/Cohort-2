// schema 

const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,

  purchasedCourses: [{
     type: mongoose.Schema.Types.ObjectId,
     ref: 'Course'
  }]
});

 const CourseSchema = new mongoose.Schema({
  title: String,
  price: 'Course'
 })

 // model 

 const User = mongoose.model('User', UserSchema);
 const Course = mongoose.model('Course', CourseSchema);

 // create 

 const UserSchema    = new mongoose.Schema({
  username : String,
  password: String
 });

 const User  = mongoose.model('User', UserSchema);

 // ^^^^^^^^^^^^^

 User.create({
  username: req.body.username,
  password: req.body.password 
 });

 
 //  Read 

 const UserSchema  = new mongoose.Schema({
   username : String,
   password: String,
 })

 const User  = mongoose.model('User', UserSchema);


 // ^^^^^^^^^^^^^^

 User.findById("1");
 User.findOne({
   username: "rajeev@gmail.com"
 })
 User.find({
  username: "rajeev@gmail.com"
 })

 User.updateOne (
  {"id" : "1"},
  {$push: {purchasedCourses: courseId}}
 )


 // Update 

 User.updateOne({
  id: "1"
 }, {
  password: "newPassword"
 })

 User.updateMany({}, {
  premium: true
 })


 // Delete 

 User.deleteMany({})

 User.deleteOne({
  username: "rajeev@gmail.com"
 })