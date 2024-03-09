/*
In JavaScript every value is either an object or a primitive value.
There are 7 primitive data types.
1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. Symbol
7. BigInt

JavaScript has dynamic typing - We do not have to manually define the data type of the value stored in a variable. Instead, data type are determined automatically.
*/

let age = 23; // Integer
let firstName = "Nitish"; // String
let fullAge = true; // Boolean
let children; // Undefined

console.log("First Name: " + firstName);
console.log(fullAge);

/* Typeof show the which type of data we have stored in variables. */
console.log(typeof firstName);
console.log(typeof age);

/* If we assign the new value to an existing variable do not write "let" */
firstName = "Nikhil";
console.log("Replaced First Name: " + firstName);

let year;
console.log(year);
console.log(typeof year);

year = 2003;
console.log("Variable type: " + typeof year + ", " + "Year: " + year);

null;
console.log(typeof null);

/* Output:

First Name: Nitish
true
string
number
Replaced First Name: Nikhil      
undefined
undefined
Variable type: number, Year: 2003
object

*/