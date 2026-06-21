import io from "socket.io-client";
import ss from "./ChatApp.module.css";
import { useRef, useState } from "react";

const ChatApp = () => {
    const [username, setUsername] = useState("");
    const refSocket = useRef(null);
    const [joined, setJoined] = useState(false);
    const [users, setUsers] = useState([]); // #1-userlist
    const [chats, setChats] = useState([]); // #2-chatlist
    const [message, setMessage] = useState(""); // #3-sendmessage

    const joinChat = () => {
        if (username.trim()) {
            refSocket.current = io("http://192.168.56.183:5000");
            refSocket.current.emit("join", username);
            refSocket.current.on("message", (data) =>
                setChats((prev) => [data, ...prev])); // #2-chatlist
            refSocket.current.on("users", (userList) =>
                setUsers(userList)); // #1-userlist
            setJoined(true);
        }
    };

    const sendMessage = () => {
        if (message.trim()) {
            refSocket.current.emit("sendMessage", { username, message });
            setMessage("");
        }
    };

    const logout = () => {
        if (refSocket.current) {
            refSocket.current.off("message");
            refSocket.current.off("users");
            refSocket.current.disconnect();
            refSocket.current = null;
        }
        setUsername("");
        setJoined(false);
        setUsers([]); // #1-userlist
        setChats([]); // #2-chatlist
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
        <div className={`${ss.chatHeader} ${ss.joined}`}>
            <div>Welcome, {username}</div>
            <button onClick={logout}>Logout</button>
        </div>
        {/* #1-userlist */}
        <div className={ss.users}>
            <strong>Online Users:</strong> {users.join(", ")}
        </div>

        {/* #2-chatlist */}
        <div className={ss.messageList}>
            {chats.map((chat, index) => (

                <div
                    className={chat.isSystem
                        ? `${ss.message} ${ss.system}`
                        : chat.username === username
                            ? `${ss.message} ${ss.me}`
                            : ss.message}
                    key={`${chat.username}-${chat.message}-${index}`}
                >
                    <strong>{chat.username} : </strong>{chat.message}
                </div>
            ))}
        </div>

        {/* #3-sendmessage */}
        <div className={ss.chatInput}>
            <input
                type="text"
                placeholder="New message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    </>;

    return (joined ? ChatComponent : UserComponent)
};

export default ChatApp;