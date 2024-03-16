/* 

The Object type represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax.

In objects we actually define key value pairs and then we can give each of the values here.

*/

const nitishArray = [ // This is a Array
    "Nitish",
    "Singh",
    2024 - 2003,
    "teacher"
]

// Object - We use Object to group together different variables that really belong together suuch as the properties "nitis".
const nitis = {
    firstName: "Nitish", // We have now an object which contains five key pairs and each has a value.
    lastName: "Singh", // So essentially we were able to assign a name to each of these that we had.
    age: 2024 - 2003,
    job: "student",
    friends: ["Abhishek", "Aman", "Nikhil"]
};

/* Array vs Object

Array
An Array is a collection of data and a data structure that is stored in a sequence of memory locations. One can access the elements of an array by calling the index number such as 0, 1, 2, 3, …, etc. The array can store data types like Integer, Float, String, and Boolean all the primitive data types can be stored in an array.

An array of objects
It stores multiple values in a single variable. The object can contain anything in the real world such as person names, cars, and game characters. Objects are very easy to use in some situations if you know where the data is being processed. The character set of objects is known as Properties. The properties of an object can be called by using DOT notation and [] notation.

*/