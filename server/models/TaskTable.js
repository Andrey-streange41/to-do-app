import mongoose from "mongoose";

export  const TaskTable = new mongoose.Schema({
     Title:{type:String, required : true},
     Type:{type:String, required : true},
     When:{type:String, required : true},
})

export default mongoose.model('TaskTable', TaskTable);