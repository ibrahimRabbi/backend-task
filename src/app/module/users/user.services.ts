import mongoose from "mongoose";
import { Tuser } from "./user.interface";
import { userModel } from "./user.model";
import { Tprofile } from "../profiles/profile.interface";
import { profileModel } from "../profiles/profile.model";

 
const insertUserservice = async (data:Tuser) => {
    const session = await mongoose.startSession();

    try {
        session.startTransaction();

      
        const profileData:Tprofile = {
            bio: data.bio as string,
            interests: data.interests as string[]
        }

        const insertToProfile = await profileModel.create([profileData], { new: true, session: session });


        const userData: Tuser = {
            username: data.username,
            email: data.email,
            password: data.password,
            profile: insertToProfile[0]._id
        }


        const insertToDd = await userModel.create([userData], { new: true, session: session });
        
        await session.commitTransaction()
        await session.endSession()
        return insertToProfile

    }catch(err:any){
        await session.abortTransaction()
        await session.endSession()
        throw new Error(err)
    }
    
    
    
};

export default insertUserservice;