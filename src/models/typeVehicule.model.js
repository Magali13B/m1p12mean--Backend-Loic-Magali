import mongoose from 'mongoose';

const typeVehiculeSchema = new mongoose.Schema({
    nom: { type: String, required: true }
});

export const typeVehiculeModelName = "TypeVehicule"

export const TypeVehiculeModel = mongoose.model(typeVehiculeModelName, typeVehiculeSchema);