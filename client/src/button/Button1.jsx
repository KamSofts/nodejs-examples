import { useState } from "react";

const Button1 = () => {
    const [hover, setHover] = useState(false);

    const styles = {
        backgroundColor: hover ? "#0000a0" : "#0000d0",
        color: "white",
        padding: "10px 20px",
        margin: "30px",
        borderRadius: "5px",
        border: "none",
        curosr: "pointer"
    }

    return (
        <button
            style={styles}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            INTRA CSS (Using object)
        </button>
    );
};

export default Button1;