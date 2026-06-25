
import type { Product } from "./types/product.type.js";
import db from "./datas/product.db.js";

export function typeAlias() {
    console.log("\nType Alias Examples :-");

    // INTRA EXAMPLE
    type Student = {
        name: string;
        age: number;
        isStudent: boolean;
    };

    let students: Student[] = [
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
    console.log("Student type (INTRA) example", students);

    // INTER EXAMPLE
    // Object definition - MANUAL
    const manjal: Product = {
        item: "Manjal 50g",
        group: "GROCERY",
        variant: [
            {
                mrp: 20.00,
                price: 18.00,
                isExpired: false
            },
            {
                mrp: 19.00,
                price: 17.00,
                isExpired: true
            }
        ]
    }
    console.log("\nType (INTER) manual example", manjal);

    // Object definition - DATABASE
    let products = db as Product[];
    console.log("\nProduct type alias (INTER) database example");
    products.map(p => {
        console.log(p);
    });

    // You can only define fields from type alias
    console.log("\nTry : products[0]?.itemname; Corrected : products[0]?.item;", products[0]?.item); 
}
