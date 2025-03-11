import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  //id: { type: String },
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mot_de_passe: { type: String, required: true },
  role: { type: String, enum: ['client', 'mecanicien', 'manager']},
  telephone: { type: String, required: true },
  adresse: { type: String, required: true },
  date_creation: { type: Date, default: Date.now }
});

export default mongoose.model('Utilisateur', userSchema);
