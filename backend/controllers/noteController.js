import noteModel from "../models/noteModel.js";


const createNote = async (req, res) => {
    try {
        const { title, description, category, date } = req.body;
        const newNote = new noteModel({ title, description, category, date });
        const saveNote = await newNote.save();
        res.json({success:true,message:"note created"});
    } catch (e){
        res.json({success:false,message:e.message});
    }
};

const listNote = async (req, res) => {
    try {
        const notes = await noteModel.findAll();
        res.json({success:true,data:notes});
    } catch (e) {
        res.json({success:false,message:e.message});
    }
};

const removeNote = async (req, res) => {
    try {
        const note = await noteModel.findByIdAndRemove(req.body.id);
        res.json({success:true,message:"note deleted"});
    } catch (e) {
        res.json({success:false,message:e.message});
    }
};

const updateNote = async (req, res) => {
    try {
        const note = await noteModel.findByIdAndUpdate(req.body.id, req.body);
        res.json({success:true,message:"note updated"});
    } catch (e) {
        res.json({success:false,message:e.message});
    }
};

export { createNote, listNote, removeNote, updateNote };