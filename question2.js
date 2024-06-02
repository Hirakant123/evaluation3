//You are given an array of numbers. Your task is to write a function named calculateSum that calculates the sum of all the numbers in the array using the forEach method.

const numbers = [1, 2, 3, 4, 5];




function calculateSum (num){
    let sum=0;
    num.forEach((ele)=>{
       sum += ele
    })
    return sum
}

console.log(calculateSum(numbers))