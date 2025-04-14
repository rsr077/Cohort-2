const express = require("express");

const app = express();

 const schools = [{
  
  name :"john",
  
  students:[{
    Present : false 
  }]

 }]

 app.get("/",function(req,res) {
     const johnSchool = schools[0].students;
    const numberOfStudents  = johnSchool.length;

    let nmberOfPresetStudent = 0;
     for(let i = 0; i< johnSchool; i++) {
      if(schools[0].students){
        nmberOfPresetStudent = nmberOfPresetStudent + 1
      }
     }
      const numberOfAbsetnStudent = numberOfStudents - nmberOfPresetStudent;
      res.send({
         numberOfStudents,
         nmberOfPresetStudent ,
         numberOfAbsetnStudent
      })

      app.post("/",function(req,res){
        const isStudents = req.body.isStudents;
         schools[0].students.push({
           students : isStudents
         })
         res.json({
           msg: "Done"
         })
      })
 })

 app.put("/", function(req,res) {
    for(let i = 0; schools[0].students.length; i++) {
       schools[0].students[i].Present = true;
    }
    res.json({})
 })

 app.delete("/", function(req,res){
  if(isThereAtleastOneAbsentStudent()) { 
    const newStudets = []
    for(let i = 0; i<schools[0].students.length; i++) {
       if(schools[0].students[i].Present) {
         newStudets.push({
           Present : true
         })
       }
    }
      schools[0].students = newStudets;
      res.json({
        msg: "Done"
      })
    } else {
       res.status(411).json({
         msg: "You have no bad students"
       })
    }
 })


 function isThereAtleastOneAbsentStudent() {
   let atleastOncePresetStudent = false;
   for(let i = 0; i<schools[0].students.length; i++) {
     if(!schools[0].students[i].Present){
      atleastOncePresetStudent = true;
     }
   }
   return atleastOncePresetStudent
 }
 app.listen(3000)