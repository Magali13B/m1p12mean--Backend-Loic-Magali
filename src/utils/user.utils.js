import Utilisateur from "../models/user.model.js";

export const createUser = async (userData) => {const user = new Utilisateur(userData);
    return await user.save();
};

export const getUserById = async (id) => {
    return await Utilisateur.findById(id);
};

export const updateUser = async (id, updateData) => {
    return await Utilisateur.findByIdAndUpdate(id, updateData, { new: true });
};

export const getUserByEmail = async (email) => {
    return await Utilisateur.findOne({ email });
};

export const deleteUser = async (id) => {
    return await Utilisateur.findByIdAndDelete(id);
};