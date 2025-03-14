import mongoose from 'mongoose';
import { serviceVehiculeModelName } from './serviceVehicule.model.js';
import { pieceModelName } from './piece.model.js';
import { Schema } from 'mongoose';

const detailFactureSchema = new mongoose.Schema({
    serviceVehicule: { type: Schema.Types.ObjectId, ref: serviceVehiculeModelName, required: true },
    piece: { type: Schema.Types.ObjectId, ref: pieceModelName },
    autreDesignation: { type: String },
    montant: { type: Number, required: true }
});

export const detailFactureModelName = "DetailFacture";

export const DetailFactureModel = mongoose.model(detailFactureModelName, detailFactureSchema);