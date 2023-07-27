import mongoose from 'mongoose';

// Define the user schema and model
const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

const userModel = mongoose.model('users', UserSchema);

export default userModel;