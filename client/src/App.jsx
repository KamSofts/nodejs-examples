import './App.css'
// import StateAndEffect from './cricket-score-board/StateAndEffect'
// import Website from "./website/Website";
// import Card from "./card/Card";
import Button1 from "./button/Button1";
import Button2 from "./button/Button2";

function App() {
  return (
    <div>
      {/* <h1>useState & useEffect</h1><StateAndEffect /> */}
      {/* <Website /> */}
      {/* <Card /><Card /><Card /><Card /><Card /><Card /> */}
      <Button1 />
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
      >INLINE CSS</button>
    </div>
  )
}

export default App
