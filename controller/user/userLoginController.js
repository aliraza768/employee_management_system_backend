import UserModel from "../../models/user";




const userLogin = async(req,res) => {
    const {email ,password} = req.body;
    if(!email || !password){
        throw new Error("PLease Fill ALL THE FIELD")
    }
    
 const User = await UserModel.findOne({email});
    if(!User){
        throw new Error("User not found with provided email")
    }
 


}