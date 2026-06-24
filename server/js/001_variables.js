// A variable is a container for storing data
// A variable behaves as if it was the value that it contains

// Two steps:
// 1. Declaration (var, let, const)
// 2. Assignment (= assignment operator)

export function variables() {
    console.log("\nVariables Examples :-");

    let firstName = "Ramprabu"; // strings
    let age = 13;  // numbers
    let isStudent = true; // booleans

    age = age + 1;

    console.log("Hello", firstName, "string");
    console.log("You are", age, "years old", "number");
    console.log("Enrolled:", isStudent, "boolean")
}