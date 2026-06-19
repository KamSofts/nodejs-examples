import { useState } from "react";

const CounterExample = () => {
    const [count, setCount] = useState(1);

    return (
        <div>
            <h1>{count}</h1>
            <button
                onClick={() => setCount(prev => prev + 1)}
            >Add Count</button>
            <br />
            <button
                onClick={() => setCount(prev => prev - 1)}
            >Less Count</button>
            <br />
            <button
                onClick={() => {
                    // execute only one setCount statement
                    setCount(count + 1); // 1+1=2
                    setCount(count + 1); // 1+1=2
                    // if use "prev => prev + 1" twice result is 3
                }}
            >Reference for 'prev'</button>
        </div>
    );
};

export default CounterExample;