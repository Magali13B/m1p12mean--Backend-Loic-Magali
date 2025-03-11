import mongoose from 'mongoose';

const workAccomplishedSchema = new mongoose.Schema({
    //id: { type: String},
    appointment_id: { type: String, required: true },
    service_id: { type: String, required: true },
    mecanicien_id: { type: String, required: true }
  });

export default mongoose.model('WorkAccomplished', workAccomplishedSchema);