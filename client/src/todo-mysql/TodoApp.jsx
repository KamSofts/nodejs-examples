import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import api from "../utils/api";



const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState("");

    const loadTodos = async () => {
        const res = await api.get("/todo");
        setTodos(res.data);
    }

    useEffect(() => {
        const socket = io("http://192.168.56.183:5000");

        loadTodos();

        socket.on("todoAdded", (todo) => {
            setTodos(prev => [todo, ...prev]);
        });

        socket.on("todoUpdated", (updatedTodo) => {
            setTodos(prev => prev.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo))
        });

        socket.on("todoDeleted", (id) => {
            setTodos(prev => prev.filter(todo => todo.id != id));
        });

        return () => {
            socket.off("todoAdded");
            socket.off("todoUpdated");
            socket.off("todoDeleted");
            socket.disconnect();
        };
    }, []);

    const addTodo = async () => {
        if (!title.trim()) return;
        await api.post("/todo", { title });
        setTitle("");
    }

    const updateTodo = async (todo) => {
        if (!title.trim()) return;
        await api.put(`/todo/${todo.id}`, { title });
        setTitle("");
    }

    const deleteTodo = async (id) => {
        await api.delete(`/todo/${id}`);
    }

    return (
        <div style={{ padding: 20 }}>
            <h1>Socket.IO Todo App</h1>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter Todo-Note"
            />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.title}
                        {" "}
                        <button onClick={() => updateTodo({ id: todo.id, title: title })}>Edit</button>
                        {" "}
                        <button onClick={() => deleteTodo(todo.id)} >Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default TodoApp;