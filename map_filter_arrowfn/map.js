
/* const numbers = [1,2,3,4];
const doubled = numbers.map(num=>num * 2)

console.log(doubled) */


// given an array, give me back a new array in which every value is multiplied by 2 

/* const input = [1,2,3,4,5];

const array = [];

for(let i =0; i < input.length; i++) {
  array.push(input[i] * 2)

}
console.log(array) */


// other soloutins 

const input = [1,2,3,4,5]

function transform(i) {
   return i * 2 ;
}

const ans = input.map(transform);
console.log(ans);