/* Arithmetic Operator */
const now = 2024;
const ageNitis = now - 2003;
console.log("Age: " + ageNitis);

const ageSarah = now - 2000;
console.log("Age of Nitis: " + ageNitis, "\nAge of Sarah: " + ageSarah);

/*
2**3 means 2 to the power of 3 = 2*2*3
*/
console.log(ageNitis * 2, ageSarah / 10, 2**3);

const firstName = "Nitish ";
const lastName = "Singh";
const concatenate = firstName + lastName;
console.log(concatenate);



/* Assignment Operator */
let x = 10 + 5; // 15
console.log("x: " + x);

x += 10; // x = x + 10 = 25
console.log("x += 10: " + x);

x *= 4; // x = x*4 = 100
console.log("x *= 4: " + x);

x++; // x = x+1 = 101
console.log("x++: " + x);

x--; // x = x-1 = 100
console.log("x--: " + x);



/* Comparison Operator
>
<
>=
<=
*/
console.log("Age of Nitish is " + ageNitis + " greater than " + "Sarah " + ageSarah + " =", ageNitis > ageSarah);

console.log(ageSarah >= 18);

/* Output:

Age: 21
Age of Nitis: 21 
Age of Sarah: 24 
42 2.4 8
Nitish Singh     
x: 15
x += 10: 25      
x *= 4: 100      
x++: 101
x--: 100
Age of Nitish is 21 greater than Sarah 24 = false
true

*/