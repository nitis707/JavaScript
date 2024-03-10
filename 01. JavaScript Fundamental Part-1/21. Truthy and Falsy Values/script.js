/* 

5 falsy values: 0, "", undefined, null, NaN

All of these five values will be converted to false when we attempt to convert them to a boolean. They are not false initially but they will become when converted to a boolean.

Every thing else are so-called thruthy values. So, value that will be converted to true, for example any number not zero or any string that is not an empty string will be converted to true when we attempt to convert them to a boolean.

*/

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Ntish"));
console.log(Boolean({}));
console.log(Boolean(NaN));
console.log(Boolean(""));

console.log("When the money = 0.")
const money = 0;
if(money) {
    console.log("Don't spend it all.");
} else {
    console.log("You should get a job!\n");
}

console.log("\nWhen the money = 1,2,3.....")
const money1 = 100;
if(money1) {
    console.log("Don't spend it all.\n");
} else {
    console.log("You should get a job!\n");
}

let height;
if(height) {
    console.log("YAY! Height is defined");
} else {
    console.log("Height is UNDEFINED");
}

/* Output:

false
false
true
true
false
false
When the money = 0.  
You should get a job!


When the money = 1,2,3.....
Don't spend it all.

Height is UNDEFINED

*/