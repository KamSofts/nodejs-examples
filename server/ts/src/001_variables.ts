export function variables() {
    console.log("\nVariables Examples :-");

    let firstName: string = "Ramprabu"; // strings
    let age: number = 13;  // numbers
    let isStudent: boolean = true; // booleans

    age = age + 1;

    console.log("Hello", firstName, "string");
    console.log("You are", age, "years old", "number");
    console.log("Enrolled:", isStudent, "boolean")

    let subjects: string[] = ["Tamil", "Maths"];
    console.log("Array example", subjects);

    let student: {
        name: string;
        age: number;
        isStudent: boolean;
    } = {
        name: "Meenakshi",
        age: 11,
        isStudent: true
    }
    console.log("Object example", student);

    let students: {
        name: string;
        age: number;
        isStudent: boolean;
    }[] = [
            {
                name: "Dhamu",
                age: 22,
                isStudent: false
            },
            {
                name: "Divya",
                age: 19,
                isStudent: true
            }
        ];
    console.log("List of Object Array example", students);

    let anyArray: any[] = ["Anu", 16, true];
    console.log("any type example (like javascript)", anyArray);
}