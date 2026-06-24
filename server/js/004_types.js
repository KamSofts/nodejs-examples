export function types() {
    console.log("\nVariable Types :-")
    function fnPrimitiveTypes() {
        console.log("Primitive Types :", "string, number, boolean, null, undefined, symbol, bigint");
    }

    function fnReferenceTypes() {
        console.log("Reference Types :", "Object, Array, Function");
    }

    fnPrimitiveTypes();
    /*
    Primitive Types : string, number, boolean, null, undefined, symbol, bigint
    */
    fnReferenceTypes();
    /*
    Reference Types : Object, Array, Function
    */
}