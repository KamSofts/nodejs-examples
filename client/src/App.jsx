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
import List1 from './list/List1';
import List2 from './list/List2';
import List3 from './list/List3';
import Parent from './props-demo/Parent';
// import TodoApp from './todo-mysql/TodoApp';
import CounterExample from './state-management/CounterExample';
import Form1 from './state-management/Form1';
import Form2 from './state-management/Form2';
import UnControlled from './form-handling/UnControlled';
import Controlled from './form-handling/Controlled';

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

  const renderList = <>
    <h1>Render List Examples</h1>
    <List1 />
    <List2 />
    <h3>Filter lists</h3>
    <List3 type="fruits1" color="Yellow" />
    <List3 type="vegetables" color="Red" />
  </>;

  const propsExample2 = <>
    <h1>props example 2</h1>
    <Parent />
  </>;

  const stateManagement = <>
    <h1>useState Examples</h1>
    <h3>Counter Example</h3>
    <CounterExample />
    <h3>State used for component</h3>
    <Form1 />
    <h3>State used for form</h3>
    <Form2 />
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
      {/* {componentsTypes} */}
      {/* {renderList} */}
      {/* {propsExample2} */}
      {/* <TodoApp />  */}
      {/* {stateManagement} */}
      <UnControlled />
      <Controlled />
    </div>
  )
}

export default App
