import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    todo: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean
    }
},{timestamps:true})

export const Todo = mongoose.model("Todo", todoSchema); 