import { useReducer, useState } from "react";

const UseReducerExample = () => {

    // order important : 1.init, 2.reducer then 3.useReducer
    const initialState = { count: 0 };
    const reducer = (s, action) => {
        const c = Number.parseInt(action.count) || 1;
        switch (action.type) {
            case "add":
                return { count: s.count + c };
            case "less":
                return { count: s.count - c };
            default:
                return { count: Number.parseInt(action.reset) || 0 };
        }
    };
    const [state, dispatch] = useReducer(reducer, initialState);
    const [counter, setCounter] = useState({
        reset: "",
        ratio: ""
    });

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setCounter((prev) => ({ ...prev, [key]: value }));
    }


    return (<>
        <div>
            <h3>useReducer Example</h3>
            <h1>Count : {state?.count}</h1>
            <label htmlFor="reset">Reset Value</label>
            <input type="text"
                value={counter.reset} name="reset"
                onChange={handleChange}
            />
            <br />
            <label htmlFor="ratio">Ratio</label>
            <input type="text"
                value={counter.ratio} name="ratio"
                onChange={handleChange}
            />
            <div style={{ display: "flex", gap: "10px" }}>
                <button onClick={() => dispatch({
                    type: "add",
                    count: counter.ratio
                })}>Add</button>
                <button onClick={() => dispatch({
                    type: "less",
                    count: counter.ratio
                })}>Less</button>
                <button onClick={() => dispatch({
                    type: "reset",
                    reset: counter.reset
                })}>Reset</button>
            </div>
        </div>
    </>);
};

export default UseReducerExample;