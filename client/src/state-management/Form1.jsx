import { useState } from "react";

const Form1 = () => {

    const [firstName, setFirstName] = useState("");
    const [surName, setSurName] = useState("");

    const handleFirstName = (e) => setFirstName(e.target.value);
    const handleSurName = (e) => setSurName(e.target.value);

    return (
        <div>
            <form>
            <label htmlFor="firstname">First Name</label>
            <input type="text"
                name="firstname"
                value={firstName}
                onChange={handleFirstName} />
            <br />
            <label htmlFor="surname">Sur. Name</label>
            <input type="text"
                name="surname"
                value={surName}
                onChange={handleSurName}
            />

            <br />
            <p>{`${firstName} ${surName}`}</p>
            </form>
        </div>
    )
}

export default Form1;