import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/database.js';

dotenv.config();

const app = express();
const port = 4000 ;

const DB_URL = process.env.DB_URL;

// Connect to the database
connectDB();


app.listen(port,()=>{
    console.log(`server started at http://localhost:${port}`);
})
