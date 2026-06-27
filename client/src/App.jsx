import './App.css'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import TodoApp from './todo-mysql/TodoApp';
import ChatApp from './chat-app/ChatApp';
import Index from './Index';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <ul>
              <li><Link to="/index"> Examples </Link></li>
              <li><Link to="/hooks"> hooks Examples </Link></li>
              <li><Link to="/todo"> TodoApp (npm run todo) </Link></li>
              <li><Link to="/chat"> ChatApp ( npm run chat) </Link></li>
            </ul>
          } />
          <Route path="/index" element={<Index hooks={false} />} />
          <Route path="/hooks" element={<Index hooks={true} />} />
          <Route path="/todo" element={<TodoApp />} />
          <Route path="/chat" element={<ChatApp />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
