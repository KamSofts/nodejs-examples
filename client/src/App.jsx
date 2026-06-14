import './App.css'
// import StateAndEffect from './cricket-score-board/StateAndEffect'
// import Website from "./website/Website";
// import Card from "./card/Card";
// import Button1 from "./button/Button1";
// import Button2 from "./button/Button2";
import Student from './props-demo/Student';

function App() {
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
      <Student name="Ram" age={14} isStudent={true} />
      <Student name="Krishna" age={19} isStudent={false} />
      <Student name={10} age="Test123" isStudent="Test" />
      <Student name="test" age="test" isStudent="test"/>
    </div>
  )
}

export default App
