import UserGreeting from "./UserGreeting";

const conditionalRendering = () => {
    return (<>
        <h1>Conditional Rendering Example</h1>
        <p>BEFORE LOGIN</p>
        <UserGreeting />
        <br /><br /><br />
        <p>AFTER LOGIN</p><UserGreeting isLoggedIn={true} username="Ram" />
    </>);
};

export default conditionalRendering;