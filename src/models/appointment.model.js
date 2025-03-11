import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
    //id: { type: String },
    client_id: { type: String, required: true },
    mecanicien_id: { type: String },
    vehicle_id: { type: String, required: true },
    date_appointment: { type: Date, required: true },
    etat: { type: String, enum: ['en_attente', 'confirmé', 'en_cours', 'terminé'], default: 'en_attente' },
    estimation_sortie: { type: Date }
});

export default mongoose.model('Appointment', appointmentSchema);