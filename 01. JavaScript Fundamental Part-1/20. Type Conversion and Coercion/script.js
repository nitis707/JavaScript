/* 

Type Conversion - Type conversion (or typecasting) means transfer of data from one data type to another. Implicit conversion happens when the compiler (for compiled languages) or runtime (for script languages like JavaScript) automatically converts data types. The source code can also explicitly require a conversion to take place.

Type Coercion - Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers). Type conversion is similar to type coercion because they both convert values from one data type to another with one key difference — type coercion is implicit whereas type conversion can be either implicit or explicit.

*/

/* Type Conversion:

JavaScript only convert a "Number", "String" and "Boolean".

*/

const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(`The ouput of Number("Nitish") is: ${Number("Nitish")}`);
console.log(`Type of 'NaN' is: ${typeof NaN}`);

console.log(`String(23) is: ` + String(23), 23);


/* Type Coercion



*/
console.log("I am " + 23 + " years old");
console.log(`"23" - "10" - 3: `, "23" - "10" - 3); // Strings are not converted into Strings with "Addition or "+" Operator".
console.log(`2+3+4+"5":`, 2 + 3 + 4 + "5"); // here 2 + 3 + 4 + "5" => 9 + "5" => 95

console.log(`"23" * "2": `,"23" * "2");
console.log(`"23" / "2": `,"23" / "2");

let n = "1" + 1;
n = n - 1;
console.log(n); // n = "1" + 1 - 1 => 11 - 1 == 10

console.log(`"10" - "4" - "3" - 2 + "5":`, "10" - "4" - "3" - 2 + "5");

/* Output:

1991 1991
2009
The ouput of Number("Nitish") is: NaN
Type of 'NaN' is: number
String(23) is: 23 23
I am 23 years old
"23" - "10" - 3:  10
2+3+4+"5": 95
"23" * "2":  46
"23" / "2":  11.5
10
"10" - "4" - "3" - 2 + "5": 15

*/