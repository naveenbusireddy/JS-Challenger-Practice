// Simply return the given input
function myFunction(input) {
  return input;
}

console.log(myFunction(123)); //123
console.log(myFunction("hello")); //"123"

///////////////////////

// Find the maximum number of the array
function myFunctionMaxNum(array1) {
    let maxNumber = Math.max(...array1);
    return maxNumber;
}

console.log(myFunctionMaxNum([1,2,3]));    // 3
console.log(myFunctionMaxNum([10,1000,100]));  // 1000
console.log(myFunctionMaxNum([-10,-2,-11]));  // -2
