import Service from '../models/service.model.js';

export const createService = async (serviceData) => {const service = new Service(serviceData);
    return await service.save();
};

export const getServiceById = async (id) => {
    return await Service.findById(id);
};

export const getAllServices = async () => {
    return await Service.find();
};

export const updateService = async (id, updateData) => {
    return await Service.findByIdAndUpdate(id, updateData, { new: true });
};

export const deleteService = async (id) => {
    return await Service.findByIdAndDelete(id);
};