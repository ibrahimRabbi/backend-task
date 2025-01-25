import { Tuser } from "./user.interface";
import { userModel } from "./user.model";

 
const insertUserservice = async (data:Tuser) => {
    
    const userData:Tuser = {
        username: data.username,
        email: data.email,
        password: data.password
    }
    const insertToDd = await userModel.create(userData)
    return insertToDd
};

export default insertUserservice;