const Child = (props) => {

    const {name = "Guest", email, city, callFromChild} = props;

    return (
        <div>
            <p>Name : {name}</p>
            <p>Email : {email}</p>
            <p>City : {city}</p>
            <button onClick={() => callFromChild(name)}>Call Parent Function</button>
        </div>
    );
};

export default Child;