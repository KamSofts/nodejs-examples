import Button1 from "./Button1";
import Button2 from "./Button2";

const Buttons = () => {
    return (<div>
        <Button1 />
        <Button2 />
        <br />
        <button
            style={{
                backgroundColor: "green",
                padding: "10px 20px",
                color: "white",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
                margin: "30px"
            }}
        >INLINE CSS</button>
    </div>);
};

export default Buttons;
