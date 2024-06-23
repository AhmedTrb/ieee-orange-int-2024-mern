import express from 'express';
import cors from "cors"
import dotenv from 'dotenv';
import { connectDB } from './config/database.js';
import taskRouter from './routes/taskRouter.js';
import noteRouter from './routes/noteRouter.js';
dotenv.config();

const app = express();
const port = 4000 ;
app.use(express.json());
app.use(cors());

const DB_URL = process.env.DB_URL;

// Connect to the database
connectDB();


// API endpoints
app.use("/api/tasks",taskRouter);
app.use("/api/notes",noteRouter);


app.listen(port,()=>{
    console.log(`server started at http://localhost:${port}`);
})
