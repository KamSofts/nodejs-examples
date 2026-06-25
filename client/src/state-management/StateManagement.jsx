import CounterExample from "./CounterExample";
import Form1 from "./Form1";
import Form2 from "./Form2";

const StateManagement = () => {
    return (<>
        <h1>useState Examples</h1>
        <h3>Counter Example</h3>
        <CounterExample />
        <h3>State used for component</h3>
        <Form1 />
        <h3>State used for form</h3>
        <Form2 />
    </>);
};

export default StateManagement;