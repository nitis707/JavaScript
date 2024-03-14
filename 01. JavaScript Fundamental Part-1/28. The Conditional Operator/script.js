/* 

The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as an alternative to an if...else statement.

Ternary operator is used when want to quick dicision not the replacecment of if else statement.

*/

const age = 15;

age >= 18
  ? console.log("I like to drink wine 🍷")
  : console.log("I like to drink water 💧");

/* Output:

age = 23;
I like to drink wine 🍷

age = 15;
I like to drink water 💧

*/

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

/* Output:

water 💧

*/

// We cannot use this if else in template literal.
let drink1;
if (age >= 18) {
  drink1 = "wine 🍷";
} else {
  drink1 = "water 💧";
}
console.log(drink1);

/* Output:

water 💧

*/

/* 

*** We can use ternary operator in template literal

*/
let age1 = 44;
console.log(`I like to drink ${age1 >= 18 ? "wine 🍷" : "water 💧"}`);

/* Output:

I like to drink wine 🍷

*/
