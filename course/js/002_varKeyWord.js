// NOTE : Currently let and const mostly used
export function varKeyword() {
    console.log("\nvar KeyWord Example :-")
    var s;
    function fnVarKeyword() {
        if (true) {
            s = "Block-True";
        } else {
            s = "Block-False";
        }

        console.log("Functional : ", s);
    }

    fnVarKeyword();
    console.log("Global : ", s);
}