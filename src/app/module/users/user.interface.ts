import { Types } from "mongoose"

export type Tuser = {
    username: string,
    email: string,
    password: string,
    bio?: string,
    interests?: string[]
    profile: Types.ObjectId
}