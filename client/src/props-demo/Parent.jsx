import Child from "./Child";
import Card from "./Card";

const callFromChild = (name) => {
    console.log(`This log from Parent Component by ${name}`);
};

const Parent = () => {
    return (<div>
        <Child
            name="Ram"
            email="ram@gmail.com"
            city="Trichy"
            callFromChild={callFromChild}
        />

        <Child
            name="Meenakshi"
            email="meenakshi@gmail.com"
            city="Trichy"
            callFromChild={callFromChild}
        />

        <Card>
            <p>Ram, GHSS</p>
        </Card>
        <Card>
            <p>Meenakshi, NMS</p>
        </Card>
    </div>);
};

export default Parent;