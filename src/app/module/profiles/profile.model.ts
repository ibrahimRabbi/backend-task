import { model, Schema } from "mongoose";
import { Tprofile } from "./profile.interface";
 

const userSchema = new Schema<Tprofile>({
    user: { type: Schema.Types.ObjectId, required: true, unique: true },
    bio: { type: String, required: true },
    interests: {type:[String],required:true}
}, { timestamps: true })

export const userModel = model<Tprofile>('users', userSchema)