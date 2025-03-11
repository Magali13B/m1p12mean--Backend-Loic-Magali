import mongoose from 'mongoose';

const vehicleSchema = new mongoose.Schema({
    //id: { type: String},
    marque: { type: String, required: true },
    modele: { type: String, required: true },
    annee: { type: Number, required: true },
    immatriculation: { type: String, required: true, unique: true },
    client_id: { type: String, required: true }
  });
  
  export default mongoose.model('Vehicule', vehicleSchema);