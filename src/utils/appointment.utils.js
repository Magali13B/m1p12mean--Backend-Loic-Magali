import Appointment from '../models/appointment.model.js';

export const createAppointment = async (appointmentData) => {const appointment = new Appointment(appointmentData);
    return await appointment.save();
};

export const getAppointmentById = async (id) => {
    return await Appointment.findById(id);
};

export const getAppointmentsByClientId = async (clientId) => {
    return await Appointment.find({ client_id: clientId });
};

export const getPendingAppointmentsByClientId = async (clientId) => {
    return await Appointment.find({ client_id: clientId, etat: 'en_attente' });
};

export const updateAppointment = async (id, updateData) => {
    return await Appointment.findByIdAndUpdate(id, updateData, { new: true });
};
  

export const deleteAppointment = async (id) => {
    return await Appointment.findByIdAndDelete(id);
};