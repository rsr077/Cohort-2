
/* function sum(a,b){
return a + b;

}

console.log(sum(1,2)) */


/* 
function calArt(a,b ,fn) {
   return fn(a,b)
}

   function sum(a,b) {
    return a +b;
   }

    const value = calArt (1,2, sum) ;
    console.log(value) */

   /*  let num = [1,3,4,5,]

    for(let i = 0; i<=num; i++) {

    } */

/* 
     function findLargest(arr) {
      let max = arr[0];
      for(let i = 1; i<arr.length; i++){
        if(arr[i] > max) {
          max = arr[i];
        }


     }
      return max;
    }

    console.log(findLargest([10,23,24,345,234,])) */

/* 
    let nubers = [12,332,4234,]

    let maxNumber = nubers.reduce((max, num) => num > max ? num: max,nubers[0] )

    console.log(maxNumber); */


/*     let maxNumber = Math.max(10,25,98,42);
    console.log(maxNumber); */

/* 
    function countVowels(str) {
      const vowels = new Set(['a', 'e', 'i', 'o', 'u']); // Using a Set for fast lookup
      return str.toLowerCase().split('').filter(char => vowels.has(char)).length;
  }
  
  // Test cases
/*   console.log(countVowels("Hello World")); // 3 ('e', 'o', 'o')
  console.log(countVowels("JavaScript")); // 3 ('a', 'a', 'i')
  console.log(countVowels("AEIOUaeiou")); // 10
  console.log(countVowels("bcdfg")); // 0 */
/* 
  function isPalindrome(str) {
    // Convert to lowercase and remove non-alphanumeric characters
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Reverse the cleaned string and compare with the original cleaned string
    return cleanedStr === cleanedStr.split('').reverse().join(''); */
}

/* // Test cases
console.log(isPalindrome("Nan")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("Hello")); // false
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true (ignores spaces & punctuation)
console.log(isPalindrome("No lemon, no melon!")); // true
console.log(isPalindrome("12321")); // true
console.log(isPalindrome("12345")); // false
 */
  

function calculateTime(n) {
  const startTime = Date.now(); // Get start time in milliseconds

  // Calculate sum from 1 to n using the formula
  let sum = (n * (n + 1)) / 2;

  const endTime = Date.now(); // Get end time in milliseconds

  // Calculate elapsed time in seconds
  const timeTaken = (endTime - startTime) / 1000;
  
  return timeTaken;
}

// Running tests
console.log("Time taken for sum from 1 to 100:", calculateTime(100), "seconds");
console.log("Time taken for sum from 1 to 100000:", calculateTime(100000), "seconds");
console.log("Time taken for sum from 1 to 1000000000:", calculateTime(1000000000), "seconds");
