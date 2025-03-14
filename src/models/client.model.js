import mongoose from 'mongoose';
import { rendezVousModelName } from './rendezVous.model.js';
import { Schema } from 'mongoose';

const clientSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mot_de_passe: { type: String, required: true },
  telephone: { type: String, required: true },
  adresse: { type: String, required: true },
  rendezVous: [{ type: Schema.Types.ObjectId, ref: rendezVousModelName }],
  date_creation: { type: Date, default: Date.now }
});

export const clientModelName= "Client";

const ClientModel =  mongoose.model( clientModelName, clientSchema);
export default ClientModel;
