export function functionBasics() {
    functions();
    parameters();
    objectParameter();
}

function functions() {
    console.log("\nFunction Declaration Example :-");
    console.log("-------------------------------")

    function print() {
        console.log("Welcome to JavaScript Functions..!");
    }

    print();
    print();
    print();
}

function parameters() {
    console.log("\nFunctions with Parameters and set Default Value:-");
    console.log("-------------------------------------------------")

    function getDetails1(itemName, itemGroup, itemPrice) {
        console.log("Item Name :", itemName,
            "| Group :", itemGroup,
            "| Price :", itemPrice);
    }

    getDetails1("Infinix", "MOBILE", 14999);
    getDetails1("HP 640", "LAPTOP", 104999);
    getDetails1("Testing");

    console.log("\nExample for default values :-");
    function getDetails2(itemName = "Unknown", itemGroup = "Unknown", itemPrice = 0) {
        console.log("Item Name :", itemName,
            "| Group :", itemGroup,
            "| Price :", itemPrice);
    }
    getDetails2("Testing");
}

function objectParameter() {
    console.log("\nFunctions with Object Parameters :-");
    console.log("-----------------------------------")

    const infinix = {
        itemName: "Infinix",
        itemGroup: "MOBILE",
        itemPrice: 14999
    }

    function getDetails1(product) {
        console.log("Item Name :", product.itemName,
            "| Group :", product.itemGroup,
            "| Price :", product.itemPrice);
    };
    getDetails1(infinix);
    getDetails1({ itemName: "HP 640", itemGroup: "LAPTOP", itemPrice: 104999 });
    getDetails1({ itemName: "Testing" });

    console.log("\nExample for default values :-");
    function getDetails2({ itemName = "Unknown", itemGroup = "Unknown", itemPrice = 0 }) {
        console.log("Item Name :", itemName,
            "| Group :", itemGroup,
            "| Price :", itemPrice);
    };
    getDetails2({ itemName: "Testing" });
}