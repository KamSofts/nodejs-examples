const socket = io("http://192.168.56.183:3000/todo");

const todoItemInput = document.getElementById("todoItemInput");
const addTodo = document.getElementById("addTodo");
const todoList = document.getElementById("todoList");

socket.on("readItems", (todoItems) => {
    todoList.innerHTML = "";
    todoItems.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = item.value;

        const editButton = document.createElement("button");
        editButton.innerHTML = "Edit";
        editButton.onclick = () => updateItem(item);
        li.appendChild(editButton);

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.onclick = () => deleteItem(item.id);
        li.appendChild(deleteButton);

        todoList.appendChild(li);
    });
});

addTodo.onclick = addItem;

function addItem() {
    const input = todoItemInput.value;
    if (input) {
        socket.emit("createItem", input);
        todoItemInput.value = "";
    }
}

function updateItem(item) {
    const newValue = prompt("Enter new value", item.value);
    if (newValue) {
        socket.emit("updateItem", { id: item.id, value: newValue });
    }
}

function deleteItem(id) {
    if (confirm("Are you sure to delete")) {
        socket.emit("deleteItem", id);
    }
}