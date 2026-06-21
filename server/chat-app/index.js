const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
})

let users = [];

io.on("connection", (socket) => {
    socket.on("join", (username) => {
        if (!users.some(user => user.id === socket.id)) {
            users.push({ id: socket.id, username });
            console.log(username, "connected", socket.id);
        }
        io.emit("users", users.map(u => u.username)); // #1-userlist
        io.emit("message", {
            username: "System",
            message: `${username} connected!`,
            isSystem: true
        });
    });

    // #3-sendmessage
    socket.on("sendMessage", (data) => {
        console.log(data);
        io.emit("message", data);
    });

    socket.on("disconnect", () => {
        const user = users.find(u => u.id === socket.id);
        if (user) {
            users = users.filter(u => u.id !== socket.id);
            console.log(user.username, "disconnected", socket.id);
            io.emit("users", users.map(u => u.username)); // #1-userlist
            io.emit("message", {
                username: "System",
                message: `${user.username} disconnected!`,
                isSystem: true
            });
        }
    });
});

server.listen(5000, () => {
    console.log("Server is running...!");
});