

//Create a JavaScript function named extractSubArray that operates on an array of elements. The function should perform the following operations:


const animals = ["Dog", "Cat", "Elephant", "Giraffe", "Lion", "Tiger", "Zebra", "Kangaroo", "Panda", "Monkey"];

function extractSubArray (animals){
  let array = animals.slice(3,7);
   return array
}

console.log(extractSubArray(animals))