import mogoose from "mongoose";
const TaskSchema=new mongoose.Schema(
    {
        title:{type:string,required: true},
        description:{type:String,required: true},
        status:{type:String,required: true},
        user_id:{type:Mongoose.Schema.Type.ObjectId,required:true}
    },
    {
        timestamps:true,
        versionKey:False
    }
)
const Task=mogoose.model("tasks",TaskSchema);
export default Task;
