import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    authentication: { type: String, required: true, select: false },
    salt: { type: String, select: false },
    sessionToken: { type: String, select: false },
});

export const User = mongoose.model("User", userSchema);

export const getUsers = () => User.find({});
export const getUserByEmail = (email: string) => User.findOne({ email: email });
export const getUserBySessionToken = (sessionToken: string) =>
    User.findOne({ "authentication.sessionToken": sessionToken });
export const getUserById = (id: string) => User.findById(id);
export const createUser = (user: any) => new User(user).save();
export const deleteUserById = (id: string) => User.findByIdAndDelete(_id: id);
export const updateUserById = (id: string, user: any) =>
    User.findByIdAndUpdate(id, user, { new: true });
