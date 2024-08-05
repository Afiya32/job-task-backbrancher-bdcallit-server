
// user model

import { model, Schema } from "mongoose";
import {z} from "zod";
import { IUsers } from "./user.interface";
const usersSchema= new Schema<IUsers>({
    name: {type:String,required:true},
    email: {type:String,required:true,unique:true},
    password: {type:String,required:true},
    role:{type:String},
    phone:{type:Number},
    address:{type:String},
    image:{type:String}
})

export const userSignupSchema =z.object({
    name: z.string().min(1,"Name is required"),
    email: z.string().email("Invalid email"),
    password:z.string().min(6,"Password must be at least 6 characters long"),
    phone:z.string().min(10,"Phone number must be at least 10 digits",

    )
})
export const UsersModel = model<IUsers>('User',usersSchema);
