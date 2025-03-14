import mongoose from 'mongoose';
import { rendezVousModelName } from './rendezVous.model.js';

const suiviRendezVousSchema = new mongoose.Schema({
    rendezVous: { type: mongoose.Schema.Types.ObjectId, ref: rendezVousModelName, required: true },
    etat: { type: String, required: true }, // En attente, Confirmé, En cours, Terminé
    progression: { type: Number, required: true, default: 0 },
    descriptionTravaux: { type: String, required: false },
    estimationSortie: { type: Date, required: false },
    dateModification: { type: Date, default: Date.now }
});

export const suiviRendezVousModelName = "SuiviRendezVous";

export const SuiviRendezVousModel = mongoose.model(suiviRendezVousModelName, suiviRendezVousSchema);