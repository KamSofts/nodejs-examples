import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import Login from "./Login";
import Logout from "./Logout";

const Home = () => {
    const { isLoggedIn } = useContext(AuthContext);

    return isLoggedIn ? <Logout /> : <Login />;
};

export default Home;
