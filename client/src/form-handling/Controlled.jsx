import { useState } from "react";

const Controlled = () => {
    const [data, setData] = useState({
        username: "",
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleChange = (evt) => {
        const key = evt.target.name;
        const value = evt.target.value;
        setData((prev) => ({ ...prev, [key]: value }));

        switch (key) {
            case "username":
                setErrors(prev => ({ ...prev, "username": (value ? "Valid" : "") }));
                break;
            case "email":
                setErrors(prev => ({ ...prev, "email": (/\S+@\S+\.\S+/.test(value) ? "Valid" : "") }))
                break;
            case "password":
                setErrors(prev => ({ ...prev, "password": (value.length >= 6 ? "Valid" : "") }))
                break;
            default:
                break;
        }
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (Object.values(errors).findIndex(item => !item) > -1) {
            alert("All fields are required...!");
        } else {
            alert("Login Success...!");
        }
    };

    return (<>
        <form onSubmit={handleSubmit}>
            <h3>Controlled Form Component Example</h3>
            <div>
                <label htmlFor="username">User Name : </label>
                <input type="text" name="username"
                    value={data.username} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="email">Email : </label>
                <input type="text" name="email"
                    value={data.email} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="password">Password :</label>
                <input type="password" name="password"
                    value={data.password} onChange={handleChange} />
            </div>
            <div>
                <button type="submit">Register</button>
            </div>
            <p>{JSON.stringify(errors)}</p>
        </form>
    </>);
};

export default Controlled;