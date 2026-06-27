import { useState } from "react";
import Website from "./website/Website";
import Card from "./card/Card";
import Buttons from "./button/Buttons";
import Students from './props-demo/Students';
import StateAndEffect from './cricket-score-board/StateAndEffect'
import CustomHookA from "./components/CustomHookA";
import CustomHookB from "./components/CustomHookB";
import ConditionalRendering from "./conditional/ConditionalRendering";
import RenderList from "./list/RenderList";
import ComponentsTypes from "./component-types/ComponentTypes";
import PropsDemo2 from "./props-demo/PropsDemo";
import StateManagement from "./state-management/StateManagement";
import UseReducerExample from "./hooks/UseReducerExample";
import UnControlled from './form-handling/UnControlled';
import Controlled from './form-handling/Controlled';
import ContextApp from "./hooks/contextHook/ContextApp";

const Index = ({ hooks }) => {
    const [demo, setDemo] = useState(<h1>Hello World...!</h1>);

    const hookExamples = <>
        <div style={{ display: "flex", gap: "10px" }}>
            <button onClick={() => setDemo(<StateAndEffect />)}>useState & useEffect</button>
            <button onClick={() => setDemo(<CustomHookA />)}>Custom Hook 1</button>
            <button onClick={() => setDemo(<CustomHookB />)}>Custom Hook 2</button>
            <button onClick={() => setDemo(<StateManagement />)}>State Management</button>
            <button onClick={() => setDemo(<UseReducerExample />)}>useReducer Hook</button>
            <button onClick={() => setDemo(<ContextApp />)}>useContext Hook</button>
        </div>
        {demo}
    </>;

    const basicExamples = <>
        <div style={{ display: "flex", gap: "10px" }}>
            <button onClick={() => setDemo(<Website />)}>Website</button>
            <button onClick={() => setDemo(<div><Card /><Card /><Card /></div>)}>Card</button>
            <button onClick={() => setDemo(<Buttons />)}>CSS Methods</button>
            <button onClick={() => setDemo(<Students />)}>props</button>
            <button onClick={() => setDemo(<ConditionalRendering />)}>Conditional Rendering</button>
            <button onClick={() => setDemo(<RenderList />)}>Render Lists</button>
            <button onClick={() => sControlledetDemo(<ComponentsTypes />)}>Component Types</button>
            <button onClick={() => setDemo(<PropsDemo2 />)} >props 2</button>
            <button onClick={() => setDemo(<UnControlled />)}>UnControlled Form</button>
            <button onClick={() => setDemo(<Controlled />)}>Controlled Form</button>
        </div>
        {demo}
    </>;

    return (hooks ? hookExamples : basicExamples);
}

export default Index;