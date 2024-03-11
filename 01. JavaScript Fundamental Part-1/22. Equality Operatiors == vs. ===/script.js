/* 

For best practice and comparing values always use "===" to remove bug. Usage of "==" is difficult to find errors and bug.

*/

const age = 18;
if(age === 18) { // It not support type coercion
    console.log("Yes it is equal.(Strict)");
} else {
    console.log("No it is not equal.")
}

if(age == 18) { // It support type coercion
    console.log("Yes it is equal. (loose)");
} else {
    console.log("No it is not equal.")
}

const favourite = prompt("What is your favourite number?");
console.log(favourite);
console.log(typeof favourite);

if(favourite == 23) { // "23" == 23
    console.log("Cool! 23 is an amazing number!");
}

const favourite1 = Number(prompt("What is your favourite1 number?"));
console.log(favourite1);
console.log(typeof favourite1);

if(favourite1 === 23) { // 22 === 23 => False
    console.log("Cool! 23 is an amazing number!");
} else if (favourite1 === 7) {
    console.log("7 is also a cool number!");
} else {
    console.log("Number is not 23 or 7!");
}

if (favourite1 !== 23) {
    console.log("Why not 23?");
}