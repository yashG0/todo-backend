import { Router } from 'express'
import { getAllTodo, getTodoByIndex, saveTodo, updateTodoByIndex, deleteTodoByIndex } from '../controllers/todo.controller.js'

const todoRouter = Router();

// Define routes and their corresponding controller methods
todoRouter.get('/', getAllTodo);
todoRouter.get('/:id', getTodoByIndex);
todoRouter.post('/', saveTodo);
todoRouter.put('/:id', updateTodoByIndex);
todoRouter.delete('/:id', deleteTodoByIndex);

export default todoRouter;