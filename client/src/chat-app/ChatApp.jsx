import io, { Socket } from "socket.io-client";
import ss from "./ChatApp.module.css";
import { useRef, useState } from "react";

const ChatApp = () => {
    const [username, setUsername] = useState("");
    const refSocket = useRef(null);
    const [joined, setJoined] = useState(false);

    const joinChat = () => {
        if (username.trim()) {
            refSocket.current = io("http://192.168.56.183:5000");
            refSocket.current.emit("join", username);
            setJoined(true);
        }
    };

    const UserComponent = <>
        <div className={ss.chatHeader}>
            <h2>Enter your name</h2>
            <div className={ss.usernameInput}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button onClick={joinChat}>Join Chat</button>
            </div>
        </div>
    </>;

    const ChatComponent = <>
        <h1>Chat room</h1>
    </>;

    return (joined ? ChatComponent : UserComponent)
};

export default ChatApp;