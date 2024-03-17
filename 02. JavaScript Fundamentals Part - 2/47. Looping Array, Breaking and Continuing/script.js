const nitis = [
    "Nitish",
    "Singh",
    2024 - 2003,
    "student",
    ["Abhishek", "Pravin", "Aman"],
    true
];

for (let i = 0; i < nitis.length; i++) {
    console.log(nitis[i], typeof nitis[i]);
}

/* Output:

Nitish "string"
Singh "string"
21 "number"
student "string"
[ 'Abhishek', 'Pravin', 'Aman' ] "object"
true "boolean"

*/

const types = [];

for (let i = 0; i < nitis.length; i++) {

    // Filling types array
    // Method 1
    types[i] = typeof nitis[i];

    // Method 2
    // types.push(typeof nitis[i]);
}
console.log(types);

/* Output:

[ 'string', 'string', 'number', 'string', 'object', 'boolean' ]

*/

const years = [1991, 2003, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2024 - years[i]);
}

console.log(ages);

/* Output:

[ 33, 21, 55, 4 ]

*/

/* ******************* continue and break ****************** */
// Continue - So continue is to exit the current iteration of the loop and continue to the next one.
// Break - On the other hand, break is used to completely terminate the whole loop.

console.log("--- ONLY STRINGS ---");
for (let i = 0; i < nitis.length; i++) {
    if (typeof nitis[i] !== "string") continue;
    console.log(nitis[i], typeof nitis[i]);
}

console.log("---BREAK WITH NUMBER ---");
for (let i = 0; i< nitis.length; i++) {
    if(typeof nitis[i] === "number") break;
    console.log(nitis[i], typeof nitis[i]);
}

/* Output:

--- ONLY STRINGS ---
Nitish "string"
Singh "string"
student "string"

---BREAK WITH NUMBER ---
Nitish "string"
Singh "string"

*/