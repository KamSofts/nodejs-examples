import './App.css'
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
// import UnControlled from './form-handling/UnControlled';
// import Controlled from './form-handling/Controlled';
// import ChatApp from './chat-app/ChatApp';
// import UseReducerExample from './hooks/UseReducerExample';
import Index from './Index';

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
      {/* {conditionalRendering} */}
      {/* {componentsTypes} */}
      {/* {renderList} */}
      {/* {propsExample2} */}
      {/* <TodoApp />  */}
      {/* {stateManagement} */}
      {/* <UnControlled />
      <Controlled /> */}
      {/* <ChatApp /> */}
      {/* <UseReducerExample /> */}
      <Index />
    </div>
  )
}

export default App
