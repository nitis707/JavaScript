/* ******************************ADD Elements******************************** */

const friends = ["Michael", "Steven", "Peter"];
friends.push("Jay"); // "Push" function is used to add an element in the "END" of the Array.
console.log(friends);
console.log(friends.length);

/* Output:

[ 'Michael', 'Steven', 'Peter', 'Jay' ]
4 - Length

*/

// Another way to know the length
const newLength = friends.push("Aman");
console.log(friends);
console.log(newLength);
/* Output:

[ 'Michael', 'Steven', 'Peter', 'Jay', 'Aman' ]
5 - Lenght

*/

// Method to add element is the "Start" of the Array
friends.unshift("Deepak");
console.log(friends);
/* Output:

[ 'Deepak', 'Michael', 'Steven', 'Peter', 'Jay', 'Aman' ]

*/


/* *********************************REMOVE Elements********************************* */
// Last Element
friends.pop(); // We do not need to pass the argument.
console.log(friends);
const popped = friends.pop();
console.log(popped);

/* Output:

[ 'Deepak', 'Michael', 'Steven', 'Peter', 'Jay', 'Aman' ]
[ 'Deepak', 'Michael', 'Steven', 'Peter', 'Jay' ]
Jay -- This is removed by the "popped".

*/

// First Element
friends.shift();
console.log(friends);

/* Output:

[ 'Michael', 'Steven', 'Peter' ]

*/

/* *************************************** ******************************************* */

console.log(`Index of Peter is: ${friends.indexOf("Peter")}`);
console.log(`Index of Bob is: ${friends.indexOf("Bob")}`);

/* Output:

Index of Peter is: 2
Index of Bob is: -1

*/

/* ************************************ES6 Feature************************************ */
/*
The includes() method is a built-in JavaScript function that checks if a specific element or substring is present in an array or a string, respectively. 
*/
console.log(friends.includes("Steven")); // It is testing with strict equality
console.log(friends.includes("Bob"));
/* Output:

true
false

*/

// If we add "23" in this "friend Array"
friends.push(23);
console.log(friends.includes("23"));
/* Output:

false - False because strict equality which means that it does not do type coercion And since 23 to string is different form 23 to number 
        it gives us false, "But if I test it directly for the number then it should be true."
*/
console.log(friends.includes(23));
/* Output:
True
*/

// And we can use the include method to write conditionals
if (friends.includes("Steven")) {
    console.log("You have a friend called Steven.");
}
/* Output:

You have a friend called Steven

*/