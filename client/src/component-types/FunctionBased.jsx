import React, { useEffect, useState } from 'react'

const FunctionBased = () => {
    const [count, setCount] = useState(1);

    const addCount = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        console.log("componentDidMount(F) :", count);
    }, []);

    useEffect(() => {
        console.log("componentDidUpdate(F) :", count);
    }, [count]);    

    return (
        <div>
            <p>Count : {count}</p>
            <button onClick={addCount}>Add count</button>
        </div>
    )
}

export default FunctionBased
