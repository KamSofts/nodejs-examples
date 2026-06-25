import List1 from './List1';
import List2 from './List2';
import List3 from './List3';

const RenderList = () => {
    return (<>
        <h1>Render List Examples</h1>
        <List1 />
        <List2 />
        <h3>Filter lists</h3>
        <List3 type="fruits1" color="Yellow" />
        <List3 type="vegetables" color="Red" />
    </>);
};

export default RenderList;