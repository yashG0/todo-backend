import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import todoRouter from './routes/todo.route.js';

dotenv.config();
const PORT = process.env.PORT;
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api/todos", todoRouter)


try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    if (conn) {
        console.log("Mongo Connected Successfully");
    }
    app.listen(PORT, () => {
        console.log(`Your server is running at http://localhost:${PORT}`);
    })

} catch (error) {
    console.error("Failed to connect mongodb", error.message);
}
