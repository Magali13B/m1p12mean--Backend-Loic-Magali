import { ServiceVehiculeModel } from "../models/serviceVehicule.model.js";

export const createServiceVehicule = async (data) => {
    const serviceVehicule = new ServiceVehiculeModel(data);
    return await serviceVehicule.save();
};