import { SuiviRendezVousModel } from "../models/suiviRendezVous.model.js";

export const createSuiviRendezVous = async (data) => {
    const suivi = new SuiviRendezVousModel(data);
    return await suivi.save();
};