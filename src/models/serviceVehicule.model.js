import mongoose from 'mongoose';

const serviceVehiculeSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    prix: { type: Number, required: true }
});

export const serviceVehiculeModelName = "ServiceVehicule"

export const ServiceVehiculeModel = mongoose.model(serviceVehiculeModelName, serviceVehiculeSchema);