import { model, Schema } from "mongoose";
import { Tuser } from "./user.interface";
import bcrypt from 'bcrypt'


const userSchema = new Schema<Tuser>({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true, minlength: 8 },
    profile: { type: Schema.Types.ObjectId, required: true, ref: 'profile', unique: true },
}, { timestamps: true })


userSchema.pre<Tuser>('save', async function (next) {
    const hasing = await bcrypt.hash(this.password, 10)
    this.password = hasing
    next()
})

export const userModel = model<Tuser>('users', userSchema)