import { DemandeRendezVousModel } from "../models/demandeRendezVous.model.js";

export const createDemandeRendezVous = async (data) => {
    const demandeRendezVous = new DemandeRendezVousModel(data);
    return await demandeRendezVous.save();
};