import { checkIfUserExists, hashPassword, comparePassword, generateToken } from '../utils/auth.utils.js';
import Utilisateur from '../models/user.model.js';


export const register = async (req, res) => {
  try {
    const { nom, prenom, email, mot_de_passe, role, telephone, adresse } = req.body;

    const userExist = await checkIfUserExists(email);
    if (userExist) return res.status(400).json({ message: 'Cet email est déjà utilisé.' });

    const hashedPassword = await hashPassword(mot_de_passe);

    const user = new Utilisateur({
      nom,
      prenom,
      email,
      mot_de_passe: hashedPassword,
      role,
      telephone,
      adresse
    });

    await user.save();
    res.status(200).json({ message: 'Utilisateur créé avec succès !' });

  } catch (error) {
    // res.status(500).json({ message: 'Erreur serveur', error });
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur', error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, mot_de_passe } = req.body;

    const user = await checkIfUserExists(email);
    if (!user) return res.status(400).json({ message: 'Identifiants invalides.' });

    const isMatch = await comparePassword(mot_de_passe, user.mot_de_passe);
    if (!isMatch) return res.status(400).json({ message: 'Identifiants invalides.' });

    const token = generateToken(user._id, user.role);

    res.status(200).json({ token, user });

  } catch (error) {
    // res.status(500).json({ message: 'Erreur serveur', error });
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur', error: error.message });
  }
};
