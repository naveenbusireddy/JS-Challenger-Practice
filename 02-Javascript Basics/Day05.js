// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word
function charIncrement(str) {
  let strArray = str.split("");
  let nextArray = [];
  for (let i = 0; i < strArray.length; i++) {
    let nextChar = String.fromCharCode(strArray[i].charCodeAt() + 1);
    nextArray.push(nextChar);
  }
  return nextArray.join("");
  // Using Map function
  // let nextArray = strArray.map((ele) => {
  //     return String.fromCharCode(ele.charCodeAt()+1); })
  // return nextArray.join('');

  // Author's Code
  // const arr = [...str];
  // const correctedArray = arr.map(e => String.fromCharCode(e.charCodeAt()+1));
  // return correctedArray.join('');
}
console.log(charIncrement("bnchmf"));
console.log(charIncrement("bnChMf"));

// Creating Javascript objects two
// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object
function myFunction(a, b) {
  let newObj = new Object();
  console.log(newObj);
}
myFunction('a','b');
myFunction('c', 'd');