/* 

In JavaScript, the this keyword refers to an object.

Which object depends on how "this" is being invoked (used or called).

The this keyword refers to different objects depending on how it is used:

-> In an object method, this refers to the object.
-> Alone, this refers to the global object.
-> In a function, this refers to the global object.
-> In a function, in strict mode, this is undefined.
-> In an event, this refers to the element that received the event.
-> Methods like call(), apply(), and bind() can refer this to any object.


JavaScript Methods
JavaScript methods are actions that can be performed on objects.

A JavaScript method is a property containing a function definition.

Property	Value

firstName	John
lastName	Doe
age	        50
eyeColor	blue
fullName	function() {return this.firstName + " " + this.lastName;}

*/

const nitis = {
    firstName: "Nitish",
    lastName: "Singh",
    birthYear: 2003,
    job: "student",
    friends: ["Michael", "Peter", "Steven"],
    hasDriversLicense: true,

    // Any fuction which is attached to an Object called "Method"
    // calcAge: function (birthYear) { // It is a property of "nitis" Object
    //     return 2024 - birthYear;
    // }

    calcAge: function () {
        console.log(this);
        return 2024 - this.birthYear; // Here this is point to Object "nitis" directly
    }
};

console.log(nitis.calcAge());
// console.log(nitis["calcAge"](2003));

/* 

{
  firstName: 'Nitish',
  lastName: 'Singh',
  birthYear: 2003,
  job: 'student',
  friends: [ 'Michael', 'Peter', 'Steven' ],
  hasDriversLicense: true,
  calcAge: [Function: calcAge]
}

21 - calAge

*/

const nikhil = {
    firstName: "Nikhil",
    lastName: "Singh",
    birthYear: 2003,
    job: "student",
    friends: ["Michael", "Peter", "Steven"],
    hasDriversLicense: true,


    /* So we calculate the age, and then we create a new property on the current object. So in this case, on the nikhil object, and remember that we can use the dot notation like this to create new properties. */
    calcAge: function () {
        this.age = 2024 - this.birthYear;

        return this.age;
    }
};

console.log(nikhil.calcAge());

console.log(nikhil.age);

/* Output:

21
21

*/

/* Challenge

Abhishek is a 23 - year old teacher, and he has a driver's licence

*/

const abhishek = {
    firstName: "Abhishek",
    lastName: "Singh",
    birthYear: 2003,
    job: "student",
    friends: ["Michael", "Peter", "Steven"],
    hasDriversLicense: true,


    /* So we calculate the age, and then we create a new property on the current object. So in this case, on the nikhil object, and remember that we can use the dot notation like this to create new properties. */
    calcAge: function () {
        this.age = 2024 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${abhishek.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`
    }
};

console.log(abhishek.getSummary());

/* Output:

Abhishek is a 21-year old student, and he has a driver's license.

*/