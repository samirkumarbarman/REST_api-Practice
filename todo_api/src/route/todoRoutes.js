import express from "express";
const router = express.Router();
import {getAllTodos, createTodo, getTodoById, updateTodo, deleteTodo} from "../controllers/todoController.js";

router.get('/', getAllTodos);
router.post('/', createTodo);
router.get('/:id', getTodoById);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;