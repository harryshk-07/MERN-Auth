import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, "Please provide unique name"],
        unique: [true,"Username Exist"]
    },
    email:{
        type: String,
        required: [true, "Please provide unique email"],
        unique: [true,"Email Exist"]
    },
    password:{
        type: String,
        required: [true, "Please provide a password"],
        unique: false
    },
    firstName:{type:String},
    lastName:{type:String},
    mobile:{type:String},
    address:{type:String},
    profile:{type:String}
})

export default mongoose.model.User || mongoose.model("User",UserSchema)