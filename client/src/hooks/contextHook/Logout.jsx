import React, { useContext } from 'react';
import { AuthContext } from "./AuthContext";

const Logout = () => {
    const { setIsLoggedIn } = useContext(AuthContext);

    const handleLogout = (e) => {
        e.preventDefault();

        setIsLoggedIn(false);
    };

    return (
        <div>
            <h1>Logout</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;
