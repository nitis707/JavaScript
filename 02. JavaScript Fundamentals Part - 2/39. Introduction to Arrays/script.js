const friends = ["Abhishek", "Dheeraj", "Aman"];
console.log(friends);
console.log(`At 0th index: ${friends[0]}`);
console.log(`At 1th index: ${friends[1]}`);
console.log(`At 2nd index: ${friends[2]}`);

console.log(`Length of the Array: ${friends.length}`); // It will show the lenght of the Array.

/* Output:

[ 'Abhishek', 'Dheeraj', 'Aman' ]

At 0th index: Abhishek
At 1th index: Dheeraj
At 2nd index: Aman

Length of the Array: 3

*/

// It will give the last element of the Array without know the index number.
console.log(`Last element of the Array: ${friends[friends.length - 1]}`);

/* Output:

Last element of the Array: Aman

*/

// In Array we can update or mutate the value of "Const" variable but not the whole Array.
// friends = ["Bob", "Alice"] We cannot do like this
friends[2] = "Jay"; // We can do like this.
console.log(friends);

/* Output:

[ 'Abhishek', 'Dheeraj', 'Jay' ]

*/


const years1 = new Array(1991, 1984, 2008, 2020); // This is the another way to create a array.
console.log(years1);

/* Output:

[ 1991, 1984, 2008, 2020 ]

*/

const firstName = "Nitish";
const nitis = [firstName, "Singh", 2024 - 2003, "Student", friends]; // We can put another Array in this Array. for e.g. "friends".
console.log(nitis);
console.log(`Length of "nitish" Arrya: ${nitis.length}`);

/* Output:

[ 'Nitish', 'Singh', 21, 'Student', [ 'Abhishek', 'Dheeraj', 'Jay' ] ]

Length of "nitish" Arrya: 5

*/

/* ****************************Excercise****************************** */
const calcAge = function(birthYear) {
    return 2024 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

// We cannot call function like this
// calcAge(years);
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

// We can use call fuctions to put their value to create an Array like this
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

/* Output:

34 57 6

*/