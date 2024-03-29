/* 

JavaScript's strict mode is a way to opt in to a restricted variant of JavaScript, thereby implicitly opting-out of "sloppy mode". Strict mode isn't just a subset: it intentionally has different semantics from normal code. Browsers not supporting strict mode will run strict mode code with different behavior from browsers that do, so don't rely on strict mode without feature-testing for support for the relevant aspects of strict mode. Strict mode code and non-strict mode code can coexist, so scripts can opt into strict mode incrementally.

*/

"use strict";

let hasDriveresLicense = false;
const passTest = true;

if (passTest) {
    hasDriveresLicense = true;
}

if (hasDriveresLicense) {
    console.log("I can drive!");
}

/* Output:

I can drive!

*/

// Here both variables interface and private are reserved keywords in JavaScript.
// const interface = "Audio";
// const private = 534; 