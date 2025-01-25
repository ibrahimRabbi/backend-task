import { model, Schema } from "mongoose";
import { Tprofile } from "./profile.interface";
 

const profileSchema = new Schema<Tprofile>({
    user: { type: Schema.Types.ObjectId, required: true, unique: true },
    bio: { type: String, required: true },
    interests: {type:[String],required:true}
}, { timestamps: true })

export const profileModel = model<Tprofile>('profile', profileSchema)