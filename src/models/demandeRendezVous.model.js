import mongoose from 'mongoose';
import { clientModelName } from './client.model.js';
import { rendezVousModelName } from './rendezVous.model.js';
import { serviceVehiculeModelName } from './serviceVehicule.model.js';
import { modeleVehiculeModelName } from './modeleVehicule.model.js';
import { Schema } from 'mongoose';

const demandeRendezVousSchema = new mongoose.Schema({
    client: [{ type: Schema.Types.ObjectId, ref: 'Client' , required: true }],
    date: { type: Date, required: true },
    service: { type: Schema.Types.ObjectId, ref: serviceVehiculeModelName, required: true },
    modeleVehicule: { type: Schema.Types.ObjectId, ref: modeleVehiculeModelName, required: true },
    demandeSpecifique: { type: String },
    rendezVous: { type: Schema.Types.ObjectId, ref: 'RendezVous' }
});

export const demandeRendezVousModelName = "DemandeRendezVous"

export const DemandeRendezVousModel = mongoose.model(demandeRendezVousModelName, demandeRendezVousSchema);