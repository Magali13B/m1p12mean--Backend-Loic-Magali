import Vehicule from "../models/vehicle.model.js";

export const createVehicle = async (vehicleData) => { const vehicle = new Vehicule(vehicleData);
    return await Vehicule.save();
};

export const getVehicleById = async (id) => {
    return await Vehicule.findById(id);
};
  
export const getVehiclesByClientId = async (clientId) => {
    return await Vehicule.find({ client_id: clientId });
};
  
export const updateVehicle = async (id, updateData) => {
    return await Vehicule.findByIdAndUpdate(id, updateData, { new: true });
};
  
export const deleteVehicle = async (id) => {
    return await Vehicule.findByIdAndDelete(id);
};