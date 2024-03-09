/* Let and Const were introduced in ES6  */
let age = 30;
age = 31; // Reassigning value to a variable
age = 32;

/* If we use "const" to create a variable we cannot change its value like "let" */
const birthYear = 2003; // It is used for constant
/* birthYear = 2002; It will throw error */
console.log(birthYear);

/* We cannot create empty "const" variable. */
// const job; it will throw error

/* It is very old method to declare a variable at the current time we never need to use this. */
var job = "Coder";
job = "Teacher";
console.log(job);

/* We can simply create a variable without declare it. */
withoutDeclareVariable = "35";
console.log(withoutDeclareVariable);

/* Output:

2003
Teacher
35

*/