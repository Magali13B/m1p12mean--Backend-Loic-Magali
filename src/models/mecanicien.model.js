import mongoose from 'mongoose';
import { Schema } from 'mongoose';
import { serviceVehiculeModelName } from './serviceVehicule.model.js';

const mecanicienSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mot_de_passe: { type: String, required: true },
    telephone: { type: Number, required: true },
    adresse: { type: String, required: true },
    specialisation: { type: Schema.Types.ObjectId, ref: serviceVehiculeModelName, required: true }
});

export const mecanicienModelName = "Mecanicien"

const MecanicienModel = mongoose.model(mecanicienModelName, mecanicienSchema);
export default MecanicienModel;