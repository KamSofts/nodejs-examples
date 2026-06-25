import ClassBased from "./ClassBased";
import FunctionBased from "./FunctionBased";

const ComponentsTypes = () => {
    return (<>
        <h1>Components Types Example</h1>
        <h3>Class based component</h3>
        <ClassBased />
        <h3>Functional based component</h3>
        <FunctionBased />
    </>);
};

export default ComponentsTypes;