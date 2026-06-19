const express = require("express");
const cors = require("cors");
const http = require("http");
// user modules
const todoRoutes = require("./routes/todoRoutes");
const { initSocket } = require("./socket/socket");

const app = express();
const server = http.createServer(app);
const io = initSocket(server);

app.use(cors());
app.use(express.json());

app.use("/api/todo", todoRoutes);

io.on("connection", (socket) => {
    console.log("Client connected", socket.id);

    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });
});

server.listen(5000, () => {
    console.log("Server running on 5000");
});
