import WorkAccomplished from '../models/workAccomplished.model.js';

export const createWorkAccomplished = async (workData) => {const work = new WorkAccomplished(workData);
    return await work.save();
};

export const getWorkAccomplishedById = async (id) => {
    return await WorkAccomplished.findById(id);
};
  
export const getWorkByAppointmentId = async (appointmentId) => {
    return await WorkAccomplished.find({ appointment_id: appointmentId });
};
  
export const updateWorkAccomplished = async (id, updateData) => {
    return await WorkAccomplished.findByIdAndUpdate(id, updateData, { new: true });
};
  
export const deleteWorkAccomplished = async (id) => {
    return await WorkAccomplished.findByIdAndDelete(id);
};