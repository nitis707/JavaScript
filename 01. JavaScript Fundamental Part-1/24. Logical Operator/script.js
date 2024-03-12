const hasDriversLicence = true; // A
const hasGoodVision = true; // B

console.log("Both True in AND: ", hasDriversLicence && hasGoodVision);
console.log("Both True in OR: ", hasDriversLicence || hasGoodVision);
/* Output:

Both True in AND:  true
Both True in OR:  true 

*/

const hasDriversLicence1 = true;
const hasGoodVision1 = false;

console.log("One True AND False: ", hasDriversLicence1 && hasGoodVision1);
console.log("One True OR False: ", hasDriversLicence1 || hasGoodVision1);
/* Output:

One True AND False:  false
One True OR False:  true

*/


const hasDriversLicence2 = false;
const hasGoodVision2 = false;

console.log("False AND False: ", hasDriversLicence2 && hasGoodVision2);
console.log("False OR False: ", hasDriversLicence2 || hasGoodVision2);
/* Output:

False AND False:  false   
False OR False:  false

*/

console.log("True !negation: ",!hasDriversLicence);
console.log("False !negation: ",!hasDriversLicence2);
/* Output:

True !negation:  false    
False !negation:  true

*/


if(hasDriversLicence && hasGoodVision) {
    console.log("Sarah is able to drive!");
} else {
    console.log("Someone else should drive...");
}
/* Output:

Sarah is able to drive!

*/

const isTired  = true;

console.log(hasDriversLicence && hasGoodVision && isTired);
console.log(hasDriversLicence || hasGoodVision || isTired);
/* Output:

Someone else should drive...

*/



if(hasDriversLicence && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive!");
} else {
    console.log("Someone else should drive...");
}

/* Output:

Someone else should drive...

*/