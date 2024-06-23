import express from "express"; 
import { createTask, updateTask, listTask,removeTask } from "../controllers/taskController.js"
const taskRouter = express.Router();


taskRouter.post("/create",createTask);
taskRouter.post("/update",updateTask);
taskRouter.post("/list",listTask);
taskRouter.post("/remove",removeTask);

export default taskRouter ;

