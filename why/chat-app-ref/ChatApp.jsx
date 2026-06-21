import ss from "./ChatApp.module.css"; // fine in client/src/chat-app
import { useState } from "react";
import { useSocket } from "./useSocket";

const ChatApp = () => {
    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");
    const [joined, setJoined] = useState(false);

    const {
        users,
        chats,
        connect,
        sendMessage,
        disconnect,
    } = useSocket();

    const joinChat = () => {
        if (!username.trim()) return;

        connect(username);
        setJoined(true);
    };

    const handleSend = () => {
        sendMessage(username, message);
        setMessage("");
    };

    const logout = () => {
        disconnect();
        setUsername("");
        setJoined(false);
    };

    return joined ? (
        <>
            <div className={`${ss.chatHeader} ${ss.joined}`}>
                <div>Welcome, {username}</div>
                <button onClick={logout}>Logout</button>
            </div>

            <div className={ss.users}>
                <strong>Online Users:</strong> {users.join(", ")}
            </div>

            <div className={ss.messageList}>
                {chats.map((chat, index) => (
                    <div
                        key={index}
                        className={
                            chat.isSystem
                                ? `${ss.message} ${ss.system}`
                                : chat.username === username
                                    ? `${ss.message} ${ss.me}`
                                    : ss.message
                        }
                    >
                        <strong>{chat.username}: </strong>
                        {chat.message}
                    </div>
                ))}
            </div>

            <div className={ss.chatInput}>
                <input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="New message"
                />
                <button onClick={handleSend}>Send</button>
            </div>
        </>
    ) : (
        <div className={ss.chatHeader}>
            <h2>Enter your name</h2>
            <div className={ss.usernameInput}>
                <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button onClick={joinChat}>Join Chat</button>
            </div>
        </div>
    );
};

export default ChatApp;