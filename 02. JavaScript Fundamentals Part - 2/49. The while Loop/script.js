// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetiton ${rep} 🏋️‍♂️`);
// }

let rep = 1;
while (rep <= 10) {
    console.log(`While: Lifting weights repetiton ${rep} 🏋️‍♂️`);
    rep++;
}

/* Output:

While: Lifting weights repetiton 1 🏋️‍♂️
While: Lifting weights repetiton 2 🏋️‍♂️
While: Lifting weights repetiton 3 🏋️‍♂️
While: Lifting weights repetiton 4 🏋️‍♂️
While: Lifting weights repetiton 5 🏋️‍♂️
While: Lifting weights repetiton 6 🏋️‍♂️
While: Lifting weights repetiton 7 🏋️‍♂️
While: Lifting weights repetiton 8 🏋️‍♂️
While: Lifting weights repetiton 9 🏋️‍♂️
While: Lifting weights repetiton 10 🏋️‍♂️

*/

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;

    if(dice === 6) {
        console.log("Loop is about to end...");
    }
}

/* Output:

1
You rolled a 1
You rolled a 4
You rolled a 2
You rolled a 3
Loop is about to end...

*/