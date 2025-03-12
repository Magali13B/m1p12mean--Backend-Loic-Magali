import * as appointmentUt from '../utils/appointment.utils.js'
import Appointment from '../models/appointment.model.js'

export const createAppointment = async (req, res) => {
    try {
        const appointment = await appointmentUt.createAppointment(req.body);
        res.status(201).json(appointment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getAppointmentById = async (req, res) => {
    try {
        const appointment = await appointmentUt.getAppointmentById(req.params.id);
        if (!appointment) return res.status(404).json({ error: 'Rendez-vous non trouvé' });
        res.status(200).json(appointment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getAppointmentsByClientId = async (req, res) => {
    try {
        const appointments = await appointmentUt.getAppointmentsByClientId(req.params.clientId);
        res.status(200).json(appointments);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


