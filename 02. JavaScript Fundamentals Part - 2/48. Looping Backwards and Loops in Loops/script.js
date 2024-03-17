for (let i = 10; i > 0; i--) {
    console.log(i);
}

/* Output:

10
9
8
7
6
5
4
3
2
1

*/

const nitis = [
    "Nitish",
    "Singh",
    2024 - 2003,
    "student",
    ["Abhishek", "Peter", "Steven"]
]

for (let i = nitis.length - 1; i >= 0; i--) {
    console.log(i, nitis[i]);
}

/* Output:

4 [ 'Abhishek', 'Peter', 'Steven' ]
3 student
2 21
1 Singh
0 Nitish

*/

for (let exercise = 1; exercise <= 4; exercise++) {
    console.log(`----- Starting excercise ${exercise} -----`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Liftin weight repetition ${rep} 🏋️‍♂️`);
    }
}

/* Output:

----- Starting excercise 1 -----
Exercise 1: Liftin weight repetition 1 🏋️‍♂️
Exercise 1: Liftin weight repetition 2 🏋️‍♂️
Exercise 1: Liftin weight repetition 3 🏋️‍♂️
Exercise 1: Liftin weight repetition 4 🏋️‍♂️
Exercise 1: Liftin weight repetition 5 🏋️‍♂️
----- Starting excercise 2 -----
Exercise 2: Liftin weight repetition 1 🏋️‍♂️
Exercise 2: Liftin weight repetition 2 🏋️‍♂️
Exercise 2: Liftin weight repetition 3 🏋️‍♂️
Exercise 2: Liftin weight repetition 4 🏋️‍♂️
Exercise 2: Liftin weight repetition 5 🏋️‍♂️
----- Starting excercise 3 -----
Exercise 3: Liftin weight repetition 1 🏋️‍♂️
Exercise 3: Liftin weight repetition 2 🏋️‍♂️
Exercise 3: Liftin weight repetition 3 🏋️‍♂️
Exercise 3: Liftin weight repetition 4 🏋️‍♂️
Exercise 3: Liftin weight repetition 5 🏋️‍♂️
----- Starting excercise 4 -----
Exercise 4: Liftin weight repetition 1 🏋️‍♂️
Exercise 4: Liftin weight repetition 2 🏋️‍♂️
Exercise 4: Liftin weight repetition 3 🏋️‍♂️
Exercise 4: Liftin weight repetition 4 🏋️‍♂️
Exercise 4: Liftin weight repetition 5 🏋️‍♂️

*/