import { MarqueVehiculeModel } from "../models/marqueVehicule.model.js";

export const createMarqueVehicule = async (data) => {
    const marqueVehicule = new MarqueVehiculeModel(data);
    return await marqueVehicule.save();
};