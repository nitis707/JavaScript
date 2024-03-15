const calcAge = function (bYear) {
    return 2037 - bYear;
}

const yearUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🎉`);
        return -1;
    }


    // return retirement;
}

console.log(yearUntilRetirement(1991, "Nitish"));
console.log(yearUntilRetirement(1970, "Nikhil"));

/* Output:

Nitish retires in 19 years
19
Nikhil has already retired 🎉
-1

*/