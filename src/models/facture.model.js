import mongoose from 'mongoose';
import { Schema } from 'mongoose';
import { detailFactureModelName } from './detailFacture.model.js';
import { RendezVousModel, rendezVousModelName } from './rendezVous.model.js';

const factureSchema = new mongoose.Schema({
    ref: { type: String, required: true },
    factureDetail: [{ type: Schema.Types.ObjectId, ref: detailFactureModelName }],
    rendezVous: { type: Schema.Types.ObjectId, ref: "RendezVous" }
});

export const factureModelName = "Facture";

export const FactureModel = mongoose.model(factureModelName, factureSchema);