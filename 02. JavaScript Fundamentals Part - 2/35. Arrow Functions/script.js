const calcAge = birthYear => 2024 - birthYear;
const age = calcAge(2000);
console.log(age);

/* Output:

24

*/
/* ---------------------------------------------- */
const yearsUntilRetir = (birthYear) => {
    const age = 2024 - birthYear;
    const retirement = 60 - age;
    return retirement;
}

console.log(yearsUntilRetir(2000));

/* Output:

36

*/
/* ---------------------------------------------- */
const yearsUntilRetir2 = (birthYear, firstName) => {
    const age = 2040 - birthYear;
    const retirement = 60 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetir2(2000, "Nitish"));
console.log(yearsUntilRetir2(2003, "Nikhil"));

/* Output:

Nitish retires in 20 years
Nikhil retires in 23 years

*/