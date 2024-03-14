let day = "monday"; // If we want to assign new value to the variable use "let".

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go ot coding meetup");
    break;

  case "tuesday":
    console.log("Prepare theory videos");
    break;

  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;

  case "friday":
    console.log("Record videos");
    break;

  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend!");
    break;

  default:
    console.log("Not a valid day!");
}

/* Output:

Plan course structure
Go ot coding meetup

*/

day = "tuesday";

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go ot coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend!");
} else {
  console.log("Not a valid day!");
}

/* Output:

Prepare theory videos

*/