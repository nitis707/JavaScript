// Function declaration
function calcAge(birthYear) {
    const age = 2024 - birthYear;
    return age;
}

const age = calcAge(2003);
console.log(age);

/* Output:

21

*/

/* --------------------------------------------------- */
// An expression is a combination of values, variables, and operators, which computes to a value. The computation is called an evaluation. The values can be of various types, such as numbers and strings.

// Function expression
const calcAge2 = function(birthYear) {
    const age = 2024 - birthYear;
    return age;
}

const age2 = calcAge2(2000);
console.log(age2);

/* Output:

24

*/