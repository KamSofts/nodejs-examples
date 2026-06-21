import { useRef } from "react";

const UnControlled = () => {
    const refUsername = useRef();
    const refEmail = useRef();
    const refPassword = useRef();

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const username = refUsername.current.value;
        const email = refEmail.current.value;
        const password = refPassword.current.value;

        if (!username || !email || !password) {
            alert("All fields are required...!");
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            alert("Invalid email address!");
        } else if (password.length < 6) {
            alert("Password must be at least 6 characters!");
        } else {
            refUsername.current.value = "";
            refEmail.current.value = "";
            refPassword.current.value = "";
            alert("Login Success...!");
        }
    }

    return (<>
        <form onSubmit={handleSubmit}>
            <h3>UnControlled Form Component Example</h3>
            <div>
                <label htmlFor="username">User Name : </label>
                <input type="text" name="uesrname" ref={refUsername} />
            </div>
            <div>
                <label htmlFor="email">Email : </label>
                <input type="text" name="email" ref={refEmail} />
            </div>
            <div>
                <label htmlFor="password">Password :</label>
                <input type="password" name="password" ref={refPassword} />
            </div>
            <div>
                <button type="submit">Register</button>
            </div>
        </form>
    </>);
};

export default UnControlled;