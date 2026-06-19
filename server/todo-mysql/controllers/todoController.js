const db = require("../db");
const { getIO } = require("../socket/socket");

const createNote = async (req, res) => {
    try {
        const { title } = req.body;

        const [result] = await db.query(
            "INSERT INTO todos(title) VALUES(?);",
            [title]
        );

        const [todo] = await db.query(
            "SELECT * FROM todos WHERE id=?",
            [result.insertId]
        );

        getIO().emit("todoAdded", todo[0]);
        res.status(200).json(todo[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const readNotes = async (req, res) => {
    try {
        const [rs] = await db.query(
            "SELECT * FROM todos ORDER BY id DESC"
        );
        res.status(200).json(rs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateNote = async (req, res) => {
    try {
        const id = req.params.id;
        const { title } = req.body;

        await db.query("UPDATE todos SET title=? WHERE id=?;", [title, id]);

        const [todo] = await db.query(
            "SELECT * FROM todos WHERE id=?",
            [id]
        );

        getIO().emit("todoUpdated", todo[0]);
        res.status(200).json(todo[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteNote = async (req, res) => {
    try {
        const id = req.params.id;
        await db.query("DELETE FROM todos WHERE id=?;", [id]);

        getIO().emit("todoDeleted", id);
        res.status(200).json({ message: "Record deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createNote, readNotes, updateNote, deleteNote };