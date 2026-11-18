let str = "123";
let result = Number(str) + 7;

console.log(result);

///////

function checkValue(value) {
  if (!value) {
    return "Invalid";
  }
  return value; 
}

console.log(checkValue("")); 

///////////////////////////////////

let theResult = [];
for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
       continue;
    }
    theResult.push(i);
}
    console.log(theResult);
///////////////////////////////////

let myArray = [1, 2, 3, 4, 5];
let evenNumbers = myArray.filter(function(num) {
    return num % 2 === 0;
});
console.log(evenNumbers);
///////////////////////////////////

 function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let mergedArray = mergeArrays(array1, array2);
console.log(mergedArray);

///////////////////////////////////

function getDayOfWeek(dayNumber) {
    switch(dayNumber) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            return "Invalid day number";
    }
}

console.log(getDayOfWeek(3)); 
console.log(getDayOfWeek(8));

///////////////////////////////////

const strings = ["Alaa", "Emy", "cherry"];

function getStringLengths(arr) {
    return arr.map(str => str.length);
}

console.log(getStringLengths(strings));

///////////////////////////////////

function checkDivisibility(num) {
    if (num % 3 ===0 && num %  5 === 0) { 
        return "Divisible by both 3 and 5";
    }else {
        return "Not divisible by both 3 and 5";
    }
}

console.log(checkDivisibility(15)); 
console.log(checkDivisibility(10)); 
console.log(checkDivisibility(7));

///////////////////////////////////

let squreNumbers = (num) => num * num;
console.log(squreNumbers(5));
console.log(squreNumbers(10));

///////////////////////////////////
//'John is 25 years old'
const person = {name: 'John', age: 25}
function getPersonInfo(obj) {
    return `${obj.name} is ${obj.age} years old`;
}

console.log(getPersonInfo(person));

///////////////////////////////////

function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumArray([1, 2, 3, 4, 5])); 
console.log(sumArray([10, 20, 30]));

///////////////////////////////////

function delayedSuccess() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Success after 2 seconds");
        }, 2000);
    });
}

delayedSuccess().then(message => console.log(message)); 


////////////////////////////////////

function findLargestNumber(arr) {
    if (arr.length === 0) {
        return null;
    }
    return Math.max(...arr);
}

console.log(findLargestNumber([1, 5, 3, 9, 2])); 
console.log(findLargestNumber([]));

/////////////////////////////////////



const sampleObject = {name: "John", age: 30};

function getObjectKeys(obj) {
    let keys = [];
    for ( let key in obj) {
        keys.push(key);
    }
    return keys;
}
console.log(getObjectKeys(sampleObject));
//////////////////////////////////////
function spilteString(str) {

    return str.split(" ");
}

console.log(spilteString("The quick brown fox"));


//// ////////////////////////// essay 

// 1. Difference between forEach and for...of 
// Both are used to iterate over arrays but they work differently

// 1. forEach()
// - Executes a callback function for each array element
// - Cannot use break or continue
// - Cannot use await normally to wait for asynchronous operations

// 2. for...of
// - Iterates directly over the values of an iterable such as an array
// - Supports break and continue
// - Can be used with async/await



// When to use each?
// - Use forEach when you want to perform a simple operation on every array element.
// - Use for...of when you need more control over the loop, such as stopping early, skipping elements, or handling asynchronous operations.


// 2. What is Hoisting and what is the Temporal Dead Zone (TDZ)?
// 1. Hoisting

// Hoisting is a JavaScript behavior where variable and function declarations are processed before the code is executed, as if they were moved to the top of their scope.

// Example:
// console.log(name); // undefined

// var name = "Alaa";

// 2. Temporal Dead Zone (TDZ)

// The TDZ is the period between entering a scope and declaring a let or const variable. During this period, accessing the variable causes a ReferenceError.

// Example:
// console.log(age); // ReferenceError

// let age = 25;

// 3. What are the main differences between == and ===?
// Both are comparison operators in JavaScript, but they differ in how they compare values.

// 1. Double Equal (==) – Loose Equality
// - Compares values after performing type conversion (type coercion).
// - It can consider values of different types equal.
// Example:
// console.log(5 == "5"); // true
// console.log(0 == false); // true


// 2. Triple Equal (===) – Strict Equality
// - Compares both value and data type.
// - Does not perform type conversion.
// - Returns true only if both the value and type are the same.
// Example:
// console.log(5 === "5"); // false
// console.log(5 === 5);   // true

// 1. How try-catch works

// try-catch is used to handle errors in JavaScript and prevent the program from crashing unexpectedly.
// - try: Contains the code that might throw an error.
// - catch: Executes when an error occurs in the try block.
// - finally: Executes whether an error occurs or not (optional).
// Example:
// try {
//     let result = 10 / 0;
//     console.log(result);
// } catch (error) {
//     console.log("Something went wrong:", error.message);
// } finally {
//     console.log("Execution completed");
// }


// 2. Why is it important in async operations?

// In asynchronous operations, such as API requests using async/await, errors can happen because of network problems, server errors, or invalid responses.

// We use try-catch to handle these errors gracefully instead of allowing the application to fail unexpectedly.

// Example:
// async function getUsers() {
//     try {
//         const response = await fetch("https://api.example.com/users");

//         if (!response.ok) {
//             throw new Error("Failed to fetch users");
//         }

//         const data = await response.json();
//         console.log(data);

//     } catch (error) {
//         console.log("Error:", error.message);
//     }
// }

// getUsers();


// 5. What’s the difference between Type Conversion and Coercion?
// Both refer to changing a value from one data type to another in JavaScript, but the difference is how the conversion happens.

// 1. Type Conversion (Explicit Conversion)

// Type conversion happens when the developer manually converts a value from one type to another using built-in functions.

// Example:
// let number = "25";

// let result = Number(number);

// console.log(result);        // 25
// console.log(typeof result); // "number"


// Here, we explicitly convert a string into a number using Number().

// 2. Type Coercion (Implicit Conversion)

// Type coercion happens when JavaScript automatically converts a value from one type to another during an operation.

// Example:
// let number = 5;
// let text = "10";

// let result = number + text;

// console.log(result); // "510"