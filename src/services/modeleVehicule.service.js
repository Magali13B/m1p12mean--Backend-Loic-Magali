import { ModeleVehiculeModel } from "../models/modeleVehicule.model.js";

export const createModeleVehicule = async (data) => {
    const modeleVehicule = new ModeleVehiculeModel(data);
    return await modeleVehicule.save();
};