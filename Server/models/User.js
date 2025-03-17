// for schema purpose 

import mongoose from 'mongoose';
const UserSchema = new mongoose.Schema({
    FirstName: String,
    LastName: String,
    Email: { type: String, unique: true },
    Password: String

})


const user=mongoose.model("user",UserSchema) ;
export default user;

