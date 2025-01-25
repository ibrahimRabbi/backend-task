import { model, Schema } from "mongoose";
import { Tprofile } from "./profile.interface";
 

const profileSchema = new Schema<Tprofile>({
    bio: { type: String, required: true },
    interests: {type:[String],required:true}
})

export const profileModel = model<Tprofile>('profile', profileSchema)