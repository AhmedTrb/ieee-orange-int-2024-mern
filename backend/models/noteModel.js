import mongoose from "mongoose"


const noteSchema = new mongoose.Schema({
    title:{type:String,required: true},
    description: {type:String,required:true},
    category:{type:String,required:true},
    date:{type:Date,default:Date.now()},
});

const noteModel = mongoose.model.note || mongoose.model("note",noteSchema);

export default noteModel;