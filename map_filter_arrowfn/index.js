// map, filter, arrow fns

// given an array, give me back a new array in which every value is multipled by 2 
// [1,2,3,4,5,6,]
//[2,4,6,8,10,12]

const input = [1,2,3,4,5];

// solution 
const newArray =[];

for(let i =0; i< input.length; i++) {
  newArray.push(input[i] * 3);
}

console.log(newArray);