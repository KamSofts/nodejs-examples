const express = require("express");
const router = express.Router();
// user modules
const { createNote, readNotes, updateNote, deleteNote } = require("../controllers/todoController");

router.post("/", createNote);
router.get("/", readNotes);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

module.exports = router;
