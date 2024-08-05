//task model
import { Schema, model } from 'mongoose';
import { ITask } from './task.interface';




const taskSchema = new Schema<ITask>({
    name: { type: String, required: true },
     isDone:{type:Boolean},
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
  }, { timestamps: true });
  
  export const Task = model<ITask>('task', taskSchema);