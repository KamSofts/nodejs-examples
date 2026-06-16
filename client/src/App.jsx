import './App.css'
// import StateAndEffect from './cricket-score-board/StateAndEffect'
// import Website from "./website/Website";
// import Card from "./card/Card";
// import Button1 from "./button/Button1";
// import Button2 from "./button/Button2";
// import Student from './props-demo/Student';
import UserGreeting from './conditional/UserGreeting';
import ClassBased from './component-types/ClassBased';
import FunctionBased from './component-types/FunctionBased';

function App() {

  const conditionalRendering = <>
    <h1>Conditional Rendering Example</h1>
    <p>BEFORE LOGIN</p>
    <UserGreeting />
    <br /><br /><br />
    <p>AFTER LOGIN</p><UserGreeting isLoggedIn={true} username="Ram" />
  </>;

  const componentsTypes = <>
    <h1>Components Types Example</h1>
    <h3>Class based component</h3>
    <ClassBased />
    <h3>Functional based component</h3>
    <FunctionBased />
  </>;

  return (
    <div>
      {/* <h1>useState & useEffect</h1><StateAndEffect /> */}
      {/* <Website /> */}
      {/* <Card /><Card /><Card /><Card /><Card /><Card /> */}
      {/* <Button1 />
      <Button2 />
      <br />
      <button
        style={{
          backgroundColor: "green",
          padding: "10px 20px",
          color: "white",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
          margin: "30px"
        }}
      >INLINE CSS</button> */}
      {/* <Student name="Ram" age={14} isStudent={true} />
      <Student name="Krishna" age={19} isStudent={false} />
      <Student name={10} age="Test123" isStudent="Test" />
      <Student name="test" age="test" isStudent="test"/> */}
      {/* {conditionalRendering} */}
      {componentsTypes}
    </div>
  )
}

export default App
