/* function log() {
  console.log("hello world")
}

function log2(){
  console.log("hello world2");
}

function all(fn) {
  fn();
}

all(log2) */

const initialArray  = [1,2,3]

function logThing(str) {
   console.log(str)
}

initialArray.forEach(logThing)

logThing(1)
logThing(2)
logThing(1)