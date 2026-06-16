const List1 = () => {
    const fruits = ["Orange", "Banana", "Mango", "Graphs", "Apple", "Banana"];

    const uniqueFruits = [...new Set(fruits)];
    uniqueFruits.sort();

    const itemList = uniqueFruits.map((item, idx) =>
        <li key={idx}>{item}</li>
    );

    return (
        <div>
            <h3>Sort array list</h3>
            <ol>{itemList}</ol>
        </div>
        );
};

export default List1;