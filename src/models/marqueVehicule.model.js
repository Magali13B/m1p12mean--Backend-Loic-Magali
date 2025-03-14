import mongoose from 'mongoose';

const marqueVehiculeSchema = new mongoose.Schema({
    nom: { type: String, required: true }
});

export const marqueVehiculeModelName = "MarqueVehicule"

export const MarqueVehiculeModel = mongoose.model(marqueVehiculeModelName, marqueVehiculeSchema);