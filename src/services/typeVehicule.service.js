import { TypeVehiculeModel } from "../models/typeVehicule.model.js";

export const createTypeVehicule = async (data) => {
    const typeVehicule = new TypeVehiculeModel(data);
    return await typeVehicule.save();
};