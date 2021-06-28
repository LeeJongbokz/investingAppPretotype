import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    
    phoneNum: String     

})

const User = mongoose.model("User", UserSchema);

export default User;