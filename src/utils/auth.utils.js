import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Client from '../models/client.model.js';
import Mecanicien from '../models/mecanicien.model.js';

export const checkIfUserExists = async (email) => {
  const userExist = await Client.findOne({ email }) || await Mecanicien.findOne({ email });
  return userExist;
};

export const hashPassword = async (mot_de_passe) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(mot_de_passe, salt);
};

export const comparePassword = async (enteredPassword, storedPassword) => {
  return await bcrypt.compare(enteredPassword, storedPassword);
};

export const generateToken = (userId, userRole) => {
  return jwt.sign({ id: userId, role: userRole }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

