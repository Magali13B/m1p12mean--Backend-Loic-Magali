import mongoose from 'mongoose';
import { marqueVehiculeModelName } from './marqueVehicule.model.js';
import { typeVehiculeModelName } from './typeVehicule.model.js';
import { Schema } from 'mongoose';

const modeleVehiculeSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    marqueVehicule: { type: mongoose.Schema.Types.ObjectId, ref: marqueVehiculeModelName, required: true },
    typeVehicule: { type: mongoose.Schema.Types.ObjectId, ref: typeVehiculeModelName, required: true },
    puissance: { type: Number, required: true },
    annee: { type: Number, required: true }
});

export const modeleVehiculeModelName = "ModeleVehicule"

export const ModeleVehiculeModel = mongoose.model(modeleVehiculeModelName, modeleVehiculeSchema);