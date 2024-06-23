import express from 'express';
import cors from "cors"
import dotenv from 'dotenv';
import { connectDB } from './config/database.js';
import taskRouter from './routes/taskRouter.js';
dotenv.config();

const app = express();
const port = 4000 ;
app.use(express());
app.use(cors());

const DB_URL = process.env.DB_URL;

// Connect to the database
connectDB();
app.use("/api/tasks",taskRouter);

app.listen(port,()=>{
    console.log(`server started at http://localhost:${port}`);
})
