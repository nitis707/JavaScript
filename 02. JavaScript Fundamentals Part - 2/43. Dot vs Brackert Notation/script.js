const nitis = {
    firstName: "Nitish",
    lastName: "Singh",
    age: 2024 - 2003,
    job: "student",
    friends: ["Abhishek", "Aman", "Nikhil"]
};
console.log(nitis);

console.log(`Output of DOT Notation:`, nitis.lastName); // DOT Notation
console.log(`Output of Bracket Notation:`, nitis["lastName"]); // Bracket Notation

/* Output:

{
  firstName: 'Nitish',
  lastName: 'Singh',
  age: 21,
  job: 'student',
  friends: [ 'Abhishek', 'Aman', 'Nikhil' ]
}

Output of DOT Notation: Singh    
Output of Bracket Notation: Singh

*/

const nameKey = "Name";
console.log(nitis["first" + nameKey]); // We can access/print values of Object with Bracket Notation like this.
console.log(nitis["last" + nameKey]);
/* Output:

Nitish
Singh

*/

/* 

So when we need to first compute the property name, like we did here with the first and last name, then of course we have to use the bracket notation in any other case, just use the dot notation, which looks a lot cleaner and it's also easier to use

*/

const interestedIn = prompt("What do you want to know about Nitish? Choose between firstName, lastName, age, job, and friends");

if(nitis[interestedIn]) {
    console.log(nitis[interestedIn]);
} else {
    console.log("Wrong request! Choose between firstName, lastName, age, job, and friends");
}

/* Output:

What do you want to know about Nitish? Choose between firstName, lastName, age, job, and friends
=> Nitish

*/

nitis.location = "India"; // Add data in "nitis- Objects" using DOT Notation
nitis["College"] = "Chandigarh University"; // // Add data in "nitis- Objects" using Bracket Notation
console.log(nitis);

/* Output:

{
  firstName: 'Nitish',
  lastName: 'Singh',
  age: 21,
  job: 'student',
  friends: [ 'Abhishek', 'Aman', 'Nikhil' ],
  location: 'India',
  College: 'Chandigarh University'
}

*/

/* Challenge

"Nitish" has 3 friends, and his best friend is called Nikhil.

*/
console.log(`${nitis.firstName} has ${nitis.friends.length} friends, and his best friend is called ${nitis.friends[nitis.friends.length - 1]}`)

/* Output:

Nitish has 3 friends, and his best friend is called Nikhil

*/