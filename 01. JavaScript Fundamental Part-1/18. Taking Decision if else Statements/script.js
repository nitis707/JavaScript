const age = 17;

if(age >= 18) {
    console.log(`You can start driving 🚗`);
} else {
    const yearLeft = 18 - age;
    console.log(`You can start driving 🚗 after ${yearLeft} year.`);
}


const birthYear = 2003;
let century;
if(birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(`Birth in ${century} century.`);

/* Output:

You can start driving 🚗 after 1 year.
Birth in 21 century.

*/