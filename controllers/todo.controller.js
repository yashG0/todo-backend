import { Todo } from "../models/todo.model.js";

const getAllTodo = async (req, res) => {
    try {
        const todos = await Todo.find({});
        return res.status(200).json({ message: "Todos fetched successfully", data: todos, total: todos.length });

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const getTodoByIndex = async (req, res) => {
    try {
        // Find the todo document by its ID
        const { id } = req.params;
        const todo = await Todo.findById(id);
        return res.status(200).json(todo);
    } catch (error) {
        // Handle errors
        return res.status(500).json({ message: error.message })
    }
}

const saveTodo = async (req, res) => {
    try {
        const product = await Todo.create(req.body);
        return res.status(200).json({ message: "Todo added successfully", data: product });
    } catch (error) {
        // Handle errors
        return res.status(500).json({ message: error.message })

    }
}
const updateTodoByIndex = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findByIdAndUpdate(id, req.body);
        if (!todo) {
            return res.status(400).json({ message: "Failed to update todo" });
        }
        return res.status(200).json({ message: "Todo updated successfully", data: todo });
    } catch (error) {
        // Handle errors
        return res.status(500).json({ message: error.message })

    }
}
const deleteTodoByIndex = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findByIdAndDelete(id);
        if (!todo) {
            return res.status(400).json({ message: "Failed to delete Todo" });
        }
        return res.status(200).json({ message: "Todo deleted successfully" });
    } catch (error) {
        // Handle errors
        return res.status(500).json({ message: error.message })
    }
}


export { getAllTodo, getTodoByIndex, saveTodo, updateTodoByIndex, deleteTodoByIndex }