import { model, Schema } from "mongoose";
import { Tuser } from "./user.interface";

const userSchema = new Schema<Tuser>({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true, minlength: 8 }
}, { timestamps: true })

export const userModel = model<Tuser>('users', userSchema)