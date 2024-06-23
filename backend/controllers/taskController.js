import taskModel from "../models/tasksModel.js";

const createTask = async (req,res)=>{

    const newTask = new taskModel({
        title:req.body.title,
        description:req.body.description,
        deadline:req.body.deadline
    })
    try {
        await newTask.save();
        res.json({success:true,message:"task created"});
    } catch (error) {
        res.json({success:false,message:error.message});
    }
}

const updateTask = async (req,res)=>{
    try {
        const task = await taskModel.findById(req.body.id);
        task.title = req.body.title;
        task.description = req.body.description;
        task.deadline = req.body.deadline;
        await task.save();
        res.json({success:true,message:"task updated"});
    } catch (error) {
        res.json({success:false,message:error.message});
    }
}

const listTask = async (req,res)=>{
    try {
        const tasks = await taskModel.findAll();
        res.json({success:true,data:tasks});
    } catch (error) {
        res.json({success:false,message:error.message});
    }
}
const removeTask = async (req,res)=>{
    try {
        const task = await taskModel.findById(req.body.id);
        await task.remove();
        res.json({success:true,message:"task removed"});
    } catch (error) {
        res.json({success:false,message:error.message});
    }
}