import mongoose from 'mongoose';
import { Schema } from 'mongoose';
import { demandeRendezVousModelName } from './demandeRendezVous.model.js';
import { mecanicienModelName } from './mecanicien.model.js';
import { factureModelName } from './facture.model.js';

const rendezVousSchema = new mongoose.Schema({
    demandeRendezVous: { type: Schema.Types.ObjectId, ref: demandeRendezVousModelName, required: true },
    date: { type: Date, required: true },
    dureeJour: { type: Number, required: true },
    mecanicien: { type: Schema.Types.ObjectId, ref: mecanicienModelName, required: true },
    facture: { type: Schema.Types.ObjectId, ref: factureModelName }
});

export const rendezVousModelName = "RendezVous";

export const RendezVousModel = mongoose.model(rendezVousModelName, rendezVousSchema);