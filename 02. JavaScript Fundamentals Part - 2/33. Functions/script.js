/* 

Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it.Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it.

*/

function logger() {
  console.log("My name is Nitish!");
}

// calling / running / invoking function
logger();
logger();
logger();

/* Output:

My name is Nitish!
My name is Nitish!
My name is Nitish!

*/

/* ------------------------------------------------------------------------ */

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(4, 0); // We have captured the value in the "appleJuice" variable.
console.log(appleJuice);
console.log(fruitProcessor(4, 0)); // We can do like this also

const mixJuice = fruitProcessor(2, 4);
console.log(mixJuice);

/* Output:

Juice with 4 apples and 0 oranges.
Juice with 4 apples and 0 oranges.
Juice with 2 apples and 4 oranges.

*/