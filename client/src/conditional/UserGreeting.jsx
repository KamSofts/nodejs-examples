const UserGreeting = props => {
    const username = props.username || "Guest";
    const isLoggedIn = props.isLoggedIn || false;

    const styles = {
        textAlign: "center",
        color: "white",
        padding: "10px"
    }

    const welcomeGreet = <h2 style={{
        ...styles,
        backgroundColor: "green"
    }}>Welcome {username}</h2>;

    const loginGreet = <h2 style={{
        ...styles,
        backgroundColor: "red"
    }}>Please log in to access</h2>;

    return (isLoggedIn ? welcomeGreet : loginGreet);
}

export default UserGreeting;