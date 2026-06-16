import { fruits } from './data.js';

const List2 = () => {

    fruits.sort((a, d) => a.name.localeCompare(d.name)); // ascending
    // fruits.sort((a, d) => d.name.localeCompare(a.name)); // decending

    const itemList = fruits.map(item =>
        <li key={item.id}><b>{item.name}</b> is {item.color}</li>
    );

    return (
        <>
        <h3>Sort list of objects</h3>
        <ol>{itemList}</ol>
        </>
    )
}

export default List2;