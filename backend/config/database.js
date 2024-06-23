import mongoose from "mongoose"
const DB_URL = "mongodb+srv://ahmedtrabelsi:TESTtest120@app.xjx0gme.mongodb.net/?retryWrites=true&w=majority&appName=app";
export const connectDB = async ()=> {
    try {
        await mongoose.connect(DB_URL).then(()=>console.log('db connected'));   
    } catch (e){
        console.log(e);
    }
}