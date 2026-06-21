import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";

export const useSocket = () => {
    const socketRef = useRef(null);

    const [connected, setConnected] = useState(false);
    const [users, setUsers] = useState([]);
    const [chats, setChats] = useState([]);

    const connect = (username) => {
        if (!username.trim()) return;

        const socket = io("http://192.168.56.183:5000");

        socketRef.current = socket;

        socket.emit("join", username);

        socket.on("connect", () => setConnected(true));

        socket.on("users", (userList) => {
            setUsers(userList);
        });

        socket.on("message", (data) => {
            setChats((prev) => [data, ...prev]);
        });
    };

    const sendMessage = (username, message) => {
        if (!message.trim() || !socketRef.current) return;

        socketRef.current.emit("sendMessage", {
            username,
            message,
        });
    };

    const disconnect = () => {
        if (socketRef.current) {
            socketRef.current.off("users");
            socketRef.current.off("message");
            socketRef.current.disconnect();
            socketRef.current = null;
        }

        setConnected(false);
        setUsers([]);
        setChats([]);
    };

    // cleanup on unmount
    useEffect(() => {
        return () => {
            if (socketRef.current) {
                socketRef.current.disconnect();
            }
        };
    }, []);

    return {
        socketRef,
        connected,
        users,
        chats,
        connect,
        sendMessage,
        disconnect,
    };
};