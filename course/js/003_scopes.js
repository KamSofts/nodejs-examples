export function scopes() {
    console.log("\nVariable Scope Example :-");
    const s = 'Global';

    function fnScope() {
        const s = "Function";
        if (true) {
            const s = "Block";
            console.log(s);
        }
        console.log(s);
    }

    fnScope();
    console.log(s);

    /*
    Block
    Function
    Global
    */
}