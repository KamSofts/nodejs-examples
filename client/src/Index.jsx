import { useState } from "react";
import Website from "./website/Website";
import Card from "./card/Card";
import Buttons from "./button/Buttons";
import Students from './props-demo/Students';
import StateAndEffect from './cricket-score-board/StateAndEffect'
import CustomHookA from "./components/CustomHookA";
import CustomHookB from "./components/CustomHookB";
const Index = () => {
    const [demo, setDemo] = useState(<h1>Hello World...!</h1>);

    return (<>
        <div style={{ display: "flex", gap: "10px" }}>
            <button onClick={() => setDemo(<Website />)}>Website</button>
            <button onClick={() => setDemo(<div><Card /><Card /><Card /></div>)}>Card</button>
            <button onClick={() => setDemo(<Buttons />)}>CSS Methods</button>
            <button onClick={() => setDemo(<StateAndEffect />)}>useState & useEffect</button>
            <button onClick={() => setDemo(<Students />)}>props</button>
            <button onClick={() => setDemo(<CustomHookA />)}>Custom Hook 1</button>
            <button onClick={() => setDemo(<CustomHookB />)}>Custom Hook 2</button>
        </div>
        {demo}
    </>);
}

export default Index;