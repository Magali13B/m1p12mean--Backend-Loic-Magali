import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
    //id: { type: String},
    nom: { type: String, required: true },
    description: { type: String, required: true },
    prix_estime: { type: Number, required: true }
});

export default mongoose.model('Service', serviceSchema);