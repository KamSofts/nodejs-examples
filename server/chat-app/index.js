const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: true,
        methods: ["GET", "POST"],
        credentials: true
    }
})

let users = [];

io.on("connection", (socket) => {
    socket.on("join", (username) => {
        if (!users.some(user => user.id === socket.id)) {
            users.push({ id: socket.id, username });
            console.log(username, "connected", socket.id);
        }
        io.emit("message", {
            username: "System",
            message: `${username} connected!`
        });
    });

    socket.on("disconnect", () => {
        const user = users.find(u => u.id === socket.id);
        if (user) {
            users = users.filter(u => u.id !== socket.id);
            console.log(user.username, "disconnected", socket.id);
            io.emit("message", {
                username: "System",
                message: `${user.username} disconnected!`
            });
        }
    });
});

server.listen(5000, () => {
    console.log("Server is running...!");
});