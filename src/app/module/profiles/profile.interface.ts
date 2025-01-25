import { Types } from "mongoose"

export type Tprofile = {
    user: Types.ObjectId,
    bio: string,
    interests : string[]
}