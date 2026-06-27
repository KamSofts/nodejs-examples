import React, { useContext } from 'react';
import { AuthContext } from "./AuthContext";

const Login = () => {
    const { setIsLoggedIn } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();

        setIsLoggedIn(true);
    };

    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
