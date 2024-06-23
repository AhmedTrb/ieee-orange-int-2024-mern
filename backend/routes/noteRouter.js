import express from "express";
import { createNote, listNote, removeNote,updateNote } from "../controllers/noteController.js";


const noteRouter = express.Router();

noteRouter.post("/create",createNote);
noteRouter.post("/list",listNote);
noteRouter.post("/remove",removeNote);
noteRouter .post("/update",updateNote);


export default noteRouter ;