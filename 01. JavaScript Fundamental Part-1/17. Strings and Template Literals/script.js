const firstName = "Nitish";
const job = "Student";
const birthYear = 2003;
const age = 2024 - birthYear;

const nitish = "I'm " + firstName + ", a " + age + " years old " + job + "!";
console.log(nitish);

/* Template literals 

Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, string interpolation with embedded expressions, and special constructs called tagged templates.

Template literals are sometimes informally called template strings, because they are used most commonly for string interpolation (to create strings by doing substitution of placeholders). However, a tagged template literal may not result in a string; it can be used with a custom tag function to perform whatever operations you want on the different parts of the template literal.

*/
const nitishNew = `I'm ${firstName}, a ${age} years old ${job}!`; // Good practice.
console.log(nitishNew);

console.log(`Just a regular string...`);

console.log(`String
multiple
lines`);


/* Output:

I'm Nitish, a 21 years old Student!
I'm Nitish, a 21 years old Student!
Just a regular string...
String
multiple
lines

*/