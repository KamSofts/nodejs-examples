import { useState } from "react";

const Form2 = () => {

    const [data, setData] = useState({
        firstname: "",
        surname: ""
    });

    const handleChangeEvent = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <form>
                <label htmlFor="firstname">First Name</label>
                <input type="text"
                    name="firstname"
                    value={data.firstname}
                    onChange={handleChangeEvent} />
                <br />
                <label htmlFor="surname">Sur. Name</label>
                <input type="text"
                    name="surname"
                    value={data.surname}
                    onChange={handleChangeEvent}
                />

                <br />
                <p>{JSON.stringify(data)}</p>
            </form>
        </div>
    )
}

export default Form2;