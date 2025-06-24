import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({
    name : {type : String , required : true},
    email: {type : String , required : true},
    password : {type : String , required : true},
    profilepic : {type : String},
    role : {type : String , enum : ['admin' , 'user'] , required : true},
    createdAt : { type : Date , default : Date.now},
    updatedAt : {type : Date , default : Date.now}
}, {timestamps : true})


const UserModel = await  mongoose.model("employee" , userSchema)


export default UserModel