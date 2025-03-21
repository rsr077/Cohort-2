/* 
const dog = {
  name : "jack",
  leg:  2,
  speaks: "bohw bohw"

}

const cat = {
  name : "jack",
  leg:  2,
  speaks: "bohw bohw"

}

function printStr(animal) {
  console.log("animal"+ dog["name"] + " "+ dog["leg"]);
}
printStr(dog)
printStr(cat) */


// object 

/* class Animal {
   constructor (name, legCount, speaks){
    this.name = name;
    this.legCount = legCount;
    this.speaks = speaks;
   }

   speak() {
    console.log("hi there" +   this.speaks)
  }
   names () {
    console.log("Hi It's name" +this.name)
   }
}
 */



/* let dog = new Animal ("dog", 4,"bhow bhow");

let peacock = new Animal ("peacock", 4,"bhow bhow");

dog.speak();
dog.names(); */


const currenDate  = new Date();
console.log(currenDate.getDate());
console.log(currenDate.getFullYear());
console.log(currenDate.getMonth());