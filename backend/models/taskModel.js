import mongoose from "mongoose"


const taskSchema = new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    date:{type:Date,default:Date.now()},
    deadline:{type:Date,required:true},
    completed:{type:Boolean,default:false},
});

const taskModel = mongoose.model.task || mongoose.model("task",taskSchema);

export default taskModel;