const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const { v4: uuid } = require("uuid");

const app = express();
const server = http.createServer(app);

const socketIO = new Server(server, {
    cors: {
        origin: true,
        methods: ["GET", "POST"],
        credentials: true
    }
});

let todoList = [];

const todoNameSpace = socketIO.of("/todo");
todoNameSpace.on("connection", (socket) => {
    console.log("New connection established");

    // data send to newly connected client
    socket.emit("readItems", todoList); 

    socket.on("createItem", (item) => {
        const todoItem = { id: uuid(), value: item };
        todoList.push(todoItem);
        sendToAll(); 
    });

    socket.on("updateItem", (itemObj) => {
        const index = todoList.findIndex((item) => item.id === itemObj.id);
        if (index > -1) {
            todoList[index].value = itemObj.value;
            sendToAll();
        }
    });

    socket.on("deleteItem", (id) => {
        todoList = todoList.filter((item) => item.id !== id);
        sendToAll();
    });

    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });
});

function sendToAll() {
    // data send to all connected clients
    todoNameSpace.emit("readItems", todoList);
}

server.listen(3000, (e) => {
    console.log("Server is running");
});